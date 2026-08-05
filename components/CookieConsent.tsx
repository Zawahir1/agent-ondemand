"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Settings, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieConsent() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay to make it feel premium
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setVisible(false);
  };

  const handleDeclineAll = () => {
    const preferences = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    const preferences = { essential: true, analytics, marketing };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 rounded-3xl p-6 border border-[#00ff66]/15 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl bg-[#020d06]/90 text-[#fbf9f7] overflow-hidden"
        >
          {/* Subtle radial ambient glow in card */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ff66]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#00ff66]" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm tracking-tight text-[#fbf9f7]">
                  {t("cookies.title")}
                </h3>
              </div>
              <button
                onClick={handleDeclineAll}
                className="text-[#fbf9f7]/40 hover:text-[#fbf9f7] transition-colors p-1.5 rounded-lg hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!showSettings ? (
              <>
                <p className="text-xs text-[#fbf9f7]/65 leading-relaxed mb-6">
                  {t("cookie.banner.text" as TranslationKey)}{" "}
                  <Link
                    href={`/${currentLocale}/cookies`}
                    className="text-[#00ff66] underline hover:text-[#33ff85] transition-colors"
                  >
                    {t("cookies.title")}
                  </Link>
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00ff66] to-[#00cc52] text-black font-semibold text-xs hover:from-[#33ff85] hover:to-[#00b347] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:scale-[1.01] active:scale-95 cursor-pointer border-none outline-none"
                  >
                    {t("cookie.banner.accept" as TranslationKey)}
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleDeclineAll}
                      className="py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#fbf9f7]/80 hover:bg-white/10 hover:border-white/15 transition-all cursor-pointer"
                    >
                      {t("cookie.banner.decline" as TranslationKey)}
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#fbf9f7]/80 hover:bg-white/10 hover:border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Settings className="w-3.5 h-3.5" />
                      {t("cookie.banner.settings" as TranslationKey)}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {/* Scrollable container for items */}
                <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                  {/* Essential */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-start gap-3">
                    <div className="flex-1 text-left">
                      <h4 className="text-xs font-semibold text-[#fbf9f7]">
                        {t("cookie.banner.essential.title" as TranslationKey)}
                      </h4>
                      <p className="text-[10px] text-[#fbf9f7]/50 mt-0.5 leading-normal">
                        {t("cookie.banner.essential.desc" as TranslationKey)}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#00ff66] font-semibold bg-[#00ff66]/10 px-2 py-0.5 rounded-full border border-[#00ff66]/20">
                      Required
                    </span>
                  </div>

                  {/* Analytics */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-start justify-between gap-3">
                    <div className="flex-1 text-left">
                      <h4 className="text-xs font-semibold text-[#fbf9f7]">
                        {t("cookie.banner.analytics.title" as TranslationKey)}
                      </h4>
                      <p className="text-[10px] text-[#fbf9f7]/50 mt-0.5 leading-normal">
                        {t("cookie.banner.analytics.desc" as TranslationKey)}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#fbf9f7] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ff66]"></div>
                    </label>
                  </div>

                  {/* Marketing */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-start justify-between gap-3">
                    <div className="flex-1 text-left">
                      <h4 className="text-xs font-semibold text-[#fbf9f7]">
                        {t("cookie.banner.marketing.title" as TranslationKey)}
                      </h4>
                      <p className="text-[10px] text-[#fbf9f7]/50 mt-0.5 leading-normal">
                        {t("cookie.banner.marketing.desc" as TranslationKey)}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={marketing}
                        onChange={(e) => setMarketing(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#fbf9f7] after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ff66]"></div>
                    </label>
                  </div>
                </div>

                {/* Back / Save row */}
                <div className="flex gap-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#fbf9f7]/70 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 py-3 rounded-xl bg-[#00ff66] text-black font-semibold text-xs hover:bg-[#33ff85] transition-all cursor-pointer border-none outline-none"
                  >
                    {t("cookie.banner.save" as TranslationKey)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
