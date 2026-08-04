"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Demo",
    "url": "https://www.agent-ondemand.com/contact",
    "about": { "@id": "https://www.agent-ondemand.com/#software" },
    "mainEntity": {
      "@type": "Organization",
      "name": "Agent On Demand",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-888-321-4321",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Italian"]
      }
    }
  };

  return (
    <main className="min-h-screen bg-transparent">
      <title>{t("contact.meta.title" as TranslationKey)}</title>
      <meta name="description" content={t("contact.meta.desc" as TranslationKey)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00ff66]/10 to-transparent blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              {t("contact.badge")}
            </div>
            <h1 className="text-5xl md:text-7xl font-intrinseca text-[#fbf9f7] mb-6 tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-[#fbf9f7]/55 max-w-xl mx-auto leading-relaxed">
              {t("contact.subtext")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left info panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div
                className="rounded-2xl p-8 border border-emerald-800/30 flex-1 shadow-[0_12px_45px_rgba(0,0,0,0.6)]"
                style={{ background: "linear-gradient(135deg, #03180c 0%, #010703 100%)" }}
              >
                <h2 className="text-xl font-intrinseca text-[#fbf9f7] mb-6 font-medium">{t("contact.expect.title")}</h2>
                <ul className="space-y-4">
                  {[
                    t("contact.expect.item1"),
                    t("contact.expect.item2"),
                    t("contact.expect.item3"),
                    t("contact.expect.item4"),
                    t("contact.expect.item5"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#fbf9f7]/75">
                      <Check className="w-4 h-4 text-[#00ff66] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 border border-white/8 space-y-4" style={{ background: "linear-gradient(135deg, #021207 0%, #000000 100%)" }}>
                <div className="flex items-center gap-3 text-sm text-[#fbf9f7]/60">
                  <Mail className="w-4 h-4 text-[#00ff66] shrink-0" />
                  marco.ferrario@agent-ondemand.com
                </div>
                <div className="flex items-center gap-3 text-sm text-[#fbf9f7]/60">
                  <Phone className="w-4 h-4 text-[#00ff66] shrink-0" />
                  +1-888-321-4321
                </div>
                <div className="flex items-center gap-3 text-sm text-[#fbf9f7]/60">
                  <MapPin className="w-4 h-4 text-[#00ff66] shrink-0" />
                  Worldwide / Remote
                </div>
              </div>
            </div>

            {/* Right form */}
            <div
              className="lg:col-span-3 rounded-2xl p-8 md:p-10 border border-emerald-800/30 shadow-[0_12px_45px_rgba(0,0,0,0.6)]"
              style={{ background: "linear-gradient(135deg, #03180c 0%, #010703 100%)" }}
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,102,0.2)]">
                    <Check className="w-8 h-8 text-[#00ff66]" />
                  </div>
                  <h3 className="text-2xl font-intrinseca text-[#fbf9f7] mb-3">{t("contact.success.title")}</h3>
                  <p className="text-[#fbf9f7]/55 text-sm max-w-xs">{t("contact.success.desc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-intrinseca text-[#fbf9f7] mb-6 font-medium">{t("contact.form.title")}</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#fbf9f7]/50 uppercase tracking-wider mb-2">{t("contact.form.name")}</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[#fbf9f7] placeholder-[#fbf9f7]/25 focus:outline-none focus:border-[#00ff66]/50 focus:ring-1 focus:ring-[#00ff66]/30 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#fbf9f7]/50 uppercase tracking-wider mb-2">{t("contact.form.email")}</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[#fbf9f7] placeholder-[#fbf9f7]/25 focus:outline-none focus:border-[#00ff66]/50 focus:ring-1 focus:ring-[#00ff66]/30 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#fbf9f7]/50 uppercase tracking-wider mb-2">{t("contact.form.company")}</label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[#fbf9f7] placeholder-[#fbf9f7]/25 focus:outline-none focus:border-[#00ff66]/50 focus:ring-1 focus:ring-[#00ff66]/30 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#fbf9f7]/50 uppercase tracking-wider mb-2">{t("contact.form.challenge")}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t("contact.form.placeholder.challenge" as TranslationKey)}
                      rows={4}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-[#fbf9f7] placeholder-[#fbf9f7]/25 focus:outline-none focus:border-[#00ff66]/50 focus:ring-1 focus:ring-[#00ff66]/30 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ff66] to-[#00cc52] text-black py-4 rounded-2xl font-semibold text-sm hover:from-[#33ff85] hover:to-[#00b347] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(0,255,102,0.3)] cursor-pointer border-none outline-none"
                  >
                    {t("contact.form.btn")} <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-[#fbf9f7]/30">
                    {t("contact.form.agree")}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
