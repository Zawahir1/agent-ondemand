import React from "react";
import { Building2, Stethoscope, Car, Dumbbell, Scale } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function AgentsAvailable() {
    const { t } = useLanguage();

    const staticSections = [
        {
            id: "realestate",
            titleKey: "agents.realestate.title" as TranslationKey,
            descKey: "agents.realestate.desc" as TranslationKey,
            image: "/images/real_estate_agent.png",
            icon: Building2
        },
        {
            id: "healthcare",
            titleKey: "agents.healthcare.title" as TranslationKey,
            descKey: "agents.healthcare.desc" as TranslationKey,
            image: "/images/healthcare_agent.png",
            icon: Stethoscope
        },
        {
            id: "automotive",
            titleKey: "agents.automotive.title" as TranslationKey,
            descKey: "agents.automotive.desc" as TranslationKey,
            image: "/images/automotive_agent.png",
            icon: Car
        },
        {
            id: "fitness",
            titleKey: "agents.fitness.title" as TranslationKey,
            descKey: "agents.fitness.desc" as TranslationKey,
            image: "/images/fitness_agent.png",
            icon: Dumbbell
        },
        {
            id: "legal",
            titleKey: "agents.legal.title" as TranslationKey,
            descKey: "agents.legal.desc" as TranslationKey,
            image: "/images/legal_agent.png",
            icon: Scale
        }
    ];

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-transparent flex flex-col gap-20 relative z-10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-20">
                {/* Heading Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight mb-6">
                        {t("agents.title")}
                    </h2>
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto" />
                </div>

                {/* Alternating Sections List */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {staticSections.map((section, index) => {
                        const isImageLeft = index % 2 !== 0;
                        const Icon = section.icon;

                        return (
                            <div key={section.id} className="w-full">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">

                                    {/* Image Card Box */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={cardVariants}
                                        className={`bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] flex items-center justify-center min-h-[420px] md:min-h-[500px] relative overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#00ff66]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] group/image ${
                                            isImageLeft ? "lg:order-1" : "lg:order-2"
                                        }`}
                                    >
                                        <img
                                            src={section.image}
                                            alt={t(section.titleKey)}
                                            className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] transition-all duration-700 group-hover/image:scale-[1.05]"
                                        />

                                        {/* Subtle Vignette Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                                        {/* Ambient Glow Border Overlay */}
                                        <div className="absolute inset-0 border border-[#00ff66]/10 rounded-[2.5rem] pointer-events-none group-hover/image:border-[#00ff66]/25 transition-all duration-500" />
                                    </motion.div>

                                    {/* Text Card Box */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        variants={cardVariants}
                                        className={`bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] min-h-[420px] md:min-h-[500px] relative overflow-hidden transition-all duration-500 hover:border-[#00ff66]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] group/text ${
                                            isImageLeft ? "lg:order-2" : "lg:order-1"
                                        }`}
                                    >
                                        {/* Subtle Ambient Glow */}
                                        <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-gradient-to-br from-[#00ff66]/8 via-transparent to-transparent blur-[80px] pointer-events-none transition-all duration-500 group-hover/text:from-[#00ff66]/12" />

                                        <div className="relative z-10 text-left flex flex-col gap-6">
                                            {/* Icon Badge */}
                                            <div className="w-12 h-12 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,102,0.15)] group-hover/text:border-[#00ff66]/40 group-hover/text:shadow-[0_0_25px_rgba(0,255,102,0.3)] transition-all duration-300">
                                                <Icon className="w-6 h-6 text-[#00ff66] filter drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]" />
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex flex-col gap-4">
                                                <h3 className="text-3xl md:text-4xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight leading-tight">
                                                    {t(section.titleKey)}
                                                </h3>
                                                <p className="text-[#fbf9f7]/65 text-base md:text-lg leading-relaxed font-medium">
                                                    {t(section.descKey)}
                                                </p>
                                            </div>

                                            {/* CTA Button */}
                                            <a
                                                href="#contact"
                                                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-emerald-500/10 hover:bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/20 hover:border-[#00ff66]/40 shadow-[0_0_15px_rgba(0,255,102,0.08)] hover:shadow-[0_0_25px_rgba(0,255,102,0.25)] w-fit mt-2"
                                            >
                                                {t("agents.cta")} →
                                            </a>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
