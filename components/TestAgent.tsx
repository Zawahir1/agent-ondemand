"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneCall, PhoneIncoming, MessageSquare, Volume2, Mic, MicOff, Copy, Check, QrCode, Play, StopCircle, ArrowRight, Loader2, Sparkles, Sliders, Settings, Clock, User, Dumbbell, UserCheck, Euro, Calendar, FileText, Brain, Bell, RefreshCw, Link2, Shield, BarChart3, Car, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

interface AgentOption {
    id: string;
    name: string;
    role: string;
    phone: string;
    greeting: string;
    color: string;
}

interface TestAgentProps {
    initialAgentId?: string;
    allowedAgents?: string[];
    allowedTabs?: ("call" | "getcalled")[];
}

export default function TestAgent({
    initialAgentId = "receptionist",
    allowedAgents = ["receptionist", "realestate"],
    allowedTabs = ["call", "getcalled"]
}: TestAgentProps) {
    const { t } = useLanguage();

    const agents: AgentOption[] = [
        {
            id: "receptionist",
            name: t("receptionist.name" as TranslationKey, "AI Receptionist"),
            role: t("receptionist.role" as TranslationKey, "Inbound voice support & demo booking worker"),
            phone: "+39 02 8127 9680",
            greeting: t("receptionist.greeting" as TranslationKey, "Hi, thank you for calling Agent On Demand. I can answer questions about our pricing, solutions, or book a live demo with our team today. What can I help you with?"),
            color: "from-emerald-500 to-green-600"
        },
        {
            id: "realestate",
            name: t("realestate.name" as TranslationKey, "Real Estate AI Agent"),
            role: t("realestate.role" as TranslationKey, "Automated listing consultations & showing bookings"),
            phone: "+39 02 8736 4324",
            greeting: t("realestate.greeting" as TranslationKey, "Hello, welcome to Oakwood Realty. I can help you check listing availability, schedule open houses, or book a home showing today. Are you looking to buy or sell?"),
            color: "from-teal-500 to-emerald-400"
        },
        {
            id: "outbound",
            name: t("outbound.name" as TranslationKey, "Outbound BDR Agent"),
            role: t("outbound.role" as TranslationKey, "Proactive sales outreach and cold-lead qualification worker"),
            phone: "+1 (888) 321-4322",
            greeting: t("outbound.greeting" as TranslationKey, "Hello, this is Ava calling from Agent On Demand. I saw you were looking to scale your outbound lead generation and wanted to follow up. How are you handling your outbound campaigns currently?"),
            color: "from-blue-500 to-emerald-500"
        },
        {
            id: "automotive",
            name: t("automotive.name" as TranslationKey, "Automotive AI Agent"),
            role: t("automotive.role" as TranslationKey, "Automated service bookings and sales qualification"),
            phone: "+1 (888) 321-4324",
            greeting: t("automotive.greeting" as TranslationKey, "Hi, thanks for calling Apex Motors. I can help you schedule a vehicle service appointment, check vehicle sales inventory, or book a test drive. What can I do for you today?"),
            color: "from-emerald-600 to-teal-600"
        },
        {
            id: "gym",
            name: t("gym.name" as TranslationKey, "Gym & Fitness AI Agent"),
            role: t("gym.role" as TranslationKey, "Class bookings, trial signups, and membership support"),
            phone: "+1 (888) 321-4325",
            greeting: t("gym.greeting" as TranslationKey, "Hi, thanks for calling Gym Max. I can help you book a group fitness class, schedule a personal training session, or activate a free guest pass. What class are you looking to join?"),
            color: "from-[#00ff66] to-emerald-700"
        }
    ];

    const [activeTab, setActiveTab] = useState<"call" | "getcalled">(
        allowedTabs.includes("call") ? "call" : "getcalled"
    );
    const [selectedAgentId, setSelectedAgentId] = useState<string>(initialAgentId);
    const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];
    
    // Copy states
    const [copied, setCopied] = useState(false);

    // Call state (Web Widget)
    const [callState, setCallState] = useState<"idle" | "connecting" | "active" | "speaking" | "listening" | "disconnected">("idle");
    const [isMuted, setIsMuted] = useState(false);
    const [transcript, setTranscript] = useState<{ sender: "agent" | "user"; text: string }[]>([]);
    
    // Canvas & Microphone audio variables
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Outbound form states
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [scenario, setScenario] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [outboundStatus, setOutboundStatus] = useState<"idle" | "calling" | "connected" | "ended">("idle");
    const [outboundTimer, setOutboundTimer] = useState(0);

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedAgent.phone);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Text-to-speech engine wrapper
    const speakGreeting = (text: string) => {
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Try to find a nice English voice
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => voice.name.includes("Google") || voice.name.includes("Natural"));
            if (preferredVoice) utterance.voice = preferredVoice;
            
            utterance.rate = 1.0;
            utterance.pitch = 1.0;

            utterance.onstart = () => {
                setCallState("speaking");
            };

            utterance.onend = () => {
                setCallState("listening");
            };

            window.speechSynthesis.speak(utterance);
        } else {
            // Fallback typing simulation
            setCallState("speaking");
            setTimeout(() => {
                setCallState("listening");
            }, 3000);
        }
    };

    // Audio Visualizer setup using browser microphone stream
    const startMicVisualizer = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            streamRef.current = stream;
            
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            const audioContext = new AudioContextClass();
            audioContextRef.current = audioContext;

            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 64;
            analyserRef.current = analyser;

            const microphone = audioContext.createMediaStreamSource(stream);
            microphone.connect(analyser);
            microphoneRef.current = microphone;

            drawWaveform();
        } catch (err) {
            console.warn("Microphone access denied or not available. Using simulated waveform.");
            drawSimulatedWaveform();
        }
    };

    const stopMicVisualizer = () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
        }
        audioContextRef.current = null;
        analyserRef.current = null;
        microphoneRef.current = null;
        streamRef.current = null;
    };

    // Real audio waveform draw
    const drawWaveform = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const analyser = analyserRef.current;
        const bufferLength = analyser ? analyser.frequencyBinCount : 32;
        const dataArray = new Uint8Array(bufferLength);

        const render = () => {
            if (!canvasRef.current) return;
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            if (analyser) {
                analyser.getByteFrequencyData(dataArray);
            }

            ctx.fillStyle = "rgba(0, 255, 102, 0.03)";
            ctx.fillRect(0, 0, W, H);

            // Draw center visualizer bars
            const barWidth = (W / bufferLength) * 1.5;
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                // Get audio frequency scale, or make a tiny noise if muted
                barHeight = analyser ? (dataArray[i] / 255) * H * 0.8 : 4;
                if (isMuted) barHeight = 2;

                const gradient = ctx.createLinearGradient(0, H, 0, 0);
                gradient.addColorStop(0, "rgba(4, 120, 87, 0.1)");
                gradient.addColorStop(0.5, "rgba(0, 255, 102, 0.6)");
                gradient.addColorStop(1, "rgba(52, 211, 153, 0.9)");

                ctx.fillStyle = gradient;
                
                // Draw rounded columns
                ctx.beginPath();
                ctx.roundRect(x, H / 2 - barHeight / 2, barWidth - 4, barHeight + 4, 4);
                ctx.fill();

                x += barWidth;
            }

            animationFrameRef.current = requestAnimationFrame(render);
        };

        render();
    };

    // Simulated wave fallback
    const drawSimulatedWaveform = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let step = 0;
        const render = () => {
            if (!canvasRef.current) return;
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            step += 0.15;
            ctx.fillStyle = "rgba(0, 255, 102, 0.02)";
            ctx.fillRect(0, 0, W, H);

            const numBars = 24;
            const barWidth = W / numBars;

            for (let i = 0; i < numBars; i++) {
                // Generate sine wave amplitude
                let factor = Math.sin(step + i * 0.4);
                if (factor < 0) factor = Math.abs(factor) * 0.2;
                
                const heightMultiplier = callState === "speaking" ? 0.7 : callState === "listening" ? 0.3 : 0.05;
                const barHeight = (factor * H * heightMultiplier) + 4;

                const gradient = ctx.createLinearGradient(0, H, 0, 0);
                gradient.addColorStop(0, "rgba(4, 120, 87, 0.05)");
                gradient.addColorStop(0.5, "rgba(0, 255, 102, 0.5)");
                gradient.addColorStop(1, "rgba(52, 211, 153, 0.8)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(i * barWidth + 2, H / 2 - barHeight / 2, barWidth - 4, barHeight, 3);
                ctx.fill();
            }

            animationFrameRef.current = requestAnimationFrame(render);
        };
        render();
    };

    // Trigger Browser Voice call sequence
    const startCall = async () => {
        setCallState("connecting");
        setTranscript([{ sender: "agent", text: "Connecting secure web RTC call..." }]);

        setTimeout(async () => {
            setCallState("active");
            setTranscript([
                { sender: "agent", text: `Connected to ${selectedAgent.name} (Live Sandbox)` },
                { sender: "agent", text: selectedAgent.greeting }
            ]);
            speakGreeting(selectedAgent.greeting);
            await startMicVisualizer();
        }, 1500);
    };

    const endCall = () => {
        setCallState("disconnected");
        stopMicVisualizer();
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        setTranscript(prev => [...prev, { sender: "agent", text: "Call disconnected by user." }]);
        setTimeout(() => setCallState("idle"), 2000);
    };

    // Outbound Dial scheduling simulation
    const handleOutboundSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) return;

        setIsSubmitting(true);

        if (selectedAgent.id === "receptionist") {
            try {
                await fetch("https://receptionist.agent-ondemand.com/api/form-webhooks/trigger/5df211e9-ab84-4d15-8e9c-4b6343c63d53", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: ""
                    })
                });
            } catch (err) {
                console.error("Failed to trigger outbound webhook:", err);
            }
        }

        setIsSubmitting(false);
        setOutboundStatus("calling");
        setOutboundTimer(0);
    };

    // Outbound timer logic
    useEffect(() => {
        let interval: any;
        if (outboundStatus === "calling") {
            interval = setInterval(() => {
                setOutboundTimer(prev => {
                    if (prev >= 6) {
                        setOutboundStatus("connected");
                        return 6;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else if (outboundStatus === "connected") {
            interval = setInterval(() => {
                setOutboundTimer(prev => {
                    if (prev >= 20) {
                        setOutboundStatus("ended");
                        return 20;
                    }
                    return prev + 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [outboundStatus]);

    useEffect(() => {
        // Cancel speech when switching tabs or agents
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        setCallState("idle");
        stopMicVisualizer();
    }, [activeTab, selectedAgent]);

    const showLeftColumn = allowedTabs.length > 1 || allowedAgents.length > 1;

    return (
        <section className="py-28 bg-transparent relative overflow-hidden z-10 border-y border-emerald-950/20">
            {/* Background Glow - Premium multi-layered emerald glow */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00ff66]/[0.03] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-emerald-600/[0.02] to-[#00ff66]/0.02 blur-[200px] pointer-events-none" />

            {/* Grid Pattern overlay for techy visual pop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#022c15_1px,transparent_1px),linear-gradient(to_bottom,#022c15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 w-full relative">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[10px] bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4 shadow-[0_0_20px_rgba(0,255,102,0.15)] animate-pulse">
                        Voice Sandbox
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight mb-6 leading-tight">
                        {t("sandbox.title")}
                    </h2>
                    <p className="text-[#fbf9f7]/60 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed">
                        {t("sandbox.subtitle")}
                    </p>
                    <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-[#00ff66] to-transparent mx-auto mt-6 shadow-[0_0_10px_#00ff66]" />
                </div>
 
                {/* Premium Console Master Border Wrapper */}
                <div className="relative p-0.5 rounded-[2.5rem] bg-gradient-to-b from-[#00ff66]/15 via-white/5 to-[#00ff66]/5 shadow-[0_0_50px_rgba(0,255,102,0.03)]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-4 md:p-6 bg-[#000502]/85 backdrop-blur-3xl rounded-[2.4rem]">
                    
                        {/* Left Column: Tab Selectors & Agent Profiles */}
                        {showLeftColumn && (
                            <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-[#020d06]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                {/* Panel Ambient Lights */}
                                <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gradient-to-br from-[#00ff66]/5 to-transparent blur-[60px] pointer-events-none" />
                                
                                <div className="space-y-6 relative z-10">
                                    <h3 className="text-lg font-bold text-[#fbf9f7] tracking-wide border-b border-white/5 pb-3 flex items-center gap-2.5 font-intrinseca">
                                        <span className="w-6 h-6 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] flex items-center justify-center text-xs font-mono font-bold">1</span>
                                        {t("sandbox.step1")}
                                    </h3>
                                    
                                    {/* Option Tabs Grid */}
                                    <div className="grid grid-cols-1 gap-3">
                                        <button
                                            onClick={() => {
                                                setActiveTab("call");
                                                if (selectedAgentId !== "receptionist" && selectedAgentId !== "realestate") {
                                                    setSelectedAgentId("receptionist");
                                                }
                                            }}
                                            className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer select-none ${
                                                activeTab === "call"
                                                    ? "bg-[#011409]/60 border-[#00ff66]/40 text-white shadow-[0_0_25px_rgba(0,255,102,0.06),inset_0_1px_1px_rgba(255,255,255,0.05)] scale-[1.01]"
                                                     : "bg-black/40 border-white/5 text-[#fbf9f7]/55 hover:text-white hover:bg-black/60 hover:border-white/10"
                                             }`}
                                         >
                                             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                                 activeTab === "call" ? "bg-[#00ff66]/20 text-[#00ff66]" : "bg-white/5 text-white/30"
                                             }`}>
                                                 <Phone className="w-5 h-5" />
                                             </div>
                                             <div className="flex-1">
                                                 <h4 className="text-sm font-bold text-[#fbf9f7]">{t("sandbox.tab.call")}</h4>
                                                 <p className="text-[11px] text-[#fbf9f7]/40 font-medium mt-0.5">{t("sandbox.tab.call.desc")}</p>
                                             </div>
                                             <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === "call" ? "translate-x-1 text-[#00ff66]" : "text-white/20"}`} />
                                         </button>
     
                                         <button
                                             onClick={() => {
                                                 setActiveTab("getcalled");
                                                 setSelectedAgentId("receptionist");
                                             }}
                                             className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer select-none ${
                                                 activeTab === "getcalled"
                                                     ? "bg-[#011409]/60 border-[#00ff66]/40 text-white shadow-[0_0_25px_rgba(0,255,102,0.06),inset_0_1px_1px_rgba(255,255,255,0.05)] scale-[1.01]"
                                                     : "bg-black/40 border-white/5 text-[#fbf9f7]/55 hover:text-white hover:bg-black/60 hover:border-white/10"
                                             }`}
                                         >
                                             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                                 activeTab === "getcalled" ? "bg-[#00ff66]/20 text-[#00ff66]" : "bg-white/5 text-white/30"
                                             }`}>
                                                 <PhoneIncoming className="w-5 h-5" />
                                             </div>
                                             <div className="flex-1">
                                                 <h4 className="text-sm font-bold text-[#fbf9f7]">{t("sandbox.tab.getcalled")}</h4>
                                                 <p className="text-[11px] text-[#fbf9f7]/40 font-medium mt-0.5">{t("sandbox.tab.getcalled.desc")}</p>
                                             </div>
                                             <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === "getcalled" ? "translate-x-1 text-[#00ff66]" : "text-white/20"}`} />
                                         </button>
                                     </div>
                                 </div>
     
                                 {/* Agent Selector Section */}
                                 <div className="space-y-4 relative z-10">
                                     <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                                         <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                                         {t("sandbox.step2")}
                                     </h3>
                                     <div className="flex flex-wrap gap-2">
                                         {agents
                                             .filter(agent => {
                                                 if (!allowedAgents.includes(agent.id)) return false;
                                                 if (activeTab === "getcalled") {
                                                     return agent.id === "receptionist";
                                                 }
                                                 return true;
                                             })
                                             .map(agent => (
                                             <button
                                                 key={agent.id}
                                                 onClick={() => setSelectedAgentId(agent.id)}
                                                 className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer relative overflow-hidden ${
                                                     selectedAgent.id === agent.id
                                                         ? "bg-[#00ff66]/10 border-[#00ff66] text-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.15)] scale-[1.02]"
                                                         : "bg-black/30 border-white/5 text-[#fbf9f7]/60 hover:text-[#fbf9f7] hover:bg-white/5 hover:border-white/10"
                                                 }`}
                                             >
                                                 {agent.name}
                                             </button>
                                         ))}
                                     </div>
                                 </div>
                             </div>
                        )}
 
                     {/* Right Column: Dynamic Interactive Sandbox Panels */}
                     <div className={`${showLeftColumn ? "lg:col-span-7" : "lg:col-span-8 lg:col-start-3"} flex`}>
                         <div className="w-full bg-[#020d06]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden group">
                             
                             {/* Panel Ambient Lights */}
                             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#00ff66]/10 to-transparent blur-[80px] pointer-events-none transition-all duration-500" />
                             
                             <AnimatePresence mode="wait">
                                {/* ── MODE 2: CALL YOURSELF PANEL ── */}
                                {activeTab === "call" && (
                                    <motion.div
                                        key="call-panel"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.25 }}
                                        className="h-full flex flex-col justify-between gap-8 w-full"
                                    >
                                        <div className="space-y-4">
                                            <span className="text-[10px] text-[#00ff66] uppercase tracking-wider font-bold bg-[#00ff66]/10 px-2.5 py-1 rounded">
                                                {t("sandbox.panel.call.badge")}
                                            </span>
                                            <div className="space-y-1">
                                                <h4 className="text-2xl font-bold text-white font-intrinseca">{t("sandbox.panel.call.title")}</h4>
                                                <p className="text-xs text-white/50">{t("sandbox.panel.call.desc")}</p>
                                            </div>
                                        </div>

                                        <div className="bg-black/30 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
                                            <div className="space-y-2 text-center md:text-left">
                                                <span className="text-[9px] uppercase tracking-widest text-[#fbf9f7]/40 block font-bold">{t("sandbox.panel.call.number")}</span>
                                                <div className="text-3xl font-black text-white font-mono tracking-tight">
                                                    {selectedAgent.phone}
                                                </div>
                                                <span className="text-[10px] text-[#00ff66]/80 font-bold block">{t("sandbox.panel.call.tollfree")}</span>
                                            </div>

                                            <div className="flex gap-3">
                                                <button
                                                    onClick={handleCopy}
                                                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 transition-all flex items-center justify-center cursor-pointer relative"
                                                >
                                                    {copied ? <Check className="text-[#00ff66] w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                                </button>
                                                <a
                                                    href={`tel:${selectedAgent.phone}`}
                                                    className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-[#00ff66]/20 hover:bg-[#00ff66]/20 text-[#00ff66] transition-all flex items-center justify-center cursor-pointer"
                                                >
                                                    <Phone className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="space-y-3.5 text-xs text-white/50 text-left bg-black/10 rounded-xl p-4.5 border border-white/5">
                                            <p className="font-bold text-white/70">{t("sandbox.panel.call.instructions.title")}</p>
                                            <div className="space-y-2 font-medium leading-relaxed font-semibold">
                                                <p>{t("sandbox.panel.call.instructions.step1")}</p>
                                                <p>{t("sandbox.panel.call.instructions.step2")}</p>
                                                <p>{t("sandbox.panel.call.instructions.step3")}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ── MODE 3: GET CALLED PANEL ── */}
                                {activeTab === "getcalled" && (
                                    <motion.div
                                        key="getcalled-panel"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.25 }}
                                        className="h-full flex flex-col justify-between gap-6 w-full"
                                    >
                                        <div className="space-y-4">
                                            <span className="text-[10px] text-[#00ff66] uppercase tracking-wider font-bold bg-[#00ff66]/10 px-2.5 py-1 rounded">
                                                {t("sandbox.panel.getcalled.badge")}
                                            </span>
                                            <div className="space-y-1">
                                                <h4 className="text-2xl font-bold text-white font-intrinseca">{t("sandbox.panel.getcalled.title")}</h4>
                                                <p className="text-xs text-white/50">{t("sandbox.panel.getcalled.desc")}</p>
                                            </div>
                                            <AnimatePresence mode="wait">
                                                {outboundStatus === "idle" ? (
                                                    <motion.form 
                                                        key="outbound-form"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        onSubmit={handleOutboundSubmit} 
                                                        className="space-y-4 text-left"
                                                    >
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div className="space-y-1.5">
                                                                <label className="text-[10px] font-bold text-white/60 uppercase tracking-wide">{t("sandbox.panel.getcalled.form.name")}</label>
                                                                <input 
                                                                    type="text" 
                                                                    placeholder="John Doe" 
                                                                    required
                                                                    value={name}
                                                                    onChange={e => setName(e.target.value)}
                                                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff66]/40 transition-colors"
                                                                />
                                                            </div>
                                                            <div className="space-y-1.5">
                                                                <label className="text-[10px] font-bold text-white/60 uppercase tracking-wide">{t("sandbox.panel.getcalled.form.phone")}</label>
                                                                <input 
                                                                    type="tel" 
                                                                    placeholder="+1 (555) 019-9999" 
                                                                    required
                                                                    value={phone}
                                                                    onChange={e => setPhone(e.target.value)}
                                                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff66]/40 transition-colors"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-1.5">
                                                            <label className="text-[10px] font-bold text-white/60 uppercase tracking-wide">{t("sandbox.panel.getcalled.form.context")}</label>
                                                            <textarea 
                                                                placeholder={t("sandbox.panel.getcalled.form.placeholder")} 
                                                                rows={2}
                                                                value={scenario}
                                                                onChange={e => setScenario(e.target.value)}
                                                                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff66]/40 transition-colors resize-none"
                                                            />
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            disabled={isSubmitting}
                                                            className="w-full py-4 px-6 rounded-2xl bg-[#00ff66] hover:bg-[#00e056] text-black font-bold text-sm tracking-wide transition-all shadow-[0_4px_25px_rgba(0,255,102,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                                        >
                                                            {isSubmitting ? (
                                                                <>
                                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                                    {t("sandbox.panel.getcalled.form.submitting")}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <PhoneCall className="w-4 h-4" />
                                                                    {t("sandbox.panel.getcalled.form.btn")}
                                                                </>
                                                            )}
                                                        </button>
                                                    </motion.form>
                                                ) : (
                                                    /* Outbound call active screen visualizer */
                                                    <motion.div 
                                                        key="outbound-active"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        className="bg-black/40 border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden"
                                                    >
                                                        <div className="relative">
                                                            {/* Glowing pulse ripples */}
                                                            <span className="absolute inset-0 rounded-full bg-[#00ff66]/20 animate-ping scale-150" />
                                                            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] relative z-10">
                                                                <PhoneCall className="w-7 h-7 animate-bounce" />
                                                            </div>
                                                        </div>

                                                        <div className="space-y-1">
                                                            <h5 className="text-lg font-bold text-white">
                                                                {outboundStatus === "calling" ? t("sandbox.panel.getcalled.status.calling") : outboundStatus === "connected" ? t("sandbox.panel.getcalled.status.connected") : t("sandbox.panel.getcalled.status.completed")}
                                                            </h5>
                                                            <p className="text-xs text-white/50">
                                                                {outboundStatus === "calling" 
                                                                    ? `${t("sandbox.panel.getcalled.status.calling")} (${selectedAgent.name})` 
                                                                    : outboundStatus === "connected" 
                                                                    ? t("sandbox.panel.getcalled.status.duration").replace("{timer}", outboundTimer.toString().padStart(2, '0')) 
                                                                    : t("sandbox.panel.getcalled.status.desc")}
                                                            </p>
                                                        </div>

                                                        {outboundStatus === "calling" && (
                                                            <div className="text-xs text-yellow-400 font-mono flex items-center gap-1.5">
                                                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                                                <span>{t("sandbox.panel.getcalled.status.api")}</span>
                                                            </div>
                                                        )}

                                                        <button
                                                            type="button"
                                                            onClick={() => setOutboundStatus("idle")}
                                                            className="px-6 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white/80 font-bold text-xs cursor-pointer"
                                                        >
                                                            {t("sandbox.panel.getcalled.status.back")}
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )}
                             </AnimatePresence>
                         </div>
                     </div>
                 </div>
               </div>
             </div>
        </section>
    );
}
