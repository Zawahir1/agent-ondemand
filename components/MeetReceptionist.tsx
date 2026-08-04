"use client";

import { PhoneIncoming, CalendarDays, UserCheck, HelpCircle, Clock, PhoneForwarded, Send, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import GradientText from "./GradientText";

export default function MeetReceptionist() {
    const { t } = useLanguage();

    const capabilities = [
        { key: "meet.receptionist.item1", icon: PhoneIncoming },
        { key: "meet.receptionist.item2", icon: CalendarDays },
        { key: "meet.receptionist.item3", icon: UserCheck },
        { key: "meet.receptionist.item4", icon: HelpCircle },
        { key: "meet.receptionist.item5", icon: Clock },
        { key: "meet.receptionist.item6", icon: PhoneForwarded },
        { key: "meet.receptionist.item7", icon: Send },
        { key: "meet.receptionist.item8", icon: FileText },
    ];

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
                                Meet Your 24/7 <br />
                                <GradientText>{t("meet.receptionist.title").replace("Meet Your 24/7 ", "")}</GradientText>
                            </h2>
                            
                            <div className="space-y-6 text-[#fbf9f7]/65 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                                <p className="text-[#fbf9f7] font-bold text-lg md:text-xl">
                                    {t("meet.receptionist.desc1")}
                                </p>
                                <p>
                                    {t("meet.receptionist.desc2")}
                                </p>
                                <p className="text-emerald-400 font-semibold">
                                    {t("meet.receptionist.desc3")}
                                </p>
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
                                    {t("meet.receptionist.listTitle")}
                                </h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {capabilities.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="bg-[#03140a]/60 backdrop-blur-md border border-[#00ff66]/15 hover:border-[#00ff66]/40 text-[#fbf9f7] rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:scale-[1.03] transition-all duration-300 group cursor-default select-none"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-[#00ff66]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00ff66]/20 group-hover:border-[#00ff66] transition-colors">
                                                    <Icon className="w-5 h-5 text-[#00ff66] filter drop-shadow-[0_0_4px_rgba(0,255,102,0.35)]" />
                                                </div>
                                                <span className="text-xs md:text-sm font-bold tracking-wide text-[#fbf9f7]/85 group-hover:text-white transition-colors">
                                                    {t(item.key as TranslationKey)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
