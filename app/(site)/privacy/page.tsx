"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function PrivacyPage() {
  const { t } = useLanguage();

  // Create an array of 15 sections to map over
  const sections = Array.from({ length: 15 }, (_, i) => i + 1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://www.agent-ondemand.com/privacy",
    "isPartOf": { "@id": "https://www.agent-ondemand.com/#website" },
    "about": "How Agent On Demand's AI call agent collects, processes, stores, and protects personal data of website visitors, callers, and customers.",
    "publisher": { "@id": "https://www.agent-ondemand.com/#organization" }
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("privacy.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("privacy.meta.desc" as TranslationKey)} />
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
              <Shield className="w-3.5 h-3.5" /> Privacy
            </div>
            <h1 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("privacy.title" as TranslationKey)}
            </h1>
            <p className="text-md md:text-lg text-[#fbf9f7]/60 max-w-2xl mx-auto leading-relaxed">
              {t("privacy.subtitle" as TranslationKey)}
            </p>
          </div>

          {/* Intro welcome blocks */}
          <div className="rounded-3xl p-8 md:p-10 border border-emerald-800/30 bg-[linear-gradient(135deg,#03180c_0%,#010703_100%)] shadow-[0_12px_45px_rgba(0,0,0,0.6)] mb-12 space-y-4">
            <p className="text-sm md:text-base text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("privacy.intro.welcome" as TranslationKey)}
            </p>
            <p className="text-sm md:text-base text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("privacy.intro.agreement" as TranslationKey)}
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
                  {t(`privacy.section.${num}.title` as TranslationKey)}
                </h2>
                <p className="text-sm text-[#fbf9f7]/70 leading-relaxed whitespace-pre-line">
                  {t(`privacy.section.${num}.text` as TranslationKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Acknowledgment Card */}
          <div className="rounded-2xl p-6 md:p-8 border border-emerald-500/20 bg-emerald-950/10 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] shrink-0 mt-0.5">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm text-[#fbf9f7]/85 font-medium leading-relaxed">
              {t("privacy.ack" as TranslationKey)}
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
