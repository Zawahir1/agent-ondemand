"use client";

import { Triangle } from "lucide-react";

// Grab your brand icons from FontAwesome (fa) or SimpleIcons (si) via react-icons
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function Footer() {
    const { t } = useLanguage();

    const sections = [
        {
            title: t("footer.links.solutions"),
            items: [
                { label: t("footer.links.solutions.startups"), href: "#" },
                { label: t("footer.links.solutions.smbs"), href: "#" },
                { label: t("footer.links.solutions.enterprise"), href: "#" }
            ]
        },
        {
            title: t("footer.links.resources"),
            items: [
                { label: t("footer.links.resources.community"), href: "#" },
                { label: t("footer.links.resources.university"), href: "#" },
                { label: t("footer.links.resources.helpCenter"), href: "/contact" }
            ]
        },
        {
            title: t("footer.links.company"),
            items: [
                { label: t("footer.links.company.contact"), href: "/contact" },
                { label: t("footer.links.company.careers"), href: "#" },
                { label: t("footer.links.company.newsroom"), href: "#" }
            ]
        },
        {
            title: t("footer.links.blog"),
            items: [
                { label: t("footer.links.blog.post1"), href: "#" },
                { label: t("footer.links.blog.post2"), href: "#" },
                { label: t("footer.links.blog.post3"), href: "#" }
            ]
        },
        {
            title: t("footer.links.legal"),
            items: [
                { label: t("footer.links.legal.terms"), href: "/terms" },
                { label: t("footer.links.legal.privacy"), href: "/privacy" },
                { label: t("footer.links.legal.dpa"), href: "/dpa" },
                { label: t("footer.links.legal.aup" as TranslationKey), href: "/aup" },
                { label: t("footer.links.legal.disclaimer" as TranslationKey), href: "/disclaimer" },
                { label: t("footer.links.legal.cookies"), href: "/cookies" }
            ]
        }
    ];

    return (
        <footer
            style={{ background: 'linear-gradient(135deg, #041c0e 0%, #010a05 100%)' }}
            className="text-[#fbf9f7] pt-24 pb-12 mb-4 px-6 rounded-3xl mt-[-2rem] relative z-20 overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
        >
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20 relative z-20">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold mb-6 text-[#fbf9f7]">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-sm text-[#fbf9f7]/60 hover:text-[#00ff66] transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between w-full relative z-20 gap-8">

                    {/* Left Column: Socials and opt-out link */}
                    <div className="flex flex-col items-center md:items-start gap-4 border-t border-emerald-950/40 pt-8 w-full">
                        <div className="flex gap-5 text-[#fbf9f7]/60">
                            <FaLinkedin className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            <FaInstagram className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            <FaTwitter className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            <FaYoutube className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                        </div>
                        <Link href="#" className="text-xs text-[#fbf9f7]/40 hover:text-[#00ff66] transition-colors">
                            {t("footer.socials.optOut")}
                        </Link>
                    </div>

                    {/* Center Column: Animated Ripple Rings and Centered White Logo Container */}
                    <div className="flex items-center justify-center relative w-full min-h-[140px] overflow-visible">
                        {/* Ripple animation circles (Slow, ultra-faint ambient waves) */}
                        <div className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation pointer-events-none z-0" style={{ width: 80, height: 80, animationDuration: '15s', animationDelay: '0s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation pointer-events-none z-0" style={{ width: 80, height: 80, animationDuration: '15s', animationDelay: '1.5s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation pointer-events-none z-0" style={{ width: 80, height: 80, animationDuration: '15s', animationDelay: '3s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation pointer-events-none z-0" style={{ width: 80, height: 80, animationDuration: '15s', animationDelay: '4.5s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation pointer-events-none z-0" style={{ width: 80, height: 80, animationDuration: '15s', animationDelay: '6s', willChange: 'transform, opacity' }}></div>

                        {/* Circular Logo Container */}
                        <div className="w-20 h-20 bg-emerald-950/60 backdrop-blur-lg rounded-full border border-[#00ff66]/20 flex items-center justify-center relative z-30 shadow-[0_0_30px_rgba(0,255,102,0.35)] hover:border-[#00ff66]/40 hover:shadow-[0_0_40px_rgba(0,255,102,0.5)] hover:scale-105 transition-all duration-300">
                            <Triangle className="w-9 h-9 text-[#00ff66] fill-[#00ff66] rotate-180" />
                        </div>
                    </div>

                    {/* Right Column: Copyright */}
                    <div className="flex flex-col items-center md:items-end justify-center border-t border-emerald-950/40 pt-8 w-full text-center md:text-right">
                        <span className="text-sm text-[#fbf9f7]/60">
                            {t("footer.copyright")}
                        </span>
                    </div>

                </div>
            </div>

            {/* Inline keyframe styles for staggered footer ripple waves */}
            <style>{`
                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    75% {
                        opacity: 0.2;
                    }
                    100% {
                        transform: scale(28.0);
                        opacity: 0;
                    }
                }
                .ripple-animation {
                    animation-name: ripple;
                    animation-timing-function: cubic-bezier(0.1, 0.8, 0.3, 1);
                    animation-iteration-count: infinite;
                }
            `}</style>
        </footer>
    );
}
