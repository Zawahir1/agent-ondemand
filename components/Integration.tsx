"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Triangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

const cardsData = [
    {
        id: 1,
        beforeKey: "comparison.traditional.item1" as TranslationKey,
        afterKey: "comparison.agent.item1" as TranslationKey,
    },
    {
        id: 2,
        beforeKey: "comparison.traditional.item2" as TranslationKey,
        afterKey: "comparison.agent.item2" as TranslationKey,
    },
    {
        id: 3,
        beforeKey: "comparison.traditional.item3" as TranslationKey,
        afterKey: "comparison.agent.item3" as TranslationKey,
    },
    {
        id: 4,
        beforeKey: "comparison.traditional.item4" as TranslationKey,
        afterKey: "comparison.agent.item4" as TranslationKey,
    },
    {
        id: 5,
        beforeKey: "comparison.traditional.item5" as TranslationKey,
        afterKey: "comparison.agent.item5" as TranslationKey,
    },
];

const cards = [
    { type: "comparison", data: cardsData[0] },
    { type: "comparison", data: cardsData[1] },
    { type: "comparison", data: cardsData[2] },
    { type: "comparison", data: cardsData[3] },
    { type: "logo" },
    { type: "comparison", data: cardsData[4] },
];

export default function Integration() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this sticky section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Extremely smooth spring physics for the scroll progress to eliminate any scroll stuttering
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 65,
        damping: 26,
        restDelta: 0.001
    });

    // --- Smooth Scroll Transformations ---

    // 1. Red backlight (Traditional)
    const circleScaleRed = useTransform(smoothProgress, [0.0, 0.45], [1.2, 0.8]);
    const circleOpacityRed = useTransform(smoothProgress, [0.0, 0.45], [0.8, 0]);

    // 2. Green backlight (Agent On Demand)
    const circleScaleGreen = useTransform(smoothProgress, [0.25, 0.7], [0.5, 4.2]);
    const circleOpacityGreen = useTransform(smoothProgress, [0.25, 0.55], [0, 1]);

    // 3. Before Subtitle ("Traditional Receptionist")
    const title1Opacity = useTransform(smoothProgress, [0.15, 0.4], [1, 0]);
    const title1Y = useTransform(smoothProgress, [0.15, 0.4], ["0px", "-15px"]);

    // 4. After Subtitle ("Agent On Demand")
    const title2Opacity = useTransform(smoothProgress, [0.45, 0.7], [0, 1]);
    const title2Y = useTransform(smoothProgress, [0.45, 0.7], ["15px", "0px"]);

    // 5. Card Background & Border Color
    const cardBg = useTransform(
        smoothProgress,
        [0.2, 0.5],
        ["rgba(239, 68, 68, 0.03)", "rgba(0, 255, 102, 0.08)"]
    );
    const cardBorderColor = useTransform(
        smoothProgress,
        [0.2, 0.5],
        ["rgba(239, 68, 68, 0.15)", "rgba(0, 255, 102, 0.35)"]
    );

    // 6. Before card contents (✕ points)
    const beforeOpacity = useTransform(smoothProgress, [0.15, 0.4], [1, 0]);
    const beforeScale = useTransform(smoothProgress, [0.15, 0.4], [1, 0.9]);

    // 7. After card contents (✓ points)
    const afterOpacity = useTransform(smoothProgress, [0.45, 0.7], [0, 1]);
    const afterScale = useTransform(smoothProgress, [0.45, 0.7], [0.9, 1]);

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            <motion.div
                className="sticky top-0 h-screen rounded-2xl w-full overflow-hidden flex flex-col items-center justify-center bg-[#000000]"
            >
                {/* Red Backlight for Traditional Receptionist */}
                <motion.div
                    style={{
                        scale: circleScaleRed,
                        opacity: circleOpacityRed,
                        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(28, 4, 4, 0.1) 40%, rgba(239, 68, 68, 0.02) 70%, rgba(0, 0, 0, 0) 85%)'
                    }}
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 origin-center flex-shrink-0"
                />

                {/* Green Backlight for Agent On Demand */}
                <motion.div
                    style={{
                        scale: circleScaleGreen,
                        opacity: circleOpacityGreen,
                        background: 'radial-gradient(circle, rgba(0, 255, 102, 0.35) 0%, rgba(4, 28, 14, 0.2) 35%, rgba(16, 185, 129, 0.06) 65%, rgba(0, 0, 0, 0) 80%)'
                    }}
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 origin-center flex-shrink-0"
                />

                <div className="w-full max-w-5xl mx-auto px-6 pb-12 relative z-10 flex flex-col items-center pt-16">
                    {/* Header Wrapper */}
                    <div className="text-center mb-12 flex flex-col items-center">
                        {/* Fixed Main Title */}
                        <h2 className="text-3xl md:text-5xl font-intrinseca text-[#fbf9f7] font-medium leading-tight max-w-3xl mb-4">
                            {t("comparison.title")}
                        </h2>
                        
                        {/* Subtitle / Sub-heading container that transitions */}
                        <div className="relative w-full h-[40px] flex items-center justify-center">
                            {/* Before Sub-heading: Traditional Receptionist */}
                            <motion.div
                                style={{ opacity: title1Opacity, y: title1Y }}
                                className="absolute text-xl md:text-2xl font-bold tracking-wide text-red-500/90 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                            >
                                {t("comparison.traditional.title")}
                            </motion.div>

                            {/* After Sub-heading: Agent On Demand */}
                            <motion.div
                                style={{ opacity: title2Opacity, y: title2Y }}
                                className="absolute text-xl md:text-2xl font-bold tracking-wide text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                            >
                                {t("comparison.agent.title")}
                            </motion.div>
                        </div>
                    </div>

                    {/* The Animated Symmetrical Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {cards.map((card, idx) => {
                            if (card.type === "logo") {
                                return (
                                    <motion.div
                                        key={`logo-${idx}`}
                                        style={{
                                            backgroundColor: cardBg,
                                            borderColor: cardBorderColor,
                                        }}
                                        className="w-full min-h-[90px] rounded-2xl border flex items-center justify-center relative overflow-hidden transition-shadow duration-300"
                                    >
                                        <div className="grid grid-cols-1 grid-rows-1 w-full h-full items-center justify-center justify-items-center">
                                            {/* BEFORE State: Deactivated Brand Logo */}
                                            <motion.div
                                                style={{
                                                    opacity: beforeOpacity,
                                                    scale: beforeScale,
                                                }}
                                                className="col-start-1 row-start-1 flex flex-col items-center justify-center"
                                            >
                                                <Triangle className="w-8 h-8 text-red-500/40 fill-transparent stroke-[1.5] rotate-180" />
                                                <span className="text-[10px] text-red-500/50 mt-1 uppercase tracking-widest font-semibold">
                                                    Offline
                                                </span>
                                            </motion.div>

                                            {/* AFTER State: Activated Brand Logo */}
                                            <motion.div
                                                style={{
                                                    opacity: afterOpacity,
                                                    scale: afterScale,
                                                }}
                                                className="col-start-1 row-start-1 absolute inset-0 bg-gradient-to-br from-[#047857] to-[#013c20] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,255,102,0.4)] border-2 border-emerald-400/30 rounded-xl"
                                            >
                                                <Triangle className="w-8 h-8 text-[#fbf9f7] fill-[#fbf9f7] rotate-180 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                                                <span className="text-[10px] text-[#00ff66] mt-1 uppercase tracking-widest font-bold filter drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]">
                                                    Active
                                                </span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            }

                            const data = card.data!;
                            return (
                                <motion.div
                                    key={data.id}
                                    style={{
                                        backgroundColor: cardBg,
                                        borderColor: cardBorderColor,
                                    }}
                                    className="w-full min-h-[90px] p-5 rounded-2xl border flex items-center justify-start relative overflow-hidden transition-shadow duration-300"
                                >
                                    <div className="grid grid-cols-1 grid-rows-1 w-full items-center">
                                        {/* BEFORE State: Traditional Point */}
                                        <motion.div
                                            style={{
                                                opacity: beforeOpacity,
                                                scale: beforeScale,
                                            }}
                                            className="col-start-1 row-start-1 w-full flex items-center gap-3 text-left"
                                        >
                                            <span className="text-red-500 font-extrabold text-xl flex-shrink-0">✕</span>
                                            <span className="text-red-100/90 text-sm md:text-base font-medium leading-snug">
                                                {t(data.beforeKey)}
                                            </span>
                                        </motion.div>

                                        {/* AFTER State: Agent On Demand Point */}
                                        <motion.div
                                            style={{
                                                opacity: afterOpacity,
                                                scale: afterScale,
                                            }}
                                            className="col-start-1 row-start-1 w-full flex items-center gap-3 text-left"
                                        >
                                            <span className="text-[#00ff66] font-extrabold text-xl flex-shrink-0 filter drop-shadow-[0_0_5px_rgba(0,255,102,0.5)]">✓</span>
                                            <span className="text-[#fbf9f7] text-sm md:text-base font-semibold leading-snug">
                                                {t(data.afterKey)}
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
