"use client";

import { LucideIcon } from "lucide-react";
import GradientText from "./GradientText";

interface MeetProductProps {
    titleLine1: string;
    titleGradient: string;
    paragraphs: string[];
    listHeader: string;
    listItems: Array<{
        text: string;
        icon: LucideIcon;
    }>;
    ctaPrimary?: string;
    ctaSecondary?: string;
}

export default function MeetProduct({
    titleLine1,
    titleGradient,
    paragraphs,
    listHeader,
    listItems,
    ctaPrimary,
    ctaSecondary
}: MeetProductProps) {
    return (
        <section className="py-24 bg-transparent overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left side: Heading & Body paragraphs */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-left relative">
                        {/* Background Nebula Glow behind text */}
                        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-emerald-500/10 to-transparent blur-[100px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight mb-8 leading-[1.15]">
                                {titleLine1} <br />
                                <GradientText>{titleGradient}</GradientText>
                            </h2>
                            
                            <div className="space-y-6 text-[#fbf9f7]/65 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                                {paragraphs.map((para, idx) => (
                                    <p 
                                        key={idx} 
                                        className={idx === 0 ? "text-[#fbf9f7] font-bold text-lg md:text-xl" : ""}
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side: Capabilities Grid */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Background Nebula Glow behind Grid */}
                        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-gradient-to-tl from-[#00ff66]/8 via-transparent to-transparent blur-[120px] pointer-events-none" />
                        
                        <div className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] border border-[#00ff66]/10 p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative z-10 overflow-hidden group/panel">
                            
                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-[#00ff66]/15 pb-4">
                                    {listHeader}
                                </h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {listItems.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="bg-[#03140a]/60 backdrop-blur-md border border-[#00ff66]/15 hover:border-[#00ff66]/40 text-[#fbf9f7] rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:scale-[1.03] transition-all duration-300 group cursor-default select-none"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-[#00ff66]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00ff66]/25 group-hover:border-[#00ff66] transition-colors">
                                                    <Icon className="w-5 h-5 text-[#00ff66] filter drop-shadow-[0_0_4px_rgba(0,255,102,0.35)]" />
                                                </div>
                                                <span className="text-xs md:text-sm font-bold tracking-wide text-[#fbf9f7]/85 group-hover:text-white transition-colors">
                                                    {item.text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Optional CTA buttons */}
                        {(ctaPrimary || ctaSecondary) && (
                            <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                {ctaPrimary && (
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="flex items-center justify-center gap-2 bg-[#00ff66] text-black px-7 py-3.5 rounded-full font-bold hover:bg-[#00dd55] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.25)] cursor-pointer"
                                    >
                                        {ctaPrimary}
                                    </button>
                                )}
                                {ctaSecondary && (
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="flex items-center justify-center gap-2 bg-white/5 text-[#fbf9f7] border border-[#00ff66]/20 px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-950/20 hover:border-[#00ff66]/35 hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                    >
                                        {ctaSecondary}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
