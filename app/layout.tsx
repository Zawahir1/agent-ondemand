import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Call Agent for Business Calls | Agent On Demand",
  description: "Agent On Demand is an AI call agent that answers every business call, books appointments, and qualifies leads 24/7 in 30+ languages. Book a demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-black scroll-smooth"
    >
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
      <body className="min-h-full flex flex-col bg-black text-[#fbf9f7]">
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
