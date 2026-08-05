import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import { isValidLocale, buildAlternates, LOCALES, type Locale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const alternates = buildAlternates("");

  return {
    alternates: {
      canonical: `https://www.agent-ondemand.com/${locale}`,
      languages: alternates.languages as Record<string, string>,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X0KQTBKPKL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X0KQTBKPKL');
        `}
      </Script>
      <LanguageProvider initialLocale={locale as Locale}>
        {children}
        <CookieConsent />
      </LanguageProvider>
    </>
  );
}
