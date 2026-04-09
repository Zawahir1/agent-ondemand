'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import ContactSection from './ContactSection';
import Footer from './Footer';
import BackgroundGlow from './BackgroundGlow';
import LeadGenModal, { LeadData } from './LeadGenModal';
import ComparisonBlock from './ComparisonBlock';
import FeaturesBlock from './FeaturesBlock';
import FaqSection from './FaqSection';
import VideoSection from './VideoSection';
import LiveAgentCard from './LiveAgentCard';
import { firePhoneRevealConversion } from '@/lib/gtag';

interface PalestrePageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const palestreFaqs = [
  {
    question: "Come gestire le prenotazioni palestra con un agente vocale AI?",
    answer: "L'agente vocale AI risponde alle chiamate, verifica la disponibilità delle lezioni o degli slot di prova, fissa l'appuntamento in automatico e sincronizza tutto con il tuo calendario. I clienti possono prenotare 24/7, anche quando la reception è chiusa, senza perdere nessuna opportunità.",
  },
  {
    question: "Funziona per catene di palestre multi-sede?",
    answer: "Sì, è progettato specificamente per le catene. Ogni palestra ha il suo agente dedicato con configurazioni indipendenti (orari, corsi, prezzi locali), mentre dalla dashboard centrale puoi monitorare tutte le sedi in tempo reale, confrontare performance e gestire iscrizioni in modo uniforme.",
  },
  {
    question: "Può gestire iscrizioni e abbonamenti?",
    answer: "Sì, l'agente fornisce informazioni dettagliate su corsi, abbonamenti e promozioni attive, risponde alle domande dei potenziali clienti, qualifica il contatto e fissa un appuntamento con lo staff per chiudere l'iscrizione. Tutte le informazioni vengono inserite automaticamente nel tuo sistema gestionale.",
  },
  {
    question: "Si integra con il mio gestionale palestra?",
    answer: "Sì, l'agente vocale AI si integra con i principali gestionali palestra italiani. Riceve le chiamate dei tuoi clienti, controlla disponibilità di lezioni e corsi direttamente dal tuo gestionale, fissa prenotazioni in automatico e aggiorna il sistema in tempo reale. Se utilizzi un gestionale custom, il nostro team configura l'integrazione dedicata.",
  },
  {
    question: "Quanto costa un agente vocale per una palestra?",
    answer: "Il costo dipende dal volume di chiamate e dal numero di sedi. Per una singola palestra offriamo piani a partire da 100 minuti inclusi. Per le catene abbiamo piani dedicati che scalano con il numero di sedi. Contatta il nostro team per un preventivo personalizzato.",
  },
  {
    question: "In quanto tempo si attiva per una nuova sede?",
    answer: "L'attivazione di una nuova sede richiede pochi minuti dalla dashboard: basta caricare orari, corsi, prezzi e FAQ specifiche di quella palestra. L'agente sarà operativo e pronto a rispondere alle chiamate immediatamente. Per configurazioni complesse o integrazioni custom, il nostro team ti assiste.",
  },
  {
    question: "L'agente vocale AI sostituisce il mio gestionale palestra?",
    answer: "No, l'agente vocale AI lo completa. Il tuo gestionale gestisce iscritti, abbonamenti e contabilità; l'agente AI gestisce le chiamate e le richieste verbali, alimentando il gestionale con dati strutturati. Insieme automatizzano l'intera customer experience della palestra, dalla prima chiamata alla rinnovazione dell'abbonamento.",
  },
];

// ── "Per le catene" inline SVG map section ──────────────────────────────────
const ChainMapSection = () => (
  <section className="w-full max-w-[1400px] mx-auto px-4 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Text column */}
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-shore-blue font-mono text-sm tracking-wider uppercase mb-4 block">Espansione</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 leading-[1.1] mb-6">
            Creato appositamente<br />
            <span className="text-gray-500">per le catene.</span>
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg">
            Un'unica piattaforma per gestire tutte le sedi della tua catena. Ogni palestra riceve il suo agente dedicato, mentre tu mantieni il controllo centralizzato su prenotazioni, lead e performance.
          </p>
        </div>

        {/* 3 feature tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Multi-sede",
              desc: "Un agente dedicato per ogni palestra, con configurazioni indipendenti",
            },
            {
              title: "Controllo centralizzato",
              desc: "Dashboard unica per monitorare tutte le sedi in tempo reale",
            },
            {
              title: "Scalabile",
              desc: "Aggiungi nuove sedi in pochi minuti, senza riconfigurare tutto",
            },
          ].map((tile) => (
            <div
              key={tile.title}
              className="bg-white border border-gray-200 rounded-[20px] p-5 shadow-sm hover:border-gray-300 transition-colors"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">{tile.title}</p>
              <p className="text-gray-500 text-xs font-light leading-relaxed">{tile.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SVG map illustration */}
      <div className="relative w-full rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 shadow-xl shadow-black/5 flex items-center justify-center" style={{ minHeight: 400 }}>
        <svg
          viewBox="0 0 520 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Street grid — abstract city map */}
          {/* Horizontal streets */}
          <line x1="0" y1="80"  x2="520" y2="80"  stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="0" y1="140" x2="520" y2="140" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="0" y1="200" x2="520" y2="200" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="0" y1="260" x2="520" y2="260" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="0" y1="320" x2="520" y2="320" stroke="#e5e7eb" strokeWidth="1.5"/>
          {/* Vertical streets */}
          <line x1="80"  y1="0" x2="80"  y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="160" y1="0" x2="160" y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="240" y1="0" x2="240" y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="320" y1="0" x2="320" y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="400" y1="0" x2="400" y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>
          <line x1="480" y1="0" x2="480" y2="400" stroke="#e5e7eb" strokeWidth="1.5"/>

          {/* City blocks — soft rectangles */}
          <rect x="90"  y="90"  width="60" height="40" rx="4" fill="#f3f4f6"/>
          <rect x="90"  y="150" width="60" height="40" rx="4" fill="#f3f4f6"/>
          <rect x="170" y="90"  width="60" height="100" rx="4" fill="#f3f4f6"/>
          <rect x="250" y="150" width="60" height="40"  rx="4" fill="#f3f4f6"/>
          <rect x="250" y="210" width="60" height="40"  rx="4" fill="#f3f4f6"/>
          <rect x="330" y="90"  width="60" height="40"  rx="4" fill="#f3f4f6"/>
          <rect x="90"  y="210" width="60" height="100" rx="4" fill="#f3f4f6"/>
          <rect x="330" y="210" width="140" height="40" rx="4" fill="#f3f4f6"/>
          <rect x="410" y="90"  width="60" height="100" rx="4" fill="#f3f4f6"/>
          <rect x="170" y="270" width="140" height="40" rx="4" fill="#f3f4f6"/>
          <rect x="330" y="270" width="60" height="40"  rx="4" fill="#f3f4f6"/>

          {/* ── Location pin 1 — top-left area ── */}
          <g transform="translate(120, 100)">
            {/* Pin shadow */}
            <ellipse cx="0" cy="26" rx="8" ry="3" fill="#0055FF" opacity="0.15"/>
            {/* Pin body */}
            <path
              d="M0 -22 C-11 -22 -18 -13 -18 -4 C-18 8 0 26 0 26 C0 26 18 8 18 -4 C18 -13 11 -22 0 -22Z"
              fill="#0055FF"
            />
            {/* Pin inner circle */}
            <circle cx="0" cy="-4" r="6" fill="white"/>
          </g>

          {/* ── Location pin 2 — center ── */}
          <g transform="translate(280, 195)">
            <ellipse cx="0" cy="26" rx="8" ry="3" fill="#0055FF" opacity="0.15"/>
            <path
              d="M0 -22 C-11 -22 -18 -13 -18 -4 C-18 8 0 26 0 26 C0 26 18 8 18 -4 C18 -13 11 -22 0 -22Z"
              fill="#0055FF"
            />
            <circle cx="0" cy="-4" r="6" fill="white"/>
          </g>

          {/* ── Location pin 3 — bottom-right ── */}
          <g transform="translate(400, 295)">
            <ellipse cx="0" cy="26" rx="8" ry="3" fill="#0055FF" opacity="0.15"/>
            <path
              d="M0 -22 C-11 -22 -18 -13 -18 -4 C-18 8 0 26 0 26 C0 26 18 8 18 -4 C18 -13 11 -22 0 -22Z"
              fill="#0055FF"
            />
            <circle cx="0" cy="-4" r="6" fill="white"/>
          </g>

          {/* Dashed connector lines between pins */}
          <line x1="120" y1="96" x2="280" y2="191" stroke="#0055FF" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3"/>
          <line x1="280" y1="191" x2="400" y2="291" stroke="#0055FF" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3"/>
        </svg>

        {/* Floating label */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400">3 sedi attive</p>
          <p className="text-sm font-semibold text-gray-900 mt-0.5">Rete palestre</p>
        </div>
      </div>

    </div>
  </section>
);

// ── Main page component ─────────────────────────────────────────────────────
const PalestrePage: React.FC<PalestrePageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => { if (!isRevealed) setIsModalOpen(true); };
  const handleModalSubmit = (_data: LeadData) => { setIsModalOpen(false); firePhoneRevealConversion(); setIsRevealed(true); };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
      <BackgroundGlow />
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} title="Agente Palestre" />

      {/* ── HERO ── */}
      <div className="w-full px-4 mb-20 md:mb-32 pt-20">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
            Ora Disponibile
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1] text-gray-900 mb-6">
            Riempie la tua palestra<br />
            <span className="text-gray-500">di clienti. Automaticamente.</span>
          </h1>
          {/* SEO subtitle — keyword-targeted, visually subordinate to H1 */}
          <h2 className="text-xl md:text-2xl font-light text-gray-400 tracking-tight mb-8">
            Agente Vocale AI per Palestre — Il modulo receptionist del tuo gestionale 24/7
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Risponde a ogni richiesta, qualifica i contatti e fissa prove gratuite senza intervento umano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-shore-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 inline-block"
            >
              Attiva Agente Palestra
            </a>
            <LiveAgentCard label="Receptionist Palestre · Live" phoneHref="tel:+390287364217" />
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      {/* TODO: Marco to provide a dedicated gym/fitness image — using /3.png as placeholder */}
      <FeaturesBlock
        heading="Non dimentica, non sbaglia, non si ferma."
        features={[
          { title: "Risponde subito", description: "a chiamate e richieste" },
          { title: "Qualifica", description: "i nuovi contatti" },
          { title: "Fissa appuntamenti", description: "e prove gratuite" },
          { title: "Fornisce info", description: "su corsi e abbonamenti" },
          { title: "Gestisce più richieste", description: "insieme, senza attese" },
          { title: "Aggiorna il team", description: "automaticamente" },
        ]}
        imageSrc="/gym-assistant.png"
        imageAlt="Agente vocale AI per palestre italiane"
        imagePosition="left"
      />

      {/* ── COMPARISON ── */}
      <ComparisonBlock
        heading="Receptionist palestra"
        headingAccent="vs Agente Vocale"
        leftTitle="Tradizionale"
        leftItems={[
          "Orari limitati",
          "Chiamate perse",
          "Risposte lente",
          "Disorganizzazione",
          "Una alla volta",
          "Dipende dalla disponibilità",
        ]}
        rightTitle="Agente Vocale"
        rightItems={[
          "24/7",
          "Zero perdite",
          "Immediate",
          "Agenda automatica",
          "Tutto in parallelo",
          "Costo basso e flessibile",
        ]}
        ctaText="parla con la tua prossima receptionist"
        ctaHref="#contact"
      />

      {/* ── "PER LE CATENE" MAP SECTION (unique to this page) ── */}
      <ChainMapSection />

      {/* ── DEMO PHONE ── */}
      <div className="w-full px-4 mb-32 max-w-[1400px]" id="demo-line">
        <div className="bg-[#111] rounded-[40px] border border-gray-800 p-8 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px] group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Linea Demo Live — Palestre
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10 leading-tight">
              Prova il nostro agente vocale per palestre.<br />
              <span className="text-gray-500">Parlagli subito.</span>
            </h2>
            {/* TODO: Marco to provide dedicated demo phone number for gym agent — using Receptionist number temporarily */}
            <div
              onClick={!isRevealed ? handleReveal : undefined}
              className={`group/number relative inline-block transition-all duration-500 ${isRevealed ? '' : 'cursor-pointer hover:scale-105'}`}
            >
              {isRevealed ? (
                <a
                  href="tel:+390287364217"
                  className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white hover:text-emerald-400 hover:underline decoration-emerald-400/30 underline-offset-8"
                >
                  +39 02 8736 4217
                </a>
              ) : (
                <span className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white/20 blur-[12px] select-none">
                  +39 (XX) XXX-XXXX
                </span>
              )}
              {!isRevealed && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/number:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-black px-6 py-2 rounded-full font-mono text-sm font-bold shadow-xl">CLICCA PER RIVELARE</span>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto mt-10">
              Chiama questo numero per parlare con l&apos;agente e testare una prenotazione reale.<br />
              <span className="text-gray-500">Prova a fissare una prova gratuita o chiedere info sugli abbonamenti.</span>
            </p>
            <p className="text-gray-600 text-sm font-light mt-6">Disponibile anche per <Link href="/front-desk" className="text-shore-blue hover:underline">front desk aziendali</Link> e <Link href="/real-estate" className="text-shore-blue hover:underline">agenzie immobiliari</Link>.</p>
          </div>
        </div>
      </div>

      {/* ── VIDEO ── */}
      {/* TODO: Marco will replace with actual gym demo video URL from his YouTube channel */}
      <VideoSection
        heading="Guarda il video"
        videoSrc="https://www.youtube.com/embed/4DdtjucGR0A"
        videoTitle="Demo agente vocale AI per palestre"
      />

      {/* ── FAQ ── */}
      <FaqSection questions={palestreFaqs} />

      {/* ── CONTACT / CTA ── */}
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PalestrePage;
