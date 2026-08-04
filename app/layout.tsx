import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Call Agent for Business Calls | Agent On Demand",
  description:
    "Agent On Demand is an AI call agent that answers every business call, books appointments, and qualifies leads 24/7 in 30+ languages. Book a demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased bg-black scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-[#fbf9f7]">
        {children}
      </body>
    </html>
  );
}
