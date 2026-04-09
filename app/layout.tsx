import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL('https://agent-ondemand.com'),
  title: "Agent on Demand — Agenti Vocali AI per Aziende | Risposte 24/7",
  description: "Automatizza chiamate inbound e outbound con agenti vocali AI intelligenti. Sempre attivi, risposte in meno di 3 secondi, supporto multilingua. Prova una demo.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agent on Demand",
  "url": "https://agent-ondemand.com",
  "logo": "https://agent-ondemand.com/logo-bw.png",
  "description": "Piattaforma italiana di agenti vocali AI per automatizzare chiamate inbound e outbound.",
  "sameAs": [
    "https://salesondemand.it"
  ],
  "inLanguage": "it-IT"
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-798735486"></Script>
        <Script>
          {
            `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-798735486');
            `
          }
        </Script>
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`} suppressHydrationWarning>
        <SessionProvider basePath="/auth">
          {children}
        </SessionProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}