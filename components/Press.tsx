"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Press() {
    const { t } = useLanguage();
    const publications = [
        { name: "Forbes", font: "font-intrinseca font-bold text-2xl" },
        { name: "The New York Times", font: "font-intrinseca font-black text-xl italic" },
        { name: "TechCrunch", font: "font-sans font-black text-2xl tracking-tighter text-green-400" },
        { name: "Inc.", font: "font-intrinseca font-bold text-3xl" },
        { name: "BUSINESS INSIDER", font: "font-sans font-bold text-xl tracking-tight" },
        { name: "BBC", font: "font-sans font-bold text-2xl tracking-widest" },
    ];

    return (
        <section className="py-24 bg-transparent border-b border-white/10">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-intrinseca text-[#fbf9f7] mb-12">{t("press.title")}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {publications.map((pub, i) => (
                        <div key={i} className={`${pub.font} text-[#fbf9f7]/80`}>
                            {pub.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
