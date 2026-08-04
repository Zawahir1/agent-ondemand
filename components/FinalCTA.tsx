"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTA() {
    const { t } = useLanguage();
    return (
        <section className="pt-32 bg-transparent relative overflow-hidden">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(251,249,247,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 leading-tight max-w-4xl mx-auto">
                        {t("final.cta.title")}
                    </h2>
                    
                    <div className="text-lg md:text-2xl font-bold tracking-wide text-emerald-400 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] flex flex-col items-center">
                        <span>{t("final.cta.subtitle1")}</span>
                        <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.25)] mt-1">{t("final.cta.subtitle2")}</span>
                    </div>

                    <p className="text-base md:text-lg text-[#fbf9f7]/65 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t("final.cta.desc")}
                    </p>

                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#fbf9f7]/40 mb-6">
                        {t("final.cta.subbutton")}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <button 
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 bg-[#00ff66] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00e575] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.65)] cursor-pointer"
                        >
                            {t("final.cta.button.start")} <ArrowRight className="w-5 h-5" />
                        </button>
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
                    <div className="absolute top-10 -left-10 md:left-10 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#00ff66]" />
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#fbf9f7]">Avery Knox</p>
                                <p className="text-xs text-[#fbf9f7]/50">CEO, at TechStack</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[10px] font-semibold tracking-wider text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/20 px-2.5 py-1 rounded inline-block">{t("final.cta.status.booked")}</div>
                    </div>

                    {/* Floating Calendar Card 2 */}
                    <div className="absolute top-0 -right-4 md:right-20 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/10 z-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#00ff66]" />
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#fbf9f7]">Michael Henderson</p>
                                <p className="text-xs text-[#fbf9f7]/50">CEO, at Finova</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[10px] font-semibold tracking-wider text-[#00ff66] bg-[#00ff66]/10 border border-[#00ff66]/20 px-2.5 py-1 rounded inline-block">{t("final.cta.status.booked")}</div>
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
