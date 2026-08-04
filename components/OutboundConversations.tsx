"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Clock, ArrowRight, Volume2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function OutboundConversations() {
    const { t } = useLanguage();
    const [activeScenario, setActiveScenario] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);

    const scenarios = [
        {
            id: 0,
            titleKey: "outbound.conversations.scenario1.title" as TranslationKey,
            icon: Calendar,
            customerTextKey: "outbound.conversations.scenario1.customer" as TranslationKey,
            aiActionKey: "outbound.conversations.scenario1.action" as TranslationKey,
            aiResponseKey: "outbound.conversations.scenario1.response" as TranslationKey,
            systemLabelKey: "mockup.system.calendarRules" as TranslationKey
        },
        {
            id: 1,
            titleKey: "outbound.conversations.scenario2.title" as TranslationKey,
            icon: Clock,
            customerTextKey: "outbound.conversations.scenario2.customer" as TranslationKey,
            aiActionKey: "outbound.conversations.scenario2.action" as TranslationKey,
            aiResponseKey: "outbound.conversations.scenario2.response" as TranslationKey,
            systemLabelKey: "mockup.system.businessHours" as TranslationKey
        },
        {
            id: 2,
            titleKey: "outbound.conversations.scenario3.title" as TranslationKey,
            icon: Phone,
            customerTextKey: "outbound.conversations.scenario3.customer" as TranslationKey,
            aiActionKey: "outbound.conversations.scenario3.action" as TranslationKey,
            aiResponseKey: "outbound.conversations.scenario3.response" as TranslationKey,
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
                        {t("outbound.conversations.title")}
                    </h2>
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-medium max-w-2xl mx-auto">
                        {t("outbound.conversations.subtitle")}
                    </p>
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Panel: Scenario Selectors & Copy */}
                    <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-center">
                        <p className="text-base md:text-lg text-[#fbf9f7]/65 leading-relaxed font-medium">
                            {t("outbound.conversations.desc")}
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
                            <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-5 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                                    <span className="text-xs font-bold text-[#fbf9f7]/40 uppercase tracking-widest">{t("mockup.liveCallSimulator" as TranslationKey)}</span>
                                </div>
                                <div className="text-[11px] font-mono text-[#fbf9f7]/55 bg-emerald-950/40 border border-emerald-900/40 px-3 py-1 rounded-full flex items-center gap-2">
                                    <Volume2 className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.active" as TranslationKey)}
                                </div>
                            </div>

                            {/* Simulated Conversation Thread */}
                            <div className="space-y-6 min-h-[300px] flex flex-col justify-end text-left relative z-10">
                                
                                {/* Customer Bubble */}
                                <motion.div 
                                    key={`cust-${animateKey}`}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="space-y-1.5 max-w-[85%] self-start"
                                >
                                    <span className="text-[10px] text-[#fbf9f7]/40 font-bold uppercase tracking-widest ml-3">{t("mockup.customer" as TranslationKey)}</span>
                                    <div className="bg-white/5 border border-white/5 rounded-[2rem] rounded-tl-none px-5 py-3.5 text-sm text-[#fbf9f7]/85 leading-relaxed font-semibold">
                                        &ldquo;{t(scenarios[activeScenario].customerTextKey)}&rdquo;
                                    </div>
                                </motion.div>

                                {/* System Logic Overlay */}
                                <motion.div
                                    key={`sys-${animateKey}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="bg-emerald-950/20 border border-emerald-500/10 rounded-2xl p-4 flex items-center gap-3.5 text-xs text-emerald-350 font-bold self-center my-2 max-w-[95%] shadow-[0_0_15px_rgba(0,255,102,0.03)]"
                                >
                                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-[#00ff66]/20 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-3.5 h-3.5 text-[#00ff66]" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[9px] text-[#fbf9f7]/30 uppercase block tracking-wider mb-0.5">{t(scenarios[activeScenario].systemLabelKey)}</span>
                                        <span className="text-emerald-300 font-semibold">{t(scenarios[activeScenario].aiActionKey)}</span>
                                    </div>
                                </motion.div>

                                {/* AI Agent Bubble */}
                                <motion.div
                                    key={`ai-${animateKey}`}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    className="space-y-1.5 max-w-[85%] self-end flex flex-col items-end"
                                >
                                    <span className="text-[10px] text-[#00ff66]/60 font-bold uppercase tracking-widest mr-3">{t("mockup.agentTitle" as TranslationKey)}</span>
                                    <div className="bg-gradient-to-br from-[#031c0c] to-[#010904] border border-[#00ff66]/15 rounded-[2rem] rounded-tr-none px-5 py-3.5 text-sm text-white leading-relaxed font-semibold shadow-[0_10px_25px_rgba(0,255,102,0.05)]">
                                        &ldquo;{t(scenarios[activeScenario].aiResponseKey)}&rdquo;
                                    </div>
                                </motion.div>

                            </div>

                            {/* Decorative Phone UI Elements */}
                            <div className="flex justify-between items-center mt-8 pt-5 border-t border-[#00ff66]/5 text-[10px] text-[#fbf9f7]/30 font-bold uppercase tracking-wider">
                                <span>{t("mockup.noLatency" as TranslationKey)}</span>
                                <span className="flex items-center gap-1"><span className="text-[#00ff66]">✓</span> {t("mockup.crmUpdated" as TranslationKey)}</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
