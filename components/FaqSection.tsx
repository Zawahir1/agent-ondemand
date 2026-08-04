"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

const faqItems = [
    {
        id: 1,
        questionKey: "faq.q1" as TranslationKey,
        answerKey: "faq.a1" as TranslationKey,
    },
    {
        id: 2,
        questionKey: "faq.q2" as TranslationKey,
        answerKey: "faq.a2" as TranslationKey,
    },
    {
        id: 3,
        questionKey: "faq.q3" as TranslationKey,
        answerKey: "faq.a3" as TranslationKey,
    },
    {
        id: 4,
        questionKey: "faq.q4" as TranslationKey,
        answerKey: "faq.a4" as TranslationKey,
    },
    {
        id: 5,
        questionKey: "faq.q5" as TranslationKey,
        answerKey: "faq.a5" as TranslationKey,
    },
    {
        id: 6,
        questionKey: "faq.q6" as TranslationKey,
        answerKey: "faq.a6" as TranslationKey,
    },
];

export default function FaqSection() {
    const { t } = useLanguage();
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className="py-24 bg-[#000000] relative overflow-hidden">
            {/* Ambient Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,rgba(0,0,0,0)_70%)]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-5xl font-intrinseca text-[#fbf9f7] font-medium leading-tight mb-4">
                        {t("faq.title")}
                    </h2>
                    <p className="text-base md:text-lg text-[#fbf9f7]/60 max-w-2xl mx-auto">
                        {t("faq.subtitle")}
                    </p>
                </div>

                {/* Accordion Wrapper */}
                <div className="w-full max-w-3xl space-y-4">
                    {faqItems.map((item, idx) => {
                        const isOpen = openIdx === idx;

                        return (
                            <motion.div
                                key={item.id}
                                layout="position"
                                animate={{
                                    borderColor: isOpen ? "rgba(0, 255, 102, 0.25)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: isOpen ? "rgba(0, 255, 102, 0.03)" : "rgba(255, 255, 255, 0.01)"
                                }}
                                transition={{ duration: 0.25 }}
                                className="border rounded-2xl overflow-hidden transition-all duration-300 relative"
                            >
                                {/* Active subtle border glow */}
                                {isOpen && (
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,102,0.03)_0%,transparent_60%)] pointer-events-none" />
                                )}

                                {/* Question Header */}
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-white/[0.01]"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-200 ${
                                        isOpen ? "text-[#fbf9f7]" : "text-[#fbf9f7]/80 hover:text-white"
                                    }`}>
                                        {t(item.questionKey)}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className={`flex-shrink-0 p-1 rounded-full ${
                                            isOpen ? "text-emerald-400 bg-emerald-500/10" : "text-white/40 bg-white/5"
                                        }`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                {/* Answer Body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ 
                                                height: "auto", 
                                                opacity: 1,
                                                transition: { height: { duration: 0.25, ease: "easeOut" }, opacity: { duration: 0.15, delay: 0.05 } } 
                                            }}
                                            exit={{ 
                                                height: 0, 
                                                opacity: 0,
                                                transition: { height: { duration: 0.25, ease: "easeIn" }, opacity: { duration: 0.15 } } 
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-1 text-sm md:text-base text-[#fbf9f7]/70 leading-relaxed border-t border-white/[0.03]">
                                                {t(item.answerKey)}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
