"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/locales/translations";
import { useRouter, usePathname } from "next/navigation";

export type Language = "en" | "it" | "es" | "fr" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
  blogTranslations: Record<Language, string> | null;
  registerBlogTranslations: (translations: Record<Language, string> | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [blogTranslations, setBlogTranslations] = useState<Record<Language, string> | null>(null);
  
  const router = useRouter();
  const pathname = usePathname();

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && ["en", "it", "es", "fr", "de"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const registerBlogTranslations = (translations: Record<Language, string> | null) => {
    setBlogTranslations(translations);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    // If we are currently reading an article, handle translation mapping redirect
    if (pathname && pathname.startsWith("/blog/")) {
      if (blogTranslations && blogTranslations[lang]) {
        router.push(blogTranslations[lang]);
      } else {
        // Fallback: Redirect to blog index if no translation is available
        router.push("/blog");
      }
    }
  };

  const t = (key: TranslationKey, fallback?: string): string => {
    const translation = (translations[language] as Record<string, string>)[key] || (translations["en"] as Record<string, string>)[key];
    return translation || fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        blogTranslations,
        registerBlogTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
