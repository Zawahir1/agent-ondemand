import React from "react";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function WhyChooseUs() {
    const { t } = useLanguage();

    const benefits = [
        {
            id: "lead",
            titleKey: "why.lead.title" as TranslationKey,
            descKey: "why.lead.desc" as TranslationKey
        },
        {
            id: "booking",
            titleKey: "why.booking.title" as TranslationKey,
            descKey: "why.booking.desc" as TranslationKey
        },
        {
            id: "admin",
            titleKey: "why.admin.title" as TranslationKey,
            descKey: "why.admin.desc" as TranslationKey
        },
        {
            id: "experience",
            titleKey: "why.experience.title" as TranslationKey,
            descKey: "why.experience.desc" as TranslationKey
        },
        {
            id: "scale",
            titleKey: "why.scale.title" as TranslationKey,
            descKey: "why.scale.desc" as TranslationKey
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
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-10">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-32 h-fit flex flex-col gap-6 lg:col-span-5 text-left">
                        {/* Pill Badge */}
                        <div className="w-fit bg-emerald-950/40 text-emerald-300 border border-emerald-800/30 px-3 py-1 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)] uppercase tracking-wider">
                            Benefits
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight">
                            {t("why.title")}
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full" />
                        <p className="text-[#fbf9f7]/55 text-base md:text-lg leading-relaxed font-medium mt-2">
                            Discover how automating your calls translates directly into increased calendar bookings, captured leads, and more time for your core business operations.
                        </p>
                    </div>

                    {/* Right Stacked List Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-6 lg:col-span-7 w-full text-left"
                    >
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={benefit.id}
                                variants={cardVariants}
                                className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-3xl p-6 md:p-8 flex items-start gap-5 relative overflow-hidden border border-[#00ff66]/10 hover:border-[#00ff66]/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_8px_35px_rgba(0,255,102,0.1)] group"
                            >
                                {/* Micro Ambient Radial Glow */}
                                <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-[#00ff66]/5 to-transparent blur-xl pointer-events-none transition-all duration-500 group-hover:from-[#00ff66]/12" />

                                {/* Check Icon Badge */}
                                <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-[#00ff66] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,255,102,0.1)] group-hover:border-[#00ff66]/40 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.3)] transition-all duration-300">
                                    <Check className="w-5 h-5 text-[#00ff66] filter drop-shadow-[0_0_3px_rgba(0,255,102,0.4)]" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-intrinseca text-[#fbf9f7] font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#00ff66]">
                                        {t(benefit.titleKey)}
                                    </h3>
                                    <p className="text-[#fbf9f7]/60 text-sm md:text-base leading-relaxed font-medium">
                                        {t(benefit.descKey)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
