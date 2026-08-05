"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Check } from "lucide-react";
import GradientText from "@/components/GradientText";

interface ProductsHeroProps {
    titleLine1: string;
    titleGradient: string;
    subtitle: string;
    description: string;
    detailParagraphs: string[];
    bulletPoints: string[];
    videoUrl?: string;
    videoThumbnail?: string;
}

export default function ProductsHero({
    titleLine1,
    titleGradient,
    subtitle,
    description,
    detailParagraphs,
    bulletPoints,
    videoUrl = "https://www.youtube.com/embed/2bojIMD7uYo?autoplay=1",
    videoThumbnail = "https://img.youtube.com/vi/2bojIMD7uYo/maxresdefault.jpg"
}: ProductsHeroProps) {
    const [isPlayingInline, setIsPlayingInline] = useState(false);

    // Animation variants for the floating UI cards
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    return (
        <section
            className="relative pt-48 pb-20 px-6 overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0, 255, 102, 0.08) 0%, transparent 70%)" }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Text & CTAs */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 text-left flex flex-col justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                        Product Overview
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight leading-[1.15] text-left">
                        {titleLine1}<br />
                        <GradientText>{titleGradient}</GradientText>
                    </h1>

                    <p className="text-base md:text-lg text-[#fbf9f7]/60 mb-5 leading-relaxed text-left">
                        {subtitle}
                    </p>

                    <p className="text-lg md:text-xl text-emerald-450 font-bold mb-4 leading-relaxed text-left">
                        {description}
                    </p>

                    {/* Detailed Paragraphs */}
                    <div className="text-sm md:text-base text-[#fbf9f7]/55 mb-8 space-y-4 leading-relaxed font-medium text-left">
                        {detailParagraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    {/* Value Props / Bullet Points - Stacked Vertically */}
                    <div className="flex flex-col gap-3 mb-10 text-left">
                        {bulletPoints.map((text, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-[#fbf9f7]/80 font-semibold">
                                <div className="w-5 h-5 rounded-full bg-[#00ff66]/15 border border-[#00ff66]/30 flex items-center justify-center shrink-0">
                                    <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                                </div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00ff66] text-black px-7 py-3.5 rounded-full font-bold hover:bg-[#00dd55] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.25)] cursor-pointer"
                        >
                            Book Your Demo <ArrowRight className="w-4 h-4 text-black" />
                        </button>
                        <button
                            onClick={() => setIsPlayingInline(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 text-[#fbf9f7] border border-[#00ff66]/20 px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-950/20 hover:border-[#00ff66]/35 hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <Play className="w-4 h-4 fill-current" /> Watch Demo
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Video Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-5 relative w-full bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group cursor-pointer"
                    onClick={() => !isPlayingInline && setIsPlayingInline(true)}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 to-transparent blur-3xl opacity-65 rounded-[4rem] -z-10" />

                    <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-gray-900">
                        {isPlayingInline ? (
                            <iframe
                                src={videoUrl}
                                title="Video Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        ) : (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-[1.01]"
                                    style={{ backgroundImage: `url('${videoThumbnail}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#00ff66] group-hover:border-[#00ff66] group-hover:text-black transition-all duration-300 shadow-lg">
                                        <Play className="w-8 h-8 text-white ml-1.5 fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
