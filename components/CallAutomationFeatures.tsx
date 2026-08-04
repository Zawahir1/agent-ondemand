import React from "react";
import { PhoneCall, Calendar, Target, Volume2, Users, BarChart3 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function CallAutomationFeatures() {
    const { t } = useLanguage();

    const features = [
        {
            id: "handling",
            icon: PhoneCall,
            titleKey: "toolbox.call.title" as TranslationKey,
            descKey: "toolbox.call.desc" as TranslationKey
        },
        {
            id: "scheduling",
            icon: Calendar,
            titleKey: "toolbox.scheduling.title" as TranslationKey,
            descKey: "toolbox.scheduling.desc" as TranslationKey
        },
        {
            id: "qualification",
            icon: Target,
            titleKey: "toolbox.qualification.title" as TranslationKey,
            descKey: "toolbox.qualification.desc" as TranslationKey
        },
        {
            id: "recording",
            icon: Volume2,
            titleKey: "toolbox.recording.title" as TranslationKey,
            descKey: "toolbox.recording.desc" as TranslationKey
        },
        {
            id: "crm",
            icon: Users,
            titleKey: "toolbox.crm.title" as TranslationKey,
            descKey: "toolbox.crm.desc" as TranslationKey
        },
        {
            id: "analytics",
            icon: BarChart3,
            titleKey: "toolbox.analytics.title" as TranslationKey,
            descKey: "toolbox.analytics.desc" as TranslationKey
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
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16 md:gap-20">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight mb-6">
                        {t("toolbox.title")}
                    </h2>
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto" />
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                variants={cardVariants}
                                className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2rem] p-8 md:p-10 relative overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#00ff66]/30 hover:shadow-[0_12px_40px_rgba(0,255,102,0.18)] group flex flex-col justify-start min-h-[300px]"
                            >
                                {/* Micro Ambient Radial Glow */}
                                <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#00ff66]/8 to-transparent blur-2xl pointer-events-none transition-all duration-500 group-hover:from-[#00ff66]/15" />

                                {/* Icon Badge */}
                                <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,255,102,0.15)] group-hover:border-[#00ff66]/40 group-hover:shadow-[0_0_25px_rgba(0,255,102,0.35)] transition-all duration-300">
                                    <Icon className="w-7 h-7 text-[#00ff66] filter drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-2xl font-intrinseca text-[#fbf9f7] font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#00ff66]">
                                        {t(feature.titleKey)}
                                    </h3>
                                    <p className="text-[#fbf9f7]/60 text-base leading-relaxed font-medium">
                                        {t(feature.descKey)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
