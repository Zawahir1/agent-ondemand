"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function CookiesPage() {
  const { t } = useLanguage();

  // Create an array of 6 sections to map over
  const sections = Array.from({ length: 6 }, (_, i) => i + 1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "url": "https://www.agent-ondemand.com/cookies",
    "isPartOf": { "@id": "https://www.agent-ondemand.com/#website" },
    "about": "How Agent On Demand uses cookies and similar tracking technologies on its website.",
    "publisher": { "@id": "https://www.agent-ondemand.com/#organization" }
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("cookies.policy.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("cookies.policy.meta.desc" as TranslationKey)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background glow - Professional Emerald/Green theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#00ff66]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <Cookie className="w-3.5 h-3.5" /> Cookies
            </div>
            <h1 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("cookies.title" as TranslationKey)}
            </h1>
            <p className="text-md md:text-lg text-[#fbf9f7]/60 max-w-2xl mx-auto leading-relaxed">
              {t("cookies.subtitle" as TranslationKey)}
            </p>
          </div>

          {/* Intro welcome blocks */}
          <div className="rounded-3xl p-8 md:p-10 border border-emerald-800/30 bg-[linear-gradient(135deg,#03180c_0%,#010703_100%)] shadow-[0_12px_45px_rgba(0,0,0,0.6)] mb-12 space-y-4">
            <p className="text-sm md:text-base text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("cookies.intro.welcome" as TranslationKey)}
            </p>
            <p className="text-sm md:text-base text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("cookies.intro.agreement" as TranslationKey)}
            </p>
          </div>

          {/* Numbered Sections */}
          <div className="space-y-6 mb-12">
            {sections.map((num) => (
              <div 
                key={num} 
                className="rounded-2xl p-6 md:p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300"
              >
                <h2 className="text-lg md:text-xl font-intrinseca text-[#fbf9f7] font-semibold mb-3">
                  {t(`cookies.section.${num}.title` as TranslationKey)}
                </h2>
                <p className="text-sm text-[#fbf9f7]/70 leading-relaxed whitespace-pre-line">
                  {t(`cookies.section.${num}.text` as TranslationKey)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
