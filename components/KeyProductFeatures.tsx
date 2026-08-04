"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface KeyFeatureItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

interface KeyProductFeaturesProps {
    sectionTitle: string;
    sectionSubtitle?: string;
    features: KeyFeatureItem[];
}

export default function KeyProductFeatures({
    sectionTitle,
    sectionSubtitle,
    features
}: KeyProductFeaturesProps) {
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
            {/* Soft Ambient Colorful Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-16 md:gap-20">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.15] tracking-tight mb-6">
                        {sectionTitle}
                    </h2>
                    {sectionSubtitle && (
                        <p className="text-[#fbf9f7]/55 text-base md:text-lg max-w-2xl mx-auto font-medium">
                            {sectionSubtitle}
                        </p>
                    )}
                    <div className="h-1.5 w-28 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full mx-auto mt-6" />
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                variants={cardVariants}
                                className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-10 relative overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#00ff66]/25 hover:shadow-[0_12px_40px_rgba(0,255,102,0.12)] group flex flex-col justify-between min-h-[260px]"
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
                                        <h3 className="text-2xl font-intrinseca text-[#fbf9f7] font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#00ff66]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#fbf9f7]/60 text-base leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Accent Corner Light */}
                                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-800 group-hover:bg-[#00ff66] group-hover:scale-125 transition-all duration-300" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
