"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, CalendarDays, FileText, CheckSquare, Sparkles, ChevronRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function ReceptionistMockup() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance tabs if not hovered
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % 4);
        }, 3500);
        return () => clearInterval(interval);
    }, [isHovered]);

    const tabs = [
        { id: 0, icon: Home, label: t("receptionist.mockup.tab1") },
        { id: 1, icon: CalendarDays, label: t("receptionist.mockup.tab2") },
        { id: 2, icon: FileText, label: t("receptionist.mockup.tab3") },
        { id: 3, icon: CheckSquare, label: t("receptionist.mockup.tab4") },
    ];

    return (
        <div 
            className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left side: Interactive Navigation Pills */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-3">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                                isActive 
                                    ? "bg-emerald-950/45 border-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.15)]" 
                                    : "bg-black/30 border-white/5 text-[#fbf9f7]/50 hover:text-white hover:bg-black/50"
                            }`}
                        >
                            <div className={`p-2.5 rounded-xl transition-colors ${
                                isActive ? "bg-emerald-500/25 text-emerald-400" : "bg-white/5 text-[#fbf9f7]/30"
                            }`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <span className="text-sm font-bold block">{tab.label}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                                isActive ? "translate-x-1 text-emerald-400" : "text-white/10"
                            }`} />
                        </button>
                    );
                })}
            </div>

            {/* Right side: Mockup Screen */}
            <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="w-full bg-[#020904]/90 backdrop-blur-md rounded-[2.5rem] border border-emerald-500/15 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-emerald-900/25 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="text-[10px] text-[#fbf9f7]/30 font-bold uppercase tracking-wider ml-2">
                                {t("receptionist.mockup.title")}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] text-emerald-400 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t("mockup.hubspotSynced" as TranslationKey)}
                        </div>
                    </div>

                    {/* Display Screens based on active state */}
                    <div className="min-h-[220px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            
                            {/* Screen 0: Buyer Preferences */}
                            {activeTab === 0 && (
                                <motion.div
                                    key="pref"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
                                >
                                    <div className="bg-white/4 border border-white/5 rounded-2xl p-4">
                                        <span className="text-[10px] text-[#fbf9f7]/40 uppercase tracking-widest font-bold block mb-1">{t("receptionist.mockup.targetProperty")}</span>
                                        <p className="text-sm font-bold text-white">{t("receptionist.mockup.address")}</p>
                                        <p className="text-xs text-[#fbf9f7]/60 mt-1">{t("receptionist.mockup.ref")}</p>
                                    </div>
                                    <div className="bg-white/4 border border-white/5 rounded-2xl p-4">
                                        <span className="text-[10px] text-[#fbf9f7]/40 uppercase tracking-widest font-bold block mb-1">{t("receptionist.mockup.qualifiedBudget")}</span>
                                        <p className="text-sm font-bold text-emerald-450">€450,000 - €500,000</p>
                                        <p className="text-xs text-emerald-400/80 mt-1 font-semibold">{t("receptionist.mockup.mortgage")}</p>
                                    </div>
                                    <div className="bg-white/4 border border-white/5 rounded-2xl p-4 sm:col-span-2">
                                        <span className="text-[10px] text-[#fbf9f7]/40 uppercase tracking-widest font-bold block mb-2">{t("receptionist.mockup.desiredCriteria")}</span>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                t("receptionist.mockup.tag1"),
                                                t("receptionist.mockup.tag2"),
                                                t("receptionist.mockup.tag3"),
                                                t("receptionist.mockup.tag4")
                                            ].map((tag, i) => (
                                                <span key={i} className="text-[11px] bg-emerald-950/50 border border-emerald-900/40 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Screen 1: Scheduled Viewing */}
                            {activeTab === 1 && (
                                <motion.div
                                    key="schedule"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full text-left bg-gradient-to-r from-emerald-950/20 to-transparent border border-emerald-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{t("receptionist.mockup.month")}</span>
                                        <span className="text-2xl font-bold leading-none mt-1">20</span>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider inline-block">
                                            {t("receptionist.mockup.confirmedTour")}
                                        </span>
                                        <h4 className="text-base font-bold text-white">{t("receptionist.mockup.tourType")}</h4>
                                        <p className="text-xs text-[#fbf9f7]/60">{t("mockup.addressLabel" as TranslationKey)} {t("receptionist.mockup.address")}</p>
                                        <p className="text-xs text-emerald-350 font-semibold">{t("receptionist.mockup.viewingTime")}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-emerald-900/30 border border-emerald-600/35 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-300">
                                        <Check className="w-4 h-4" /> {t("receptionist.mockup.calendarSynced")}
                                    </div>
                                </motion.div>
                            )}

                            {/* Screen 2: AI Call Summary */}
                            {activeTab === 2 && (
                                <motion.div
                                    key="summary"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full text-left space-y-4"
                                >
                                    <div className="bg-white/4 border border-white/5 rounded-2xl p-5 relative overflow-hidden">
                                        <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] text-yellow-400 font-bold bg-yellow-500/10 px-2.5 py-0.5 rounded-full border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.15)]">
                                            <Sparkles className="w-3.5 h-3.5 fill-current" /> {t("mockup.aiKeyInsights" as TranslationKey)}
                                        </div>
                                        <h4 className="text-sm font-bold text-white mb-2">{t("receptionist.mockup.caller")}</h4>
                                        <p className="text-xs text-[#fbf9f7]/70 leading-relaxed font-semibold">
                                            &ldquo;{t("receptionist.mockup.summaryText")}&rdquo;
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Screen 3: Follow-Up Tasks */}
                            {activeTab === 3 && (
                                <motion.div
                                    key="tasks"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full text-left space-y-3"
                                >
                                    {[
                                        { label: t("receptionist.mockup.task1"), status: t("receptionist.mockup.taskStatus1") },
                                        { label: t("receptionist.mockup.task2"), status: t("receptionist.mockup.taskStatus2") },
                                        { label: t("receptionist.mockup.task3"), status: t("receptionist.mockup.taskStatus3") },
                                    ].map((task, i) => (
                                        <div key={i} className="flex items-center justify-between p-3.5 bg-white/4 border border-white/5 rounded-xl text-xs md:text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-450 rounded-full flex items-center justify-center shrink-0">
                                                    ✓
                                                </div>
                                                <span className="text-[#fbf9f7]/85 font-medium">{task.label}</span>
                                            </div>
                                            <span className="bg-emerald-950/50 border border-emerald-900/40 text-emerald-350 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
                                                {task.status}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}
