"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import GradientText from "@/components/GradientText";

export default function Testimonials() {
    const { t } = useLanguage();

    const reviews = [
        {
            logo: t("testimonials.1.logo" as any),
            text: t("testimonials.1.text" as any),
            author: t("testimonials.1.author" as any),
            title: t("testimonials.1.title" as any),
        },
        {
            logo: t("testimonials.2.logo" as any),
            text: t("testimonials.2.text" as any),
            author: t("testimonials.2.author" as any),
            title: t("testimonials.2.title" as any),
        },
        {
            logo: t("testimonials.3.logo" as any),
            text: t("testimonials.3.text" as any),
            author: t("testimonials.3.author" as any),
            title: t("testimonials.3.title" as any),
        }
    ];

    return (
        <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-intrinseca text-[#fbf9f7] mb-16 text-center max-w-3xl mx-auto leading-tight">
                    <GradientText>{t("testimonials.title")}</GradientText>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ background: 'linear-gradient(135deg, #041c0e 0%, #010a05 100%)' }}
                            className="group p-8 rounded-[2rem] border border-[#00ff66]/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:border-[#00ff66]/25 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-xl font-bold text-[#fbf9f7] mb-8 grayscale group-hover:grayscale-0 transition-all">
                                    {review.logo}
                                </div>
                                <p className="text-lg text-[#fbf9f7]/70 leading-relaxed mb-8 italic">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-[#fbf9f7]">{review.author}</h4>
                                        <p className="text-sm text-[#fbf9f7]/55">{review.title}</p>
                                    </div>
                                    <button className="p-2 rounded-full bg-white/5 border border-white/10 text-[#fbf9f7]/55 group-hover:text-[#00ff66] group-hover:border-[#00ff66] transition-all cursor-pointer">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <span className="text-xs font-bold text-[#00ff66] uppercase tracking-wider cursor-pointer">
                                        {t("testimonials.readCaseStudy")}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
