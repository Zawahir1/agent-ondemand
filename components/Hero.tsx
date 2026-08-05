"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Check } from "lucide-react";
import GradientText from "@/components/GradientText";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [isPlayingInline, setIsPlayingInline] = useState(false);

    // Animation variants for the floating UI cards
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section
            className="relative pt-48 pb-0 px-6 overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0, 255, 102, 0.08) 0%, transparent 70%)" }}
        >
            
            <div className="max-w-7xl mx-auto text-center">

                {/* Main Headline & Subtext */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-intrinseca text-[#fbf9f7] mb-6 tracking-[0]">
                        {t("hero.headline.line1")}<br />
                        <GradientText>{t("hero.headline.gradient")}</GradientText>
                    </h1>
                    <p className="text-lg md:text-xl text-[#fbf9f7]/60 mb-5 max-w-2xl mx-auto leading-relaxed">
                        {t("hero.subtext")}
                    </p>
                    <p className="text-base text-[#fbf9f7]/45 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t("hero.description")}
                    </p>

                    {/* Value Props */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto mb-10 text-left">
                        {([
                            t("hero.bullet1"),
                            t("hero.bullet2"),
                            t("hero.bullet3"),
                            t("hero.bullet4"),
                        ]).map((text, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-sm text-[#fbf9f7]/75">
                                <div className="w-5 h-5 rounded-full bg-[#00ff66]/15 border border-[#00ff66]/30 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[#00ff66]" />
                                </div>
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 bg-[#00ff66] text-black px-7 py-3.5 rounded-full font-bold hover:bg-[#00dd55] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.25)] cursor-pointer"
                        >
                            {t("hero.startTrial")} <ArrowRight className="w-4 h-4 text-black" />
                        </button>
                        <button
                            onClick={() => setIsPlayingInline(true)}
                            className="flex items-center gap-2 bg-white/5 text-[#fbf9f7] border border-[#00ff66]/20 px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-950/20 hover:border-[#00ff66]/35 hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <Play className="w-4 h-4 fill-current" /> {t("hero.bookDemo")}
                        </button>
                    </div>
                </motion.div>

                {/* The "Ava" Interactive UI Mockup / Video Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="relative mt-20 max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group cursor-pointer"
                    onClick={() => !isPlayingInline && setIsPlayingInline(true)}
                >
                    {/* Background Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 to-transparent blur-3xl opacity-65 rounded-[4rem] -z-10" />

                    <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden bg-gray-900">
                        {isPlayingInline ? (
                            <iframe
                                src="https://www.youtube.com/embed/2bojIMD7uYo?autoplay=1"
                                title="Ava Video Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full border-0"
                            />
                        ) : (
                            <>
                                {/* YouTube video thumbnail as background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-[1.01]"
                                    style={{ backgroundImage: "url('https://img.youtube.com/vi/2bojIMD7uYo/maxresdefault.jpg')" }}
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
