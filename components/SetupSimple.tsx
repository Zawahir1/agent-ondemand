"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { UserPlus, Calendar, BookOpen, Settings, Sparkles, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

interface SetupSimpleProps {
    namespace?: "receptionist" | "outbound" | "automotive" | "gym";
}

export default function SetupSimple({ namespace = "receptionist" }: SetupSimpleProps) {
    const { t } = useLanguage();

    const steps = [
        {
            id: 1,
            icon: UserPlus,
            titleKey: `${namespace}.setup.step1.title` as TranslationKey,
            descKey: `${namespace}.setup.step1.desc` as TranslationKey
        },
        {
            id: 2,
            icon: Calendar,
            titleKey: `${namespace}.setup.step2.title` as TranslationKey,
            descKey: `${namespace}.setup.step2.desc` as TranslationKey
        },
        {
            id: 3,
            icon: BookOpen,
            titleKey: `${namespace}.setup.step3.title` as TranslationKey,
            descKey: `${namespace}.setup.step3.desc` as TranslationKey
        },
        {
            id: 4,
            icon: Settings,
            titleKey: `${namespace}.setup.step4.title` as TranslationKey,
            descKey: `${namespace}.setup.step4.desc` as TranslationKey
        }
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-10">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16 md:gap-20">
                
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight mb-6">
                        {t(`${namespace}.setup.title` as TranslationKey)}
                    </h2>
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        {t(`${namespace}.setup.subtitle` as TranslationKey)}
                    </p>
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto mt-6" />
                </div>

                {/* Steps 4-Card Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
                >
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                variants={cardVariants}
                                className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-8 relative overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#00ff66]/30 hover:shadow-[0_12px_40px_rgba(255,0,0,0.05)] group flex flex-col justify-between min-h-[300px] text-left"
                            >
                                {/* Micro Ambient Radial Glow */}
                                <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#00ff66]/8 to-transparent blur-2xl pointer-events-none transition-all duration-500 group-hover:from-[#00ff66]/15" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    {/* Icon Badge */}
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.15)] group-hover:border-[#00ff66]/40 group-hover:shadow-[0_0_25px_rgba(0,255,102,0.35)] transition-all duration-300">
                                        <Icon className="w-7 h-7 text-[#00ff66] filter drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl font-intrinseca text-[#fbf9f7] font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#00ff66]">
                                            {t(step.titleKey)}
                                        </h3>
                                        <p className="text-[#fbf9f7]/60 text-sm leading-relaxed font-medium">
                                            {t(step.descKey)}
                                        </p>
                                    </div>
                                </div>

                                {/* Step Number Indicator */}
                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#fbf9f7]/30 font-bold uppercase tracking-wider">
                                    <span>Step 0{step.id}</span>
                                    <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00ff66]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Final Activated Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full bg-[linear-gradient(135deg,#03180c_0%,#010703_100%)] rounded-[2.5rem] border border-[#00ff66]/15 p-8 md:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center gap-6 text-left relative overflow-hidden group hover:border-[#00ff66]/25 transition-all duration-500"
                >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#00ff66] shrink-0 shadow-[0_0_15px_rgba(0,255,102,0.15)] group-hover:bg-[#00ff66]/10 group-hover:border-[#00ff66] transition-colors">
                        <Play className="w-6 h-6 fill-[#00ff66]/20 text-[#00ff66]" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <span className="text-[10px] text-[#00ff66] font-extrabold uppercase tracking-wider">System Activation</span>
                        <p className="text-base md:text-lg text-[#fbf9f7]/85 font-medium leading-relaxed">
                            {t(`${namespace}.setup.footer` as TranslationKey)}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
