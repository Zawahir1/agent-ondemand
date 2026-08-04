import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <LanguageProvider>
        {children}
        <CookieConsent />
      </LanguageProvider>
    </>
  );
}
