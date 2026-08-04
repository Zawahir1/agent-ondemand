"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Clock, ArrowRight, Volume2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function GymConversations() {
    const { t } = useLanguage();
    const [activeScenario, setActiveScenario] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);

    const scenarios = [
        {
            id: 0,
            title: "Booking an Appointment",
            titleKey: "gym.conversations.scenario1.title" as TranslationKey,
            icon: Calendar,
            customerTextKey: "gym.conversations.scenario1.customer" as TranslationKey,
            aiActionKey: "gym.conversations.scenario1.action" as TranslationKey,
            aiResponseKey: "gym.conversations.scenario1.response" as TranslationKey,
            systemLabelKey: "mockup.system.calendarRules" as TranslationKey
        },
        {
            id: 1,
            title: "Weekend Inquiries",
            titleKey: "gym.conversations.scenario2.title" as TranslationKey,
            icon: Clock,
            customerTextKey: "gym.conversations.scenario2.customer" as TranslationKey,
            aiActionKey: "gym.conversations.scenario2.action" as TranslationKey,
            aiResponseKey: "gym.conversations.scenario2.response" as TranslationKey,
            systemLabelKey: "mockup.system.businessHours" as TranslationKey
        },
        {
            id: 2,
            title: "Handover & Follow-ups",
            titleKey: "gym.conversations.scenario3.title" as TranslationKey,
            icon: Phone,
            customerTextKey: "gym.conversations.scenario3.customer" as TranslationKey,
            aiActionKey: "gym.conversations.scenario3.action" as TranslationKey,
            aiResponseKey: "gym.conversations.scenario3.response" as TranslationKey,
            systemLabelKey: "mockup.system.smartEscalation" as TranslationKey
        }
    ];

    useEffect(() => {
        setAnimateKey(prev => prev + 1);
    }, [activeScenario]);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-10">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full">
                
                {/* Section Title */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight mb-6">
                        {t("gym.conversations.title")}
                    </h2>
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-medium max-w-2xl mx-auto">
                        {t("gym.conversations.subtitle")}
                    </p>
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Panel: Scenario Selectors & Copy */}
                    <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-center">
                        <p className="text-base md:text-lg text-[#fbf9f7]/65 leading-relaxed font-medium">
                            {t("gym.conversations.desc")}
                        </p>

                        <div className="space-y-4">
                            {scenarios.map((scenario) => {
                                const Icon = scenario.icon;
                                const isActive = activeScenario === scenario.id;

                                return (
                                    <button
                                        key={scenario.id}
                                        onClick={() => setActiveScenario(scenario.id)}
                                        className={`w-full p-5 rounded-3xl border text-left transition-all duration-300 flex items-center gap-5 cursor-pointer select-none ${
                                            isActive
                                                ? "bg-emerald-950/45 border-[#00ff66]/30 text-white shadow-[0_0_20px_rgba(52,211,153,0.12)]"
                                                : "bg-black/20 border-white/5 text-[#fbf9f7]/50 hover:text-white hover:bg-black/40"
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                                            isActive
                                                ? "bg-emerald-500/20 text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.25)]"
                                                : "bg-white/5 text-white/30"
                                        }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-base font-bold block">
                                                {t(scenario.titleKey)}
                                            </span>
                                        </div>
                                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                                            isActive ? "translate-x-1 text-[#00ff66]" : "text-white/10"
                                        }`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Panel: Simulated Phone Mockup */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="w-full bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] border border-[#00ff66]/10 p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-500 hover:border-[#00ff66]/25 group">
                            
                            {/* Device Top Speaker & Camera details */}
                            <div className="flex items-center justify-between pb-4 border-b border-[#00ff66]/10 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[10px] text-[#fbf9f7]/40 block uppercase tracking-wider font-semibold">{t("mockup.activeCall" as TranslationKey)}</span>
                                        <span className="text-xs font-bold text-[#fbf9f7]">{t("mockup.aiReceptionistAgent" as TranslationKey)}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-[#00ff66]/10 border border-[#00ff66]/20 px-3 py-1 rounded-full text-[10px] text-[#00ff66] font-bold">
                                    <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                                    {t("mockup.liveAudioStream" as TranslationKey)}
                                </div>
                            </div>

                            {/* Dialogue Timeline */}
                            <div className="space-y-6 min-h-[300px] flex flex-col justify-end text-left relative" key={animateKey}>
                                
                                {/* 1. Customer Speech Bubble */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="self-end max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tr-none p-4 shadow-md text-right font-medium"
                                >
                                    <span className="text-[10px] text-[#fbf9f7]/30 block mb-1 font-bold">{t("mockup.caller" as TranslationKey)}</span>
                                    <p className="text-sm font-semibold text-white/90">
                                        &ldquo;{t(scenarios[activeScenario].customerTextKey)}&rdquo;
                                    </p>
                                </motion.div>

                                {/* 2. AI Action Box (Intermediate thinking step) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1.2 }}
                                    className="mx-auto bg-emerald-950/40 border border-[#00ff66]/20 px-4 py-2.5 rounded-xl flex items-center gap-3 text-emerald-400 max-w-[90%] shadow-[0_0_15px_rgba(0,255,102,0.1)]"
                                >
                                    <Sparkles className="w-4 h-4 shrink-0 animate-spin text-[#00ff66]" style={{ animationDuration: "3s" }} />
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00ff66]/70 shrink-0">
                                        {t(scenarios[activeScenario].systemLabelKey)}
                                    </span>
                                    <span className="h-4 w-px bg-[#00ff66]/20" />
                                    <p className="text-[11px] font-bold text-[#fbf9f7]/95">
                                        {t(scenarios[activeScenario].aiActionKey)}
                                    </p>
                                </motion.div>

                                {/* 3. AI Voice Agent Speech Bubble */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 2.2 }}
                                    className="self-start max-w-[85%] bg-[#031d0d]/80 border border-[#00ff66]/20 rounded-2xl rounded-tl-none p-4 shadow-lg"
                                >
                                    <span className="text-[10px] text-[#00ff66]/80 block mb-1 font-bold flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-ping" /> {t("mockup.agentName" as TranslationKey)}
                                    </span>
                                    <p className="text-sm font-semibold text-white">
                                        {t(scenarios[activeScenario].aiResponseKey)}
                                    </p>
                                </motion.div>

                            </div>

                            {/* Decorative Phone Home Bar */}
                            <div className="w-24 h-1 bg-white/10 rounded-full mx-auto mt-8 group-hover:bg-[#00ff66]/20 transition-all duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
