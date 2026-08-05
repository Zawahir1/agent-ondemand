"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/locales/translations";
import { useRouter, usePathname } from "next/navigation";
import { LOCALES, Locale } from "@/lib/i18n";

export type Language = Locale;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, fallback?: string) => string;
  blogTranslations: Record<Language, string> | null;
  registerBlogTranslations: (translations: Record<Language, string> | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  /** Initial locale from the [locale] route segment (server-side) */
  initialLocale: Language;
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLocale);
  const [blogTranslations, setBlogTranslations] = useState<Record<Language, string> | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  // Sync html lang attribute with locale
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const registerBlogTranslations = (translations: Record<Language, string> | null) => {
    setBlogTranslations(translations);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Update cookie so middleware remembers preference
    document.cookie = `NEXT_LOCALE=${lang}; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`;

    if (pathname) {
      // Check if on a blog article with a translation mapping
      const blogSlugMatch = pathname.match(/^\/(en|it|es|fr|de)\/blog\/(.+)$/);
      if (blogSlugMatch) {
        if (blogTranslations && blogTranslations[lang]) {
          // Navigate to the translated article
          router.push(blogTranslations[lang]);
        } else {
          // No translation available — go to blog listing in new locale
          router.push(`/${lang}/blog`);
        }
        return;
      }

      // For all other pages: replace the locale segment in the current URL
      const pathWithoutLocale = pathname.replace(/^\/(en|it|es|fr|de)/, "") || "/";
      router.push(`/${lang}${pathWithoutLocale}`);
    }
  };

  const t = (key: TranslationKey, fallback?: string): string => {
    const translation = (translations[language] as Record<string, string>)[key]
      || (translations["en"] as Record<string, string>)[key];
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
