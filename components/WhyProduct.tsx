"use client";

import { motion, Variants } from "framer-motion";
import { AlertCircle, LucideIcon } from "lucide-react";

interface WhyProductProps {
    badge: string;
    title: string;
    descriptionTop: string;
    descriptionBottom: string;
    listItems: string[];
    itemIcon?: LucideIcon;
}

export default function WhyProduct({
    badge,
    title,
    descriptionTop,
    descriptionBottom,
    listItems,
    itemIcon: ItemIcon = AlertCircle
}: WhyProductProps) {
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
                            {badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight">
                            {title}
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#00ff66] to-emerald-800 rounded-full" />
                        
                        <div className="flex flex-col gap-4 mt-2">
                            <p className="text-[#fbf9f7] font-bold text-lg md:text-xl leading-relaxed">
                                {descriptionTop}
                            </p>
                            <p className="text-[#fbf9f7]/55 text-base leading-relaxed font-medium">
                                {descriptionBottom}
                            </p>
                        </div>
                    </div>

                    {/* Right Stacked List Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-6 lg:col-span-7 w-full text-left"
                    >
                        {listItems.map((text, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-3xl p-6 md:p-8 flex items-center gap-5 relative overflow-hidden border border-[#00ff66]/10 hover:border-red-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_8px_35px_rgba(239,68,68,0.08)] group"
                            >
                                {/* Micro Ambient Radial Glow */}
                                <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-[#00ff66]/5 to-transparent blur-xl pointer-events-none transition-all duration-500 group-hover:from-red-500/5" />

                                {/* Icon Badge */}
                                <div className="w-10 h-10 rounded-xl bg-red-950/20 border border-red-500/10 text-red-400 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.05)] group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
                                    <ItemIcon className="w-5 h-5 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.4)]" />
                                </div>

                                {/* Content */}
                                <h3 className="text-base md:text-lg text-[#fbf9f7]/85 font-semibold tracking-tight transition-colors duration-300 group-hover:text-white leading-relaxed">
                                    {text}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
