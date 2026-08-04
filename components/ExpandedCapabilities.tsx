import { motion, Variants } from "framer-motion";
import { Zap, DollarSign, UserCheck, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExpandedCapabilities() {
    const { t } = useLanguage();

    // Added : Variants and "as const" to strictly type the animation
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card 1: Intent-driven */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-10 flex flex-col justify-between border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden group relative transition-all duration-500 hover:border-[#00ff66]/25"
                    >

                        <div className="mb-12 relative z-10">
                            <h3 className="text-3xl font-intrinseca text-[#fbf9f7] mb-4">{t("capabilities.coldOutbound.title")}</h3>
                            <p className="text-[#fbf9f7]/70 text-lg leading-relaxed">
                                {t("capabilities.coldOutbound.desc")}
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[t("capabilities.coldOutbound.bullet1"), t("capabilities.coldOutbound.bullet2"), t("capabilities.coldOutbound.bullet3")].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#fbf9f7]/80 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover:bg-[#00ff66] group-hover:scale-125 transition-all duration-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Micro-UI: Funding Signal (Ultra Popping) */}
                        <div className="bg-[#03150c]/90 backdrop-blur-sm p-5 rounded-2xl border border-[#00ff66]/20 w-full max-w-sm mx-auto transform group-hover:-translate-y-2 transition-transform duration-500 relative z-10 shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-950/50 rounded-xl flex items-center justify-center border border-emerald-400/40 text-emerald-350 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                                    <DollarSign className="w-6 h-6 text-emerald-350 filter drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="text-sm font-bold text-[#fbf9f7]">{t("capabilities.coldOutbound.mockup.title")}</h4>
                                    <p className="text-xs text-[#fbf9f7]/60 font-medium">Acme Corp</p>
                                </div>
                                <div className="bg-emerald-950/60 p-2 rounded-lg border border-[#00ff66]/20 text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]">
                                    <Zap className="w-4 h-4 text-[#00ff66] fill-[#00ff66]/20 filter drop-shadow-[0_0_5px_rgba(0,255,102,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-rows-2 gap-8">

                        {/* Card 2: CRM Re-engagement */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-10 flex flex-col justify-between border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden group relative transition-all duration-500 hover:border-[#00ff66]/25"
                        >

                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-intrinseca text-[#fbf9f7] mb-3">{t("capabilities.crm.title")}</h3>
                                <p className="text-[#fbf9f7]/70 font-medium">{t("capabilities.crm.desc")}</p>
                            </div>

                            {/* Micro-UI: CRM Lead (Ultra Popping) */}
                            <div className="bg-[#03150c]/90 backdrop-blur-sm p-4 rounded-2xl border border-[#00ff66]/20 transform group-hover:scale-[1.02] transition-transform duration-500 relative z-10 shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-950/50 rounded-full flex items-center justify-center border border-emerald-400/30 text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]">
                                        <UserCheck className="w-5 h-5 text-[#00ff66] filter drop-shadow-[0_0_5px_rgba(0,255,102,0.5)]" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm font-bold text-[#fbf9f7]">{t("capabilities.crm.mockup.title")}</h4>
                                        <p className="text-xs text-[#fbf9f7]/60 font-medium">sarah@techflow.io</p>
                                    </div>
                                    <div className="ml-auto w-2.5 h-2.5 bg-[#00ff66] rounded-full shadow-[0_0_10px_rgba(0,255,102,0.85)] animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Account Growth */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.4 }}
                            className="bg-[linear-gradient(135deg,#041c0e_0%,#010a05_100%)] rounded-[2.5rem] p-10 flex flex-col justify-between border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden group relative transition-all duration-500 hover:border-[#00ff66]/25"
                        >

                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-intrinseca text-[#fbf9f7] mb-3">{t("capabilities.growth.title")}</h3>
                                <p className="text-[#fbf9f7]/70 font-medium">{t("capabilities.growth.desc")}</p>
                            </div>

                            {/* Micro-UI: AM Profiles (Ultra Popping) */}
                            <div className="bg-[#03150c]/90 backdrop-blur-sm p-4 rounded-2xl border border-[#00ff66]/20 space-y-3 transform group-hover:scale-[1.02] transition-transform duration-500 relative z-10 shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                                {[
                                    { name: "Henry Garcia", role: t("capabilities.growth.mockup.ae"), initials: "HG" },
                                    { name: "Taylor Stone", role: t("capabilities.growth.mockup.am"), initials: "TS" }
                                ].map((user, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-neutral-800 border border-neutral-700 rounded-full flex items-center justify-center text-[10px] font-bold text-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                                                {user.initials}
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-bold text-[#fbf9f7]">{user.name}</p>
                                                <p className="text-[10px] text-[#fbf9f7]/60 font-medium">{user.role}</p>
                                            </div>
                                        </div>
                                        <div className="bg-emerald-950/60 p-1.5 rounded-md border border-[#00ff66]/20 text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]">
                                            <Mail className="w-4 h-4 text-[#00ff66] filter drop-shadow-[0_0_5px_rgba(0,255,102,0.5)]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
