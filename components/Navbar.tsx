"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Users, BarChart3, BookOpen, HelpCircle, Newspaper, ArrowRight, Building2, Rocket, PhoneCall, Send, Home, Car, Dumbbell, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Language } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

// ─── Inline SVG Flags for visual excellence on Windows ────────
const GBFlag = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full border border-white/10 shrink-0">
    <circle cx="12" cy="12" r="12" fill="#00247D" />
    <path d="M0,0 L24,24 M0,24 L24,0" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M0,0 L24,24 M0,24 L24,0" stroke="#CF142B" strokeWidth="1.5" />
    <path d="M12,0 L12,24 M0,12 L24,12" stroke="#FFFFFF" strokeWidth="4.5" />
    <path d="M12,0 L12,24 M0,12 L24,12" stroke="#CF142B" strokeWidth="2.5" />
  </svg>
);

const ITFlag = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full border border-white/10 overflow-hidden shrink-0">
    <rect x="0" y="0" width="8" height="24" fill="#009246" />
    <rect x="8" y="0" width="8" height="24" fill="#F1F2F1" />
    <rect x="16" y="0" width="8" height="24" fill="#CE2B37" />
  </svg>
);

const ESFlag = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full border border-white/10 overflow-hidden shrink-0">
    <rect x="0" y="0" width="24" height="6" fill="#AD1519" />
    <rect x="0" y="6" width="24" height="12" fill="#FCD116" />
    <rect x="0" y="18" width="24" height="6" fill="#AD1519" />
    <circle cx="7" cy="12" r="1.5" fill="#AD1519" />
  </svg>
);

const FRFlag = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full border border-white/10 overflow-hidden shrink-0">
    <rect x="0" y="0" width="8" height="24" fill="#002395" />
    <rect x="8" y="0" width="8" height="24" fill="#FFFFFF" />
    <rect x="16" y="0" width="8" height="24" fill="#ED2939" />
  </svg>
);

const DEFlag = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full border border-white/10 overflow-hidden shrink-0">
    <rect x="0" y="0" width="24" height="8" fill="#000000" />
    <rect x="0" y="8" width="24" height="8" fill="#DD0000" />
    <rect x="0" y="16" width="24" height="8" fill="#FFCC00" />
  </svg>
);

const languages = [
  { code: "en" as const, name: "English", abbrev: "EN", flag: <GBFlag /> },
  { code: "it" as const, name: "Italiano", abbrev: "IT", flag: <ITFlag /> },
  { code: "es" as const, name: "Español", abbrev: "ES", flag: <ESFlag /> },
  { code: "fr" as const, name: "Français", abbrev: "FR", flag: <FRFlag /> },
  { code: "de" as const, name: "Deutsch", abbrev: "DE", flag: <DEFlag /> },
];

const navItems = [
  {
    name: "Product",
    hasDropdown: true,
    dropdown: [
      { icon: PhoneCall, label: "AI Receptionist", desc: "Answer incoming calls 24/7 automatically", href: "/receptionist", labelKey: "nav.product.receptionist", descKey: "nav.product.receptionist.desc" },
      { icon: Send, label: "AI Outbound Calling", desc: "Proactive campaign dialing that converts", href: "/outbound", labelKey: "nav.product.outbound", descKey: "nav.product.outbound.desc" },
      { icon: Home, label: "Real Estate AI Agent", desc: "Automate lead capture and home showings", href: "/real-estate", labelKey: "nav.product.realestate", descKey: "nav.product.realestate.desc" },
      { icon: Car, label: "Automotive AI Agent", desc: "Qualify buyers and book service bays", href: "/automotive", labelKey: "nav.product.automotive", descKey: "nav.product.automotive.desc" },
      { icon: Dumbbell, label: "Gym & Fitness AI Agent", desc: "Manage gym calls and class schedules", href: "/gym", labelKey: "nav.product.gym", descKey: "nav.product.gym.desc" },
    ],
  },
  {
    name: "Pricing",
    hasDropdown: false,
    href: "/pricing",
  },
  {
    name: "BookDemo",
    hasDropdown: false,
    href: "/contact",
  },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState<"login" | "signup">("login");
  const pathname = usePathname();

  const activeLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#020d06]/85 border-b border-[#00ff66]/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      onMouseLeave={() => {
        setActiveDropdown(null);
        setLangDropdownOpen(false);
      }}
    >
      <div className="mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <img 
            src="/images/Agent on demand.png" 
            alt="Agent On Demand" 
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const translationKey = `nav.${item.name.toLowerCase()}` as TranslationKey;
            const itemLabel = t(translationKey, item.name);

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center text-sm font-medium text-[#fbf9f7]/70 hover:text-[#fbf9f7] transition-colors">
                    {itemLabel}
                    <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[#00ff66]"
                        : "text-[#fbf9f7]/70 hover:text-[#fbf9f7]"
                    }`}
                  >
                    {itemLabel}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.hasDropdown && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[320px] bg-[#020d06]/98 backdrop-blur-2xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.7)] border border-[#00ff66]/15 p-3"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {item.dropdown.map((dropItem) => {
                          const translatedLabel = dropItem.labelKey ? t(dropItem.labelKey as TranslationKey, dropItem.label) : dropItem.label;
                          const translatedDesc = dropItem.descKey ? t(dropItem.descKey as TranslationKey, dropItem.desc) : dropItem.desc;

                          return (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-950/30 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-[#00ff66]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00ff66]/25 transition-colors mt-0.5">
                                <dropItem.icon className="w-4 h-4 text-[#00ff66]" />
                              </div>
                              <div className="text-left">
                                <h4 className="text-sm font-semibold text-[#fbf9f7] group-hover:text-[#00ff66] transition-colors">{translatedLabel}</h4>
                                <p className="text-xs text-[#fbf9f7]/45 mt-0.5">{translatedDesc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Side CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Language Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button className="flex items-center gap-2 text-sm font-medium text-[#fbf9f7]/70 hover:text-[#fbf9f7] transition-colors py-2 cursor-pointer">
              {activeLang.flag}
              <span>{activeLang.abbrev}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-[160px] bg-[#020d06]/98 backdrop-blur-2xl rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-[#00ff66]/15 p-2 z-50"
                >
                  <div className="flex flex-col gap-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-emerald-950/40 hover:text-[#00ff66] cursor-pointer ${
                          language === lang.code
                            ? "text-[#00ff66] bg-emerald-950/20"
                            : "text-[#fbf9f7]/75"
                        }`}
                      >
                        {lang.flag}
                        <span>{lang.name}</span>
                        <span className="ml-auto opacity-40 text-[10px]">{lang.abbrev}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <button
            onClick={() => {
              setAuthModalType("login");
              setIsAuthModalOpen(true);
            }}
            className="text-sm font-medium text-[#fbf9f7]/70 hover:text-[#fbf9f7] transition-colors cursor-pointer bg-transparent border-none outline-none"
          >
            {t("nav.login")}
          </button>
          <button
            onClick={() => {
              setAuthModalType("signup");
              setIsAuthModalOpen(true);
            }}
            className="flex items-center text-sm font-bold bg-[#00ff66] text-black px-5 py-2.5 rounded-full hover:bg-[#00dd55] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,102,0.15)] cursor-pointer border-none outline-none"
          >
            {t("nav.startTrial")}
          </button>
        </div>

      </div>
    </nav>
      {/* ── Auth Portal Modal ── */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-gradient-to-br from-emerald-950/20 to-black/95 border border-[#00ff66]/15 rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_rgba(0,255,102,0.15)] overflow-hidden z-10"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-[#00ff66]/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <span className="text-[10px] bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  {authModalType === "login" ? t("auth.welcomeBack") : t("auth.getStarted")}
                </span>
                <h3 className="text-3xl font-bold text-white font-intrinseca leading-tight">
                  {authModalType === "login" ? t("auth.selectPortal") : t("auth.selectProduct")}
                </h3>
                <p className="text-xs text-[#fbf9f7]/50 mt-2 max-w-xs mx-auto">
                  {t("auth.description")}
                </p>
              </div>

              {/* Selection Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Receptionist Option */}
                <div className="bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#00ff66]/40 hover:bg-emerald-950/10 hover:scale-[1.02] transition-all group">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/25 flex items-center justify-center text-[#00ff66] group-hover:bg-[#00ff66]/25 transition-colors">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#00ff66] transition-colors">{t("auth.receptionist")}</h4>
                      <p className="text-[11px] text-white/55 mt-1.5 leading-relaxed">
                        {t("auth.receptionist.desc")}
                      </p>
                    </div>
                  </div>
                  <a
                    href={
                      authModalType === "login"
                        ? "https://receptionist.agent-ondemand.com/login"
                        : "https://receptionist.agent-ondemand.com/signup"
                    }
                    className="w-full mt-6 py-3 px-4 rounded-xl bg-[#00ff66] hover:bg-[#00dd55] text-black font-bold text-xs tracking-wider uppercase text-center transition-all shadow-[0_4px_15px_rgba(0,255,102,0.15)] flex items-center justify-center cursor-pointer"
                  >
                    {authModalType === "login" ? t("auth.receptionist.btn.login") : t("auth.receptionist.btn.signup")}
                  </a>
                </div>

                {/* 2. Real Estate Option */}
                <div className="bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-[#00ff66]/40 hover:bg-emerald-950/10 hover:scale-[1.02] transition-all group">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/25 flex items-center justify-center text-[#00ff66] group-hover:bg-[#00ff66]/25 transition-colors">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#00ff66] transition-colors">{t("auth.realestate")}</h4>
                      <p className="text-[11px] text-white/55 mt-1.5 leading-relaxed">
                        {t("auth.realestate.desc")}
                      </p>
                    </div>
                  </div>
                  <a
                    href={
                      authModalType === "login"
                        ? "https://real-estate.agent-ondemand.com/login"
                        : "https://real-estate.agent-ondemand.com/signup"
                    }
                    className="w-full mt-6 py-3 px-4 rounded-xl bg-[#00ff66] hover:bg-[#00dd55] text-black font-bold text-xs tracking-wider uppercase text-center transition-all shadow-[0_4px_15px_rgba(0,255,102,0.15)] flex items-center justify-center cursor-pointer"
                  >
                    {authModalType === "login" ? t("auth.realestate.btn.login") : t("auth.realestate.btn.signup")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
