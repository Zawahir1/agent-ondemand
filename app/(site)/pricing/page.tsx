"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function PricingPage() {
  const { t } = useLanguage();

  const plan = {
    name: t("pricing.plan.standard.name" as TranslationKey),
    price: t("pricing.plan.standard.price" as TranslationKey),
    period: t("pricing.plan.standard.period" as TranslationKey),
    description: t("pricing.plan.standard.desc" as TranslationKey),
    onboarding: t("pricing.plan.standard.onboarding" as TranslationKey),
    features: [
      t("pricing.plan.standard.feat.minutes" as TranslationKey),
      t("pricing.plan.standard.feat.answering" as TranslationKey),
      t("pricing.plan.standard.feat.calendar" as TranslationKey),
      t("pricing.plan.standard.feat.leads" as TranslationKey),
      t("pricing.plan.standard.feat.transfer" as TranslationKey),
      t("pricing.plan.standard.feat.languages" as TranslationKey),
      t("pricing.plan.standard.feat.integrations" as TranslationKey),
      t("pricing.plan.standard.feat.support" as TranslationKey),
    ],
    cta: t("pricing.plan.standard.cta" as TranslationKey),
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Agent On Demand",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "AI Call Agent / AI Receptionist Software",
    "operatingSystem": "Web",
    "url": "https://www.agent-ondemand.com/pricing",
    "brand": { "@id": "https://www.agent-ondemand.com/#organization" },
    "description": "AI call agent plans for businesses that need 24/7 call answering, outbound calling, appointment booking, and lead qualification.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Standard AI Call Agent Plan",
        "price": "150",
        "priceCurrency": "EUR",
        "priceValidUntil": "2026-12-31",
        "url": "https://www.agent-ondemand.com/pricing",
        "availability": "https://schema.org/InStock",
        "description": "300 minutes of AI calling time per month, all features included: 24/7 inbound/outbound calls, appointment booking, custom lead qualification, live call transfer, 30+ languages support, CRM integrations, and €200 onboarding fee."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("pricing.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("pricing.meta.desc" as TranslationKey)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#00ff66]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              {t("pricing.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("pricing.title")}
            </h1>
            <p className="text-lg md:text-xl text-[#fbf9f7]/55 max-w-2xl mx-auto leading-relaxed">
              {t("pricing.subtext")}
            </p>
          </div>

          {/* Single Standard Plan Centered Card */}
          <div className="max-w-4xl mx-auto">
            {/* Premium outer card border wrapper */}
            <div className="relative p-0.5 rounded-[2.5rem] bg-gradient-to-b from-[#00ff66]/15 via-white/5 to-[#00ff66]/5 shadow-[0_0_50px_rgba(0,255,102,0.03)]">
              <div 
                className="rounded-[2.4rem] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row gap-10 justify-between items-stretch bg-[#000502]/85 backdrop-blur-3xl relative overflow-hidden group"
              >
                {/* Visual badge top right */}
                <div className="absolute top-4 right-4 bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                  All-In-One
                </div>

                {/* Left side: Price and description */}
                <div className="flex-1 flex flex-col justify-between space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold font-intrinseca text-white mb-3">{plan.name}</h2>
                    <p className="text-sm text-[#fbf9f7]/50 leading-relaxed mb-6">{plan.description}</p>
                    
                    <div className="flex items-end gap-1.5 mb-4">
                      <span className="text-6xl md:text-7xl font-intrinseca font-bold text-white tracking-tight">{plan.price}</span>
                      <span className="text-[#fbf9f7]/40 text-lg mb-2">{plan.period}</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                      {plan.onboarding}
                    </div>
                  </div>

                  <button
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00ff66] to-[#00cc52] text-black font-bold text-sm tracking-wide transition-all shadow-[0_4px_25px_rgba(0,255,102,0.25)] hover:from-[#33ff85] hover:to-[#00b347] hover:scale-[1.02] cursor-pointer"
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Vertical Divider for desktop */}
                <div className="hidden md:block w-px bg-white/5 self-stretch" />

                {/* Right side: Features checklist */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-5 tracking-widest">What's Included:</h3>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3.5 text-sm text-[#fbf9f7]/85 ${idx === 0 ? "font-bold text-[#00ff66]" : ""}`}>
                        <Check className="w-4 h-4 text-[#00ff66] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-[#fbf9f7]/30 mt-12">
            {t("pricing.note")}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
