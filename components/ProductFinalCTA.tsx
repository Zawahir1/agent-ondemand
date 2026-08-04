"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

interface CalendarCard {
    name: string;
    role: string;
    status: string;
}

interface ProductFinalCTAProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
    description: string;
    subbuttonText: string;
    buttonText: string;
    buttonSecondaryText?: string;
    calendarCard1: CalendarCard;
    calendarCard2: CalendarCard;
}

export default function ProductFinalCTA({
    title,
    subtitle1,
    subtitle2,
    description,
    subbuttonText,
    buttonText,
    buttonSecondaryText,
    calendarCard1,
    calendarCard2
}: ProductFinalCTAProps) {
    return (
        <section className="pt-32 bg-transparent relative overflow-hidden z-10">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(251,249,247,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] font-semibold mb-6 leading-tight max-w-4xl mx-auto">
                        {title}
                    </h2>
                    
                    <div className="text-lg md:text-2xl font-bold tracking-wide text-emerald-450 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] flex flex-col items-center">
                        <span>{subtitle1}</span>
                        <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.25)] mt-1">{subtitle2}</span>
                    </div>

                    <p className="text-base md:text-lg text-[#fbf9f7]/65 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        {description}
                    </p>

                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#fbf9f7]/40 mb-6">
                        {subbuttonText}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button 
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 bg-[#00ff66] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00e575] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.65)] cursor-pointer"
                        >
                            {buttonText} <ArrowRight className="w-5 h-5" />
                        </button>
                        {buttonSecondaryText && (
                            <button 
                                onClick={() => {
                                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                {buttonSecondaryText}
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Final Visual: Ava + Calendars */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full max-w-3xl h-auto flex justify-center items-end"
                >
                    {/* Floating Calendar Card 1 */}
                    <div className="absolute top-10 -left-10 md:left-10 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 z-20 animate-bounce text-left" style={{ animationDuration: '4s' }}>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#00ff66]" />
                            <div>
                                <p className="text-sm font-bold text-[#fbf9f7]">{calendarCard1.name}</p>
                                <p className="text-xs text-[#fbf9f7]/50">{calendarCard1.role}</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[10px] font-semibold tracking-wider text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/20 px-2.5 py-1 rounded inline-block">
                            {calendarCard1.status}
                        </div>
                    </div>

                    {/* Floating Calendar Card 2 */}
                    <div className="absolute top-0 -right-4 md:right-20 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 z-20 animate-bounce text-left" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#00ff66]" />
                            <div>
                                <p className="text-sm font-bold text-[#fbf9f7]">{calendarCard2.name}</p>
                                <p className="text-xs text-[#fbf9f7]/50">{calendarCard2.role}</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[10px] font-semibold tracking-wider text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/20 px-2.5 py-1 rounded inline-block">
                            {calendarCard2.status}
                        </div>
                    </div>

                    {/* Central Ava Avatar */}
                    <div className="relative z-10 flex justify-center items-end">
                        <img
                            src="/images/agent.png"
                            alt="Ava AI Agent"
                            className="h-full object-contain object-bottom"
                            style={{
                                filter: "drop-shadow(0 0 25px rgba(0, 255, 102, 0.6)) drop-shadow(0 0 55px rgba(0, 255, 102, 0.35))"
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
