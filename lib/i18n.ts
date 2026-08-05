import { translations, TranslationKey } from "@/locales/translations";

export const LOCALES = ["en", "it", "es", "fr", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}

/** Server-side t() — call with the locale from route params */
export function getTranslator(locale: Locale) {
  return function t(key: TranslationKey, fallback?: string): string {
    const dict = translations[locale] as Record<string, string>;
    const enDict = translations["en"] as Record<string, string>;
    return dict?.[key] || enDict?.[key] || fallback || key;
  };
}

export const BASE_URL = "https://www.agent-ondemand.com";

/** Generate hreflang alternates for generateMetadata */
export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  }
  return {
    canonical: `${BASE_URL}/en${path}`,
    languages,
  };
}
