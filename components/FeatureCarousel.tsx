"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Calendar, Search, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Animation presets
const textVariants = {
    enter: (direction: "left" | "right") => ({
        x: direction === "right" ? 100 : -100,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring" as const, stiffness: 350, damping: 30 },
            opacity: { duration: 0.25 }
        }
    },
    exit: (direction: "left" | "right") => ({
        x: direction === "right" ? -100 : 100,
        opacity: 0,
        transition: {
            x: { type: "spring" as const, stiffness: 350, damping: 30 },
            opacity: { duration: 0.25 }
        }
    })
};

const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
};

export default function FeatureCarousel() {
    const { t } = useLanguage();

    const slides = [
        {
            id: 0,
            number: 1,
            title: t("slides.findLeads.title"),
            description: t("slides.findLeads.desc"),
            mockup: (
                <div className="w-full max-w-lg bg-black/50 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-[#00ff66]/15 p-6 pb-20 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#00ff66]/15 pb-4 mb-4">
                        <span className="font-semibold text-[#fbf9f7] text-sm md:text-base">{t("slides.findLeads.mockup.intelligence")}</span>
                        <div className="flex items-center gap-1.5 bg-emerald-950/40 text-emerald-300 border border-emerald-800/30 px-2.5 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                            <Search className="w-3.5 h-3.5 text-emerald-450" />
                            <span>{t("slides.findLeads.mockup.leads")}</span>
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="flex items-center gap-4 mb-6 bg-emerald-950/20 rounded-xl p-4 border border-[#00ff66]/15">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#86efac] via-[#00ff66] to-[#022d1a] rounded-full border-2 border-[#00ff66]/40 shadow-[0_0_15px_rgba(0,255,102,0.35)] overflow-hidden flex items-center justify-center font-bold text-white text-lg">
                            AK
                        </div>
                        <div className="text-left">
                            <h4 className="text-base font-bold text-[#fbf9f7]">Avery Knox</h4>
                            <p className="text-xs text-emerald-300/80">{t("slides.findLeads.mockup.profileTitle")}</p>
                        </div>
                    </div>

                    {/* Enrichment Steps */}
                    <div className="space-y-2.5">
                        {[
                            { label: t("slides.findLeads.mockup.enrich1"), status: "done" },
                            { label: t("slides.findLeads.mockup.enrich2"), status: "signal" },
                            { label: t("slides.findLeads.mockup.enrich3"), status: "score" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-black/30 border border-[#00ff66]/15 rounded-lg text-xs md:text-sm text-left">
                                {item.status === "done" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 filter drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />}
                                {item.status === "signal" && <Play className="w-4 h-4 text-emerald-400 shrink-0 rotate-90 filter drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />}
                                {item.status === "score" && <span className="w-5 h-5 bg-gradient-to-br from-[#00ff66] to-emerald-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(0,255,102,0.35)]">98</span>}
                                <span className="text-[#fbf9f7]/85 font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 1,
            number: 2,
            title: t("slides.sequences.title"),
            description: t("slides.sequences.desc"),
            mockup: (
                <div className="w-full max-w-lg bg-black/50 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-[#00ff66]/15 p-6 pb-20 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#00ff66]/15 pb-4 mb-4">
                        <span className="font-semibold text-[#fbf9f7] text-sm md:text-base">{t("slides.sequences.mockup.title")}</span>
                        <div className="flex items-center gap-1.5 bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                            <Mail className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t("slides.sequences.mockup.status")}</span>
                        </div>
                    </div>

                    {/* Steps List */}
                    <div className="space-y-3">
                        {[
                            { step: "Step 1", type: t("slides.sequences.mockup.step1.type"), desc: t("slides.sequences.mockup.step1.desc"), active: false, done: true },
                            { step: "Step 2", type: t("slides.sequences.mockup.step2.type"), desc: t("slides.sequences.mockup.step2.desc"), active: false, done: true },
                            { step: "Step 3", type: t("slides.sequences.mockup.step3.type"), desc: t("slides.sequences.mockup.step3.desc"), active: true, done: false },
                            { step: "Step 4", type: t("slides.sequences.mockup.step4.type"), desc: t("slides.sequences.mockup.step4.desc"), active: false, done: false }
                        ].map((item, i) => (
                            <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border transition-all text-left ${item.active ? 'bg-gradient-to-r from-emerald-950/40 to-emerald-950/20 border-[#00ff66]/20 shadow-[0_0_12px_rgba(0,255,102,0.15)]' : 'border-[#00ff66]/10 bg-black/40 hover:bg-black/60 hover:border-[#00ff66]/35'}`}>
                                <div className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${item.done ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 shadow-[0_0_8px_rgba(52,211,153,0.3)]' : item.active ? 'bg-gradient-to-r from-[#00ff66] to-emerald-600 text-white shadow-[0_0_8px_rgba(0,255,102,0.35)]' : 'bg-white/10 text-[#fbf9f7]/40'}`}>
                                    {item.done ? "✓" : i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h5 className="font-bold text-xs md:text-sm text-[#fbf9f7]">{item.type}</h5>
                                        <span className="text-[10px] text-emerald-300/70 font-semibold">{item.step}</span>
                                    </div>
                                    <p className="text-[11px] text-[#fbf9f7]/60 mt-0.5 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 2,
            number: 3,
            title: t("slides.testing.title"),
            description: t("slides.testing.desc"),
            mockup: (
                <div className="w-full max-w-lg bg-black/50 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-[#00ff66]/15 p-6 pb-20 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#00ff66]/15 pb-4 mb-4">
                        <span className="font-semibold text-[#fbf9f7] text-sm md:text-base">{t("slides.testing.mockup.title")}</span>
                        <div className="flex items-center gap-1.5 bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>{t("slides.testing.mockup.status")}</span>
                        </div>
                    </div>

                    {/* Variant B — Best */}
                    <div className="mb-4 bg-emerald-950/40 border border-emerald-500/45 rounded-xl p-3.5 shadow-[0_0_20px_rgba(16,185,129,0.15)] text-left">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-300 text-xs font-bold flex items-center justify-center border border-emerald-555/30">B</span>
                                <span className="text-[#fbf9f7] font-bold text-xs md:text-sm">&ldquo;{t("slides.testing.mockup.variantB")}&rdquo;</span>
                            </div>
                            <span className="bg-emerald-900/60 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-555/30 flex items-center gap-0.5 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                                ↑ {t("slides.testing.mockup.best")}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            {[[t("slides.testing.mockup.open"), "64%"], [t("slides.testing.mockup.reply"), "19%"], [t("slides.testing.mockup.booked"), "11%"]].map(([label, val]) => (
                                <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-2">
                                    <div className="text-[10px] text-emerald-350/70 font-semibold">{label}</div>
                                    <div className="text-xs md:text-sm font-black text-emerald-400 filter drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]">{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Variant A */}
                    <div className="mb-4 bg-black/30 border border-[#00ff66]/15 rounded-xl p-3.5 text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-600/35 text-xs font-bold flex items-center justify-center">A</span>
                            <span className="text-[#fbf9f7]/75 font-semibold text-xs md:text-sm">&ldquo;{t("slides.testing.mockup.variantA")}&rdquo;</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            {[[t("slides.testing.mockup.open"), "41%"], [t("slides.testing.mockup.reply"), "8%"], [t("slides.testing.mockup.booked"), "4%"]].map(([label, val]) => (
                                <div key={label} className="bg-white/4 rounded-lg p-2">
                                    <div className="text-[10px] text-emerald-300/60">{label}</div>
                                    <div className="text-xs md:text-sm font-bold text-[#fbf9f7]/85">{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Variant C */}
                    <div className="bg-black/30 border border-[#00ff66]/15 rounded-xl p-3.5 text-left">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded bg-orange-950/30 text-orange-300 border border-orange-900/25 text-xs font-bold flex items-center justify-center">C</span>
                            <span className="text-[#fbf9f7]/75 font-semibold text-xs md:text-sm">&ldquo;{t("slides.testing.mockup.variantC")}&rdquo;</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            {[[t("slides.testing.mockup.open"), "38%"], [t("slides.testing.mockup.reply"), "7%"], [t("slides.testing.mockup.booked"), "3%"]].map(([label, val]) => (
                                <div key={label} className="bg-white/4 rounded-lg p-2">
                                    <div className="text-[10px] text-orange-300/60">{label}</div>
                                    <div className="text-xs md:text-sm font-bold text-[#fbf9f7]/85">{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            overlay: (
                <div className="absolute bottom-6 right-6 left-6 md:left-auto md:right-8 md:w-[360px] bg-black/90 backdrop-blur-md rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.6)] border border-[#00ff66]/20 p-5 z-20 text-left">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-xs md:text-sm text-[#fbf9f7]">{t("slides.testing.mockup.overlay.title")}</span>
                        <span className="flex items-center gap-1 bg-[#00ff66]/15 text-emerald-300 border border-[#00ff66]/20 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-[0_0_8px_rgba(0,255,102,0.15)]">
                            <Play className="w-2.5 h-2.5 fill-emerald-300 text-emerald-300" /> {t("slides.testing.mockup.overlay.status")}
                        </span>
                    </div>
                    <div className="space-y-3">
                        {[
                            { label: "B", pct: "55%", w: "55%", color: "bg-gradient-to-r from-emerald-400 to-teal-500", text: "text-emerald-400" },
                            { label: "A", pct: "25%", w: "25%", color: "bg-gradient-to-r from-emerald-600 to-emerald-800", text: "text-emerald-500" },
                            { label: "C", pct: "20%", w: "20%", color: "bg-gradient-to-r from-teal-700 to-teal-900", text: "text-teal-500" },
                        ].map(({ label, pct, w, color, text }) => (
                            <div key={label}>
                                <div className="flex items-center justify-between text-xs font-bold mb-1">
                                    <span className={text}>{label}</span>
                                    <span className="text-[#fbf9f7]/70 font-semibold">{pct}</span>
                                </div>
                                <div className="w-full h-2 bg-emerald-950/40 rounded-full overflow-hidden border border-emerald-900/10">
                                    <div className={`h-full ${color} rounded-full`} style={{ width: w }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 3,
            number: 4,
            title: t("slides.replies.title"),
            description: t("slides.replies.desc"),
            mockup: (
                <div className="w-full max-w-lg bg-black/50 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-[#00ff66]/15 p-6 pb-20 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#00ff66]/15 pb-4 mb-4">
                        <span className="font-semibold text-[#fbf9f7] text-sm md:text-base">{t("slides.replies.mockup.title")}</span>
                        <div className="flex items-center gap-1.5 bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>{t("slides.replies.mockup.status")}</span>
                        </div>
                    </div>

                    {/* Conversation View */}
                    <div className="space-y-4 text-left">
                        <div className="bg-black/30 border border-[#00ff66]/10 rounded-xl p-3.5 text-xs md:text-sm">
                            <div className="font-bold text-[#00ff66] mb-1 text-[11px] uppercase tracking-wider">{t("slides.replies.mockup.prospect")}:</div>
                            <p className="text-[#fbf9f7]/80">&ldquo;{t("slides.replies.mockup.reply1")}&rdquo;</p>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-950/40 to-emerald-950/20 border border-[#00ff66]/20 rounded-xl p-3.5 text-xs md:text-sm shadow-[0_0_12px_rgba(0,255,102,0.15)]">
                            <div className="font-bold text-emerald-300 mb-1 text-[11px] uppercase tracking-wider">{t("slides.replies.mockup.ava")}:</div>
                            <p className="text-[#fbf9f7]/90 font-medium">&ldquo;{t("slides.replies.mockup.reply2")}&rdquo;</p>
                        </div>

                        <div className="bg-black/30 border border-[#00ff66]/10 rounded-xl p-3.5 text-xs md:text-sm">
                            <div className="font-bold text-[#00ff66] mb-1 text-[11px] uppercase tracking-wider">{t("slides.replies.mockup.prospect")}:</div>
                            <p className="text-[#fbf9f7]/80">&ldquo;{t("slides.replies.mockup.reply3")}&rdquo;</p>
                        </div>
                    </div>
                </div>
            ),
            overlay: (
                <div className="absolute bottom-6 right-6 left-6 md:left-auto md:right-8 md:w-[320px] bg-black/90 backdrop-blur-md rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.6)] border border-[#00ff66]/20 p-4 z-20 flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-emerald-300 p-1.5 bg-emerald-950/50 rounded-lg border border-[#00ff66]/25 shrink-0 shadow-[0_0_10px_rgba(0,255,102,0.15)]" />
                    <div className="min-w-0 flex-1 text-left">
                        <h4 className="text-xs font-bold text-[#fbf9f7]">{t("slides.replies.mockup.meetingBooked")}</h4>
                        <p className="text-[10px] text-emerald-350/70 truncate font-semibold">{t("slides.replies.mockup.demo")}</p>
                    </div>
                    <span className="bg-emerald-900/60 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded border border-emerald-600/35 shadow-[0_0_8px_rgba(16,185,129,0.3)]">{t("slides.replies.mockup.confirmed")}</span>
                </div>
            )
        }
    ];

    const [activeIndex, setActiveIndex] = useState(2);
    const [direction, setDirection] = useState<"left" | "right">("right");

    useEffect(() => {
        const timer = setInterval(() => { handleNext(); }, 6000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const handleNext = () => {
        setDirection("right");
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setDirection("left");
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlide = slides[activeIndex];

    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* ── Left Card — Text & Pagination ── */}
                    <div className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-12 md:p-16 flex flex-col justify-between border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] min-h-[550px] relative overflow-hidden transition-all duration-500 hover:border-[#00ff66]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] group">

                        {/* Subtle ambient glow top-left */}
                        <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-gradient-to-br from-[#00ff66]/8 via-transparent to-transparent blur-[90px] pointer-events-none transition-all duration-500 group-hover:from-[#00ff66]/12" />

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex-1 flex flex-col justify-between h-full"
                            >
                                <div>
                                    {/* Number Badge */}
                                    <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center mb-8 shadow-[0_0_12px_rgba(0,255,102,0.15)]">
                                        <span className="text-[#00ff66] font-semibold font-intrinseca">{currentSlide.number}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="max-w-lg mb-12">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight leading-[1.15] mb-6">
                                            {currentSlide.title}
                                        </h3>
                                        <p className="text-[#fbf9f7]/65 text-base md:text-lg leading-relaxed font-medium">
                                            {currentSlide.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination */}
                        <div className="flex items-center gap-4 mt-auto z-10">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full border border-[#00ff66]/10 bg-white/5 hover:bg-emerald-950/20 hover:border-[#00ff66]/35 transition-all flex items-center justify-center text-[#fbf9f7]/60 hover:text-[#fbf9f7] shadow-sm cursor-pointer"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>

                            <div className="bg-emerald-950/30 border border-[#00ff66]/10 rounded-full px-6 py-3 flex items-center gap-2">
                                {slides.map((slide, idx) => {
                                    const isActive = idx === activeIndex;
                                    return (
                                        <span
                                            key={slide.id}
                                            onClick={() => {
                                                setDirection(idx > activeIndex ? "right" : "left");
                                                setActiveIndex(idx);
                                            }}
                                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                isActive ? "w-8 bg-gradient-to-r from-[#00ff66] to-emerald-500 shadow-[0_0_8px_rgba(0,255,102,0.35)]" : "w-2 bg-white/20 hover:bg-white/40"
                                            }`}
                                        ></span>
                                    );
                                })}
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full border border-[#00ff66]/10 bg-white/5 hover:bg-emerald-950/20 hover:border-[#00ff66]/35 transition-all flex items-center justify-center text-[#fbf9f7]/60 hover:text-[#fbf9f7] shadow-sm cursor-pointer"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* ── Right Card — Dashboard Mockup ── */}
                    <div className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-8 md:p-12 flex items-center justify-center min-h-[550px] relative overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#00ff66]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] group/right">

                        {/* Ambient glow bottom-right */}
                        <div className="absolute -bottom-20 -right-20 w-[380px] h-[380px] bg-gradient-to-tl from-[#00ff66]/8 via-transparent to-transparent blur-[100px] pointer-events-none transition-all duration-500 group-hover/right:from-[#00ff66]/12" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full flex items-center justify-center"
                            >
                                {currentSlide.mockup}
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating Overlay */}
                        <AnimatePresence mode="wait">
                            {currentSlide.overlay && (
                                <motion.div
                                    key={activeIndex}
                                    variants={imageVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="absolute bottom-6 right-6 left-6 md:left-auto md:right-8 md:w-[360px] z-20"
                                >
                                    {currentSlide.overlay}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
