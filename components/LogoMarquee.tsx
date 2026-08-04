"use client";

import { motion } from "framer-motion";

// High-fidelity text-based configurations replicating the exact brand styles from the video
const companies = [
    { name: "COOK × UNITY", className: "font-black tracking-tighter text-[#fbf9f7]/80 text-lg" },
    { name: "SaaStr", className: "font-intrinseca font-extrabold text-[#fbf9f7] text-xl tracking-tight" },
    { name: "Quora", className: "font-intrinseca font-bold text-red-400 text-xl italic" },
    { name: "sumup", className: "font-sans font-black text-blue-400 text-lg tracking-tight lowercase" },
    { name: "informa", className: "font-sans font-bold text-[#fbf9f7] text-lg uppercase tracking-wide" },
    { name: "arc", className: "font-sans font-extrabold text-[#fbf9f7]/80 text-xl lowercase tracking-tighter" },
    { name: "RAISE", className: "font-intrinseca tracking-widest text-[#fbf9f7] text-base font-semibold" },
];

// Duplicate the list to create a completely seamless infinite loop
const duplicatedCompanies = [...companies, ...companies, ...companies];

export default function LogoMarquee() {
    return (
        <section className="py-12 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Subtle, tracked out uppercase sub-heading */}
                <p className="text-center text-md font-semibold tracking-[0.2em] text-[#fbf9f7]/50 uppercase mb-10">
                    FAST-GROWING BUSINESSES USE AVA
                </p>

                {/* The Marquee Viewport with Left/Right Fades */}
                <div className="relative w-full overflow-hidden mask-gradient">

                    {/* Left Edge Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />

                    {/* Right Edge Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Track */}
                    <motion.div
                        className="flex space-x-16 items-center whitespace-nowrap min-w-full w-max"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedCompanies.map((company, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none ${company.className}`}
                            >
                                {company.name}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
