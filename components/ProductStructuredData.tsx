"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface StructuredDataItem {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
    widgetIcon?: LucideIcon;
    widgetTitle: string;
    widgetContent: React.ReactNode;
    colSpan?: number; // e.g. 1 or 2
}

interface ProductStructuredDataProps {
    subtitle?: string;
    title: string;
    description: string;
    footerText?: string;
    items: StructuredDataItem[];
}

export default function ProductStructuredData({
    subtitle = "Call Insights",
    title,
    description,
    footerText,
    items
}: ProductStructuredDataProps) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance active index if not hovered
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % items.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isHovered, items.length]);

    return (
        <section 
            className="py-24 bg-[#000000] relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Ambient colorful green nebula backlight */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0 origin-center bg-[radial-gradient(circle,rgba(0,255,102,0.08)_0%,rgba(16,185,129,0.015)_50%,rgba(0,0,0,0)_80%)]" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Side Content & Interactive Tabs */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left">
                    {subtitle && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                            {subtitle}
                        </div>
                    )}
                    
                    <h2 className="text-3xl md:text-5xl font-intrinseca text-[#fbf9f7] font-semibold leading-[1.15] mb-4">
                        {title}
                    </h2>
                    
                    <p className="text-base md:text-lg text-[#fbf9f7]/60 mb-8 leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="space-y-3 mb-8">
                        {items.map((item) => {
                            const isActive = activeIdx === item.id;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveIdx(item.id)}
                                    className={`pl-4 py-3.5 rounded-r-2xl border-l-4 transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                                        isActive 
                                            ? "border-emerald-400 bg-emerald-500/5 text-white" 
                                            : "border-white/5 bg-transparent text-[#fbf9f7]/55 hover:text-[#fbf9f7]/90 hover:bg-white/[0.01]"
                                    }`}
                                >
                                    <div className={`p-2 rounded-xl transition-colors ${
                                        isActive ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#fbf9f7]/30"
                                    }`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-[#fbf9f7]/50 mt-1 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Team Footer Banner */}
                    {footerText && (
                        <div className="border-l-2 border-emerald-500/40 pl-4 py-1.5 text-sm font-medium text-emerald-400/90 italic">
                            {footerText}
                        </div>
                    )}
                </div>

                {/* Right Side CRM Dashboard Mockup */}
                <div className="lg:col-span-7 flex flex-col justify-center w-full">
                    <div className="w-full bg-[#030905]/80 backdrop-blur-md rounded-[2.2rem] border border-[#00ff66]/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#00ff66]/10">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="text-[10px] text-[#fbf9f7]/30 font-semibold tracking-wider uppercase ml-2">
                                    Agent On Demand CRM
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Live call synced
                            </div>
                        </div>

                        {/* CRM Dashboard Widgets Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {items.map((item) => {
                                const isActive = activeIdx === item.id;
                                const CardIcon = item.widgetIcon || item.icon;
                                const colSpanClass = item.colSpan === 2 ? "sm:col-span-2" : "";

                                return (
                                    <motion.div
                                        key={item.id}
                                        animate={{
                                            scale: isActive ? 1.025 : 0.975,
                                            borderColor: isActive ? "rgba(0, 255, 102, 0.35)" : "rgba(255, 255, 255, 0.05)",
                                            backgroundColor: isActive ? "rgba(0, 255, 102, 0.05)" : "rgba(255, 255, 255, 0.015)",
                                            boxShadow: isActive ? "0 0 25px rgba(0, 255, 102, 0.12)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                        }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className={`border rounded-2xl p-5 relative overflow-hidden transition-colors ${colSpanClass}`}
                                    >
                                        {/* Accent Micro Glow for active item */}
                                        {isActive && (
                                            <div className="absolute -top-12 -left-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                                        )}

                                        <div className="flex items-center gap-2.5 mb-3 relative z-10">
                                            <CardIcon className="w-4 h-4 text-emerald-400" />
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                                {item.widgetTitle}
                                            </span>
                                        </div>
                                        <div className="relative z-10 text-xs md:text-sm">
                                            {item.widgetContent}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
