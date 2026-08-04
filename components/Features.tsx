import { BarChart3, Calendar, Search, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            id: 0,
            title: t("slides.works.1.title"),
            description: t("slides.works.1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("slides.works.1.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("slides.works.1.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("slides.works.1.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("slides.works.1.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("slides.works.2.title"),
            description: t("slides.works.2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.2.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("slides.works.2.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("slides.works.2.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.2.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("slides.works.2.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("slides.works.2.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("slides.works.3.title"),
            description: t("slides.works.3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.3.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("slides.works.3.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("slides.works.3.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.3.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("slides.works.3.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("slides.works.3.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("slides.works.4.title"),
            description: t("slides.works.4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.4.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("slides.works.4.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("slides.works.4.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.4.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("slides.works.4.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("slides.works.4.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("slides.works.5.title"),
            description: t("slides.works.5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.5.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("slides.works.5.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("slides.works.5.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.5.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("slides.works.5.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("slides.works.5.ai.2")}</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight mb-4">
                        {t("slides.works.title")}
                    </h2>
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-medium">
                        {t("slides.works.subtitle")}
                    </p>
                </div>

                {/* Alternating Slides */}
                <div className="space-y-32">
                    {features.map((feature, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Text side — open, no card box */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center relative text-left">
                                    {/* Subtle ambient glow behind text (Green Nebula) */}
                                    <div className={`absolute ${isEven ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-950/15 via-transparent to-transparent blur-3xl pointer-events-none`} />
                                    <div className="relative z-10">
                                        {/* Number Badge */}
                                        <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(0, 255, 102, 0.15)]">
                                            <span className="text-[#00ff66] font-semibold font-intrinseca">{idx + 1}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-intrinseca text-[#fbf9f7] mb-6 font-medium tracking-tight leading-[1.15]">
                                            {feature.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-[#fbf9f7]/55 leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
     
                                {/* Mockup side — right-panel dark glass container */}
                                <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[3rem] p-8 md:p-12 overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#00ff66]/25 group">
                                    {/* Ambient glow corner (Green nebula backlight) */}
                                    <div className="absolute -bottom-20 -right-20 w-[380px] h-[380px] bg-gradient-to-tl from-[#00ff66]/8 via-transparent to-transparent blur-[100px] pointer-events-none" />
                                    
                                    <div className="relative z-10 w-full flex items-center justify-center">
                                        {feature.mockup}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
