"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, Lock, Users, Globe, UserCheck, CalendarDays, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function DPAPage() {
  const { t } = useLanguage();

  const dataTypes = [
    t("dpa.types.item.names" as TranslationKey),
    t("dpa.types.item.emails" as TranslationKey),
    t("dpa.types.item.phones" as TranslationKey),
    t("dpa.types.item.business" as TranslationKey),
    t("dpa.types.item.comms" as TranslationKey),
    t("dpa.types.item.recordings" as TranslationKey),
    t("dpa.types.item.transcripts" as TranslationKey),
    t("dpa.types.item.appointments" as TranslationKey),
    t("dpa.types.item.crm" as TranslationKey),
  ];

  const processingPurposes = [
    t("dpa.purpose.item.services" as TranslationKey),
    t("dpa.purpose.item.route" as TranslationKey),
    t("dpa.purpose.item.schedule" as TranslationKey),
    t("dpa.purpose.item.maintain" as TranslationKey),
    t("dpa.purpose.item.analytics" as TranslationKey),
    t("dpa.purpose.item.improve" as TranslationKey),
  ];

  const additionalSections = [
    {
      title: t("dpa.security.title" as TranslationKey),
      text: t("dpa.security.text" as TranslationKey),
      icon: Lock,
    },
    {
      title: t("dpa.subprocessors.title" as TranslationKey),
      text: t("dpa.subprocessors.text" as TranslationKey),
      icon: Users,
    },
    {
      title: t("dpa.transfers.title" as TranslationKey),
      text: t("dpa.transfers.text" as TranslationKey),
      icon: Globe,
    },
    {
      title: t("dpa.rights.title" as TranslationKey),
      text: t("dpa.rights.text" as TranslationKey),
      icon: UserCheck,
    },
    {
      title: t("dpa.retention.title" as TranslationKey),
      text: t("dpa.retention.text" as TranslationKey),
      icon: CalendarDays,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Processing Addendum",
    "url": "https://www.agent-ondemand.com/dpa",
    "isPartOf": { "@id": "https://www.agent-ondemand.com/#website" },
    "about": "Data processing terms governing how Agent On Demand's AI call agent handles customer and end-user data as a data processor.",
    "publisher": { "@id": "https://www.agent-ondemand.com/#organization" }
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("dpa.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("dpa.meta.desc" as TranslationKey)} />
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
              <Shield className="w-3.5 h-3.5" /> DPA
            </div>
            <h1 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("dpa.title" as TranslationKey)}
            </h1>
            <p className="text-md md:text-lg text-[#fbf9f7]/60 max-w-2xl mx-auto leading-relaxed">
              {t("dpa.subtitle" as TranslationKey)}
            </p>
          </div>

          {/* Agreement Intro Card */}
          <div className="rounded-3xl p-8 md:p-10 border border-emerald-800/30 bg-[linear-gradient(135deg,#03180c_0%,#010703_100%)] shadow-[0_12px_45px_rgba(0,0,0,0.6)] mb-12">
            <p className="text-base md:text-lg text-[#fbf9f7]/85 leading-relaxed font-medium">
              {t("dpa.agreement" as TranslationKey)}
            </p>
          </div>

          {/* Scope and Types of Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Scope Block */}
            <div className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300">
              <h2 className="text-xl font-intrinseca text-[#fbf9f7] mb-4 font-semibold">
                {t("dpa.scope.title" as TranslationKey)}
              </h2>
              <p className="text-sm text-[#fbf9f7]/70 leading-relaxed">
                {t("dpa.scope.text" as TranslationKey)}
              </p>
            </div>

            {/* Types of Data Block */}
            <div className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300">
              <h2 className="text-xl font-intrinseca text-[#fbf9f7] mb-4 font-semibold">
                {t("dpa.types.title" as TranslationKey)}
              </h2>
              <p className="text-xs text-[#fbf9f7]/40 uppercase tracking-wider font-semibold mb-4">
                {t("dpa.types.intro" as TranslationKey)}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {dataTypes.map((type, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm text-[#fbf9f7]/75">
                    <div className="w-5 h-5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00ff66]" />
                    </div>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purpose of Processing Block */}
          <div className="rounded-2xl p-8 md:p-10 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 mb-12">
            <h2 className="text-2xl font-intrinseca text-[#fbf9f7] mb-4 font-semibold">
              {t("dpa.purpose.title" as TranslationKey)}
            </h2>
            <p className="text-xs text-[#fbf9f7]/40 uppercase tracking-wider font-semibold mb-6">
              {t("dpa.purpose.intro" as TranslationKey)}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {processingPurposes.map((purpose, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#fbf9f7]/80">
                  <div className="w-5 h-5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#00ff66]" />
                  </div>
                  <span>{purpose}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mb-12">
            {additionalSections.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <div key={i} className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-intrinseca text-[#fbf9f7] font-semibold">{sec.title}</h2>
                    <p className="text-sm text-[#fbf9f7]/70 leading-relaxed">{sec.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Block */}
          <div className="rounded-2xl p-8 border border-white/8 bg-black/40 hover:border-emerald-500/20 transition-all duration-300 flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-intrinseca text-[#fbf9f7] font-semibold">{t("dpa.contact.title" as TranslationKey)}</h2>
              <p className="text-sm text-[#fbf9f7]/70">{t("dpa.contact.text" as TranslationKey)}</p>
              <div className="text-sm text-[#fbf9f7]/90 font-medium space-y-1">
                <p>{t("dpa.contact.name" as TranslationKey)}</p>
                <p>{t("dpa.contact.email" as TranslationKey)}</p>
                <a 
                  href="https://www.agent-ondemand.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff66] hover:underline"
                >
                  {t("dpa.contact.website" as TranslationKey)}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
