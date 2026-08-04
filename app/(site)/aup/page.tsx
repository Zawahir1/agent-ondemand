"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ShieldAlert, Ban, Info, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function AUPPage() {
  const { t } = useLanguage();

  const prohibitedActions = [
    t("aup.prohibited.item.law" as TranslationKey),
    t("aup.prohibited.item.fraud" as TranslationKey),
    t("aup.prohibited.item.harass" as TranslationKey),
    t("aup.prohibited.item.malware" as TranslationKey),
    t("aup.prohibited.item.marketing" as TranslationKey),
    t("aup.prohibited.item.ip" as TranslationKey),
    t("aup.prohibited.item.content" as TranslationKey),
    t("aup.prohibited.item.access" as TranslationKey),
    t("aup.prohibited.item.interfere" as TranslationKey),
    t("aup.prohibited.item.impersonate" as TranslationKey),
  ];

  const aiVoiceResponsibilities = [
    t("aup.calls.item.consent" as TranslationKey),
    t("aup.calls.item.laws" as TranslationKey),
    t("aup.calls.item.lawful" as TranslationKey),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Acceptable Use Policy",
    "url": "https://www.agent-ondemand.com/aup",
    "isPartOf": { "@id": "https://www.agent-ondemand.com/#website" },
    "about": "Rules governing permitted and prohibited use of the Agent On Demand AI call agent, including outbound calling and messaging conduct.",
    "publisher": { "@id": "https://www.agent-ondemand.com/#organization" }
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("aup.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("aup.meta.desc" as TranslationKey)} />
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
              <ShieldAlert className="w-3.5 h-3.5" /> AUP
            </div>
            <h1 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("aup.title" as TranslationKey)}
            </h1>
            <p className="text-md md:text-lg text-[#fbf9f7]/60 max-w-2xl mx-auto leading-relaxed">
              {t("aup.subtitle" as TranslationKey)}
            </p>
          </div>

          {/* Intro Card */}
          <div className="rounded-3xl p-8 md:p-10 border border-emerald-800/30 bg-[linear-gradient(135deg,#03180c_0%,#010703_100%)] shadow-[0_12px_45px_rgba(0,0,0,0.6)] mb-12">
            <p className="text-base md:text-lg text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("aup.intro" as TranslationKey)}
            </p>
          </div>

          {/* Prohibited Actions Block */}
          <div className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 mb-12">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <Ban className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-intrinseca text-[#fbf9f7] font-semibold">
                  {t("aup.prohibited.title" as TranslationKey)}
                </h2>
                <p className="text-xs text-[#fbf9f7]/40 uppercase tracking-wider font-semibold mt-0.5">
                  {t("aup.prohibited.intro" as TranslationKey)}
                </p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {prohibitedActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#fbf9f7]/80">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-red-400 font-bold">{index + 1}</span>
                  </div>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Voice Calls Block */}
          <div className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 mb-12">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66]">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-intrinseca text-[#fbf9f7] font-semibold">
                  {t("aup.calls.title" as TranslationKey)}
                </h2>
                <p className="text-xs text-[#fbf9f7]/40 uppercase tracking-wider font-semibold mt-0.5">
                  {t("aup.calls.intro" as TranslationKey)}
                </p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {aiVoiceResponsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#fbf9f7]/80">
                  <div className="w-5 h-5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#00ff66]" />
                  </div>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enforcement Block */}
          <div className="rounded-2xl p-8 md:p-10 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-intrinseca text-[#fbf9f7] font-semibold">
                {t("aup.enforcement.title" as TranslationKey)}
              </h2>
              <p className="text-sm text-[#fbf9f7]/70 leading-relaxed">
                {t("aup.enforcement.text1" as TranslationKey)}
              </p>
              <p className="text-sm text-[#fbf9f7]/70 leading-relaxed">
                {t("aup.enforcement.text2" as TranslationKey)}
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
