"use client";

import { Database, Mail, Phone, LineChart, Users, Target } from "lucide-react";
import FallingText from './FallingText';
import GradientText from "./GradientText";

// Mock data for the chaotic software logos
const problemLogos = [
    { icon: Database, color: "text-blue-500", bg: "bg-blue-50", top: "20%", left: "10%" },
    { icon: Mail, color: "text-red-500", bg: "bg-red-50", top: "60%", left: "15%" },
    { icon: Phone, color: "text-green-500", bg: "bg-green-50", top: "30%", left: "80%" },
    { icon: LineChart, color: "text-purple-500", bg: "bg-purple-50", top: "70%", left: "75%" },
    { icon: Users, color: "text-orange-500", bg: "bg-orange-50", top: "45%", left: "5%" },
    { icon: Target, color: "text-indigo-500", bg: "bg-indigo-50", top: "50%", left: "90%" },
];

import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

// Mock data for Ava's unified features
const solutionFeatures = [
    { key: "solution.feat.realestate" as TranslationKey, top: "15%", left: "20%" },
    { key: "solution.feat.healthcare" as TranslationKey, top: "40%", left: "10%" },
    { key: "solution.feat.automotive" as TranslationKey, top: "65%", left: "15%" },
    { key: "solution.feat.legal" as TranslationKey, top: "15%", right: "20%" },
    { key: "solution.feat.fitness" as TranslationKey, top: "40%", right: "10%" },
    { key: "solution.feat.homeservices" as TranslationKey, top: "65%", right: "15%" },
];

export default function ProblemSolution() {
    const { t } = useLanguage();
    return (
        <div className="w-full">
            {/* =========================================================
                STATE 1: THE PROBLEM (Chaos, White Background)
                ========================================================= */}
            <section className="relative pt-24 pb-0 bg-transparent flex flex-col items-center z-30 ">
                <div className="relative w-full max-w-7xl mx-auto px-6 z-10 text-center flex flex-col items-center justify-center">
                    <h2 className="text-5xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 font-medium">
                        {t("problem.title")}
                    </h2>
                </div>
                <div className="w-full relative z-30 flex-1 flex flex-col h-full">
                    <FallingText
                        text={[
                            t("problem.falling.1"),
                            t("problem.falling.2"),
                            t("problem.falling.3"),
                            t("problem.falling.4"),
                            t("problem.falling.5"),
                            t("problem.falling.6"),
                            t("problem.falling.7")
                        ].join('\n')}
                        highlightWords={[]}
                        trigger="scroll"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.56}
                        fontSize="1rem"
                        mouseConstraintStiffness={0.9}
                        splitBy="line"
                        boxClassName="w-[260px] h-[80px] flex items-center justify-center text-center bg-gradient-to-br from-[#041c0e] to-[#010a05] border border-[#00ff66]/15 px-4 py-2 rounded-2xl text-[#fbf9f7]/80 font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-normal break-words"
                        boxWidth={260}
                        boxHeight={80}
                    /></div>
            </section>

            {/* =========================================================
                STATE 2: THE SOLUTION (Ava, Deep Purple Background)
                ========================================================= */}
            <section className="relative pb-0 flex flex-col overflow-hidden items-center justify-center z-10 min-h-[700px]">
                <div
                    className="relative w-full pt-24 mx-auto px-6 z-10 text-center rounded-3xl flex flex-col items-center justify-center h-full border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #041c0e 0%, #010a05 100%)' }}
                >
                    {/* Ambient glowing backdrops */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00ff66]/5 to-transparent pointer-events-none z-0" />
                    <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-gradient-to-br from-[#00ff66]/8 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />
                    <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-gradient-to-tl from-[#00ff66]/8 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

                    <h2 className="text-5xl md:text-6xl font-intrinseca text-white mb-6 font-medium mt-10 z-20">
                        <GradientText>{t("solution.title")}</GradientText>
                    </h2>
                    <p className="text-2xl md:text-3xl text-white max-w-3xl text-center mb-3 z-20 leading-relaxed font-semibold">
                        {t("solution.subtext.heading")}
                    </p>
                    <p className="text-base md:text-lg text-[#fbf9f7]/60 max-w-2xl text-center mb-16 z-20 leading-relaxed font-medium">
                        {t("solution.subtext.desc")}
                    </p>

                    {/* The Central "Ava" Hub (copied from website) */}
                    <div className="relative z-10 flex-1 overflow-visible min-h-[500px] lg:min-h-[650px] max-w-7xl mx-auto w-full flex items-center justify-center mt-auto mb-0">
                        {/* Ripple animation circles */}
                        <div className="absolute rounded-full border border-[#00ff66]/15 ripple-animation" style={{ width: 160, height: 160, left: '50%', marginLeft: -80, bottom: 170, animationDuration: '9.375s', animationDelay: '0s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border border-[#00ff66]/15 ripple-animation" style={{ width: 160, height: 160, left: '50%', marginLeft: -80, bottom: 170, animationDuration: '9.375s', animationDelay: '0.75s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border border-[#00ff66]/15 ripple-animation" style={{ width: 160, height: 160, left: '50%', marginLeft: -80, bottom: 170, animationDuration: '9.375s', animationDelay: '1.5s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border border-[#00ff66]/15 ripple-animation" style={{ width: 160, height: 160, left: '50%', marginLeft: -80, bottom: 170, animationDuration: '9.375s', animationDelay: '2.25s', willChange: 'transform, opacity' }}></div>
                        <div className="absolute rounded-full border border-[#00ff66]/15 ripple-animation" style={{ width: 160, height: 160, left: '50%', marginLeft: -80, bottom: 170, animationDuration: '9.375s', animationDelay: '3s', willChange: 'transform, opacity' }}></div>

                        {/* Ava easy glow image */}
                        <img
                             alt="Ava Easy Glow"
                             loading="lazy"
                             width="1844"
                             height="1426"
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 z-9 pointer-events-none w-full sm:w-3/4 object-contain object-bottom"
                             src="/images/ava-easy-glow.webp"
                             style={{ color: 'transparent' }}
                        />

                        {/* Ava Agent Character Overlay with silhouette glow */}
                        <img
                            className="absolute bottom-0 h-full z-20 object-contain object-bottom"
                            src="/images/agent.png"
                            style={{
                                filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 35px rgba(0, 255, 102, 0.5))"
                            }}
                        />

                        {/* Floating Feature Pills (Popping & Prominent) */}
                        {solutionFeatures.map((feature, i) => (
                            <div
                                key={i}
                                className={`absolute z-30 hidden md:block bubble-float-${i}`}
                                style={{
                                    top: feature.top,
                                    left: feature.left,
                                    right: feature.right,
                                }}
                            >
                                <div className="bg-gradient-to-br from-[#062d16]/90 to-[#011409]/95 backdrop-blur-lg border border-[#00ff66]/30 hover:border-[#00ff66] text-[#fbf9f7] hover:text-[#00ff66] px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:shadow-[0_0_35px_rgba(0,255,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-default select-none">
                                    {t(feature.key)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inline styles for ripple wave and floating bubbles animations */}
                <style>{`
                    @keyframes ripple {
                        0% {
                            transform: scale(1);
                            opacity: 0.9;
                        }
                        75% {
                            opacity: 0.6;
                        }
                        100% {
                            transform: scale(12.5);
                            opacity: 0;
                        }
                    }
                    .ripple-animation {
                        animation-name: ripple;
                        animation-timing-function: cubic-bezier(0.1, 0.8, 0.3, 1);
                        animation-iteration-count: infinite;
                    }
                    @keyframes float-bubble {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-8px);
                        }
                    }
                    .bubble-float-0 { animation: float-bubble 6s ease-in-out infinite; }
                    .bubble-float-1 { animation: float-bubble 5s ease-in-out infinite 0.8s; }
                    .bubble-float-2 { animation: float-bubble 7s ease-in-out infinite 1.5s; }
                    .bubble-float-3 { animation: float-bubble 5.5s ease-in-out infinite 2.2s; }
                    .bubble-float-4 { animation: float-bubble 6.5s ease-in-out infinite 3s; }
                    .bubble-float-5 { animation: float-bubble 6.2s ease-in-out infinite 3.7s; }
                `}</style>
            </section >
        </div >
    );
}
