"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";

interface ProductCTAProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
}

export default function ProductCTA({
    title,
    subtitle,
    description,
    buttonText,
    onButtonClick
}: ProductCTAProps) {
    const handleScroll = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden z-10">
            {/* Subtle background dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,102,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative w-full">
                {/* Background ambient glowing spheres */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Main Poppy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ background: "linear-gradient(135deg, #03180c 0%, #010703 100%)" }}
                    className="relative rounded-[3rem] border border-[#00ff66]/15 hover:border-[#00ff66]/25 p-8 md:p-16 text-center shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden group transition-all duration-500"
                >
                    {/* Inner glowing element */}
                    <div className="absolute -inset-y-24 left-1/2 -translate-x-1/2 w-[600px] bg-[radial-gradient(circle,rgba(0,255,102,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-6 md:space-y-8">
                        {/* Red warning-styled subtitle badge */}
                        <motion.div 
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(239,68,68,0.15)] uppercase tracking-wider"
                        >
                            <AlertCircle className="w-4 h-4 filter drop-shadow-[0_0_2px_rgba(239,68,68,0.4)]" />
                            {subtitle}
                        </motion.div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.1] tracking-tight">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="text-[#fbf9f7]/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                            {description}
                        </p>

                        {/* Poppy Button */}
                        <div className="pt-4">
                            <button
                                onClick={handleScroll}
                                className="inline-flex items-center gap-3 bg-[#00ff66] text-black px-10 py-5 rounded-full font-bold text-base hover:bg-[#00e575] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.5)] hover:shadow-[0_0_45px_rgba(0,255,102,0.7)] cursor-pointer"
                            >
                                {buttonText}
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </button>
                        </div>
                    </div>

                    {/* Card border shine overlay */}
                    <div className="absolute inset-0 border border-transparent rounded-[3rem] bg-gradient-to-r from-transparent via-[#00ff66]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
            </div>
        </section>
    );
}
