"use client";

import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Footer() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const currentLocale = pathname?.split("/")[1] || "en";
    const lp = (path: string) => `/${currentLocale}${path}`;

    const sections = [
        {
            title: "Products",
            items: [
                { label: "AI Receptionist", href: lp("/receptionist") },
                { label: "AI Outbound Calling", href: lp("/outbound") },
                { label: "Real Estate AI Agent", href: lp("/real-estate") },
                { label: "Automotive AI Agent", href: lp("/automotive") },
                { label: "Gym & Fitness AI Agent", href: lp("/gym") },
            ],
        },
        {
            title: "Company",
            items: [
                { label: "Pricing", href: lp("/pricing") },
                { label: "Blog", href: lp("/blog") },
                { label: "Contact Us", href: lp("/contact") },
            ],
        },
        {
            title: "Legal",
            items: [
                { label: "Terms of Service", href: lp("/terms") },
                { label: "Privacy Policy", href: lp("/privacy") },
                { label: "Data Processing Agreement", href: lp("/dpa") },
                { label: "Acceptable Use Policy", href: lp("/aup") },
                { label: "Disclaimer", href: lp("/disclaimer") },
                { label: "Cookie Policy", href: lp("/cookies") },
            ],
        },
    ];

    return (
        <footer
            style={{ background: "linear-gradient(135deg, #041c0e 0%, #010a05 100%)" }}
            className="text-[#fbf9f7] pt-24 pb-12 mb-4 px-6 rounded-3xl mt-[-2rem] relative z-20 overflow-hidden border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
        >
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 relative z-20">

                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href={lp("")} className="inline-block mb-6">
                            <img
                                src="/images/Agent on demand.png"
                                alt="Agent On Demand"
                                className="h-8 w-auto object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        </Link>
                        <p className="text-sm text-[#fbf9f7]/50 leading-relaxed max-w-[220px]">
                            AI call agents that answer every business call, 24/7, in 30+ languages.
                        </p>
                        <div className="flex gap-4 mt-6 text-[#fbf9f7]/50">
                            <a href="https://www.linkedin.com/company/agent-on-demand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            </a>
                            <a href="https://www.instagram.com/agenton.demand" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            </a>
                            <a href="https://x.com/agentOnDemand" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                                <FaTwitter className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            </a>
                            <a href="https://www.youtube.com/@agentOnDemand" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube className="w-5 h-5 hover:text-[#00ff66] cursor-pointer transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Link sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold mb-6 text-[#fbf9f7]">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-[#fbf9f7]/60 hover:text-[#00ff66] transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-emerald-950/40 pt-8 gap-4">
                    <span className="text-xs text-[#fbf9f7]/40">
                        © {new Date().getFullYear()} Agent On Demand. All rights reserved.
                    </span>
                    <Link href={lp("/contact")} className="text-xs text-[#fbf9f7]/40 hover:text-[#00ff66] transition-colors">
                        {t("footer.socials.optOut")}
                    </Link>
                </div>
            </div>

            {/* Ripple animation */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none z-0">
                {[0, 1.5, 3, 4.5, 6].map((delay) => (
                    <div
                        key={delay}
                        className="absolute rounded-full border-[0.5px] border-[#00ff66]/10 ripple-animation"
                        style={{ width: 80, height: 80, animationDuration: "15s", animationDelay: `${delay}s`, willChange: "transform, opacity", top: 0, left: 0 }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes ripple {
                    0%   { transform: scale(1); opacity: 0.5; }
                    75%  { opacity: 0.2; }
                    100% { transform: scale(28.0); opacity: 0; }
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
