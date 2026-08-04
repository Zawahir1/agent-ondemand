"use client";

import { motion } from "framer-motion";

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    mockup: React.ReactNode;
}

interface ProductFeaturesProps {
    sectionTitle: string;
    sectionSubtitle: string;
    features: FeatureItem[];
}

export default function ProductFeatures({
    sectionTitle,
    sectionSubtitle,
    features
}: ProductFeaturesProps) {
    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca text-[#fbf9f7] font-medium tracking-tight mb-4">
                        {sectionTitle}
                    </h2>
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-medium whitespace-pre-line">
                        {sectionSubtitle}
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
                                        <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(0,255,102,0.15)]">
                                            <span className="text-[#00ff66] font-semibold font-intrinseca">{idx + 1}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-intrinseca text-[#fbf9f7] mb-6 font-medium tracking-tight leading-[1.15]">
                                            {feature.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-[#fbf9f7]/55 leading-relaxed font-medium whitespace-pre-line">
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
