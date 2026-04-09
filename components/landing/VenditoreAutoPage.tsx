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

interface VenditoreAutoPageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const venditoreAutoFaqs = [
  {
    question: "Come gestisce un agente vocale AI le richieste di preventivo per un'auto?",
    answer: "L'agente vocale risponde alla chiamata, raccoglie le preferenze del cliente (modello, allestimento, budget, tipo di finanziamento), compila automaticamente la richiesta di preventivo e la invia al consulente di vendita. Il cliente riceve conferma immediata e l'agente fissa un appuntamento in concessionaria per chiudere la trattativa.",
  },
  {
    question: "Può fissare appuntamenti per test drive in autonomia?",
    answer: "Sì, l'agente verifica la disponibilità dei veicoli e degli slot orari direttamente dal tuo calendario, propone le date disponibili al cliente e conferma l'appuntamento per il test drive. Tutto in automatico, 24 ore su 24, anche fuori orario di apertura.",
  },
  {
    question: "Funziona per concessionarie multi-marca?",
    answer: "Assolutamente sì. Ogni brand o sede può avere il suo agente dedicato con listini, modelli e procedure specifiche, mentre dalla dashboard centrale monitori lead, appuntamenti e conversioni di tutte le sedi in tempo reale. Scalabile da una singola concessionaria a una rete nazionale.",
  },
  {
    question: "Come qualifica i lead che chiamano per un'auto?",
    answer: "L'agente pone domande strategiche: veicolo di interesse, tempistiche di acquisto, disponibilità al finanziamento, eventuale permuta. Classifica automaticamente ogni lead per priorità e lo assegna al consulente giusto, così il team di vendita si concentra solo sui contatti caldi e pronti all'acquisto.",
  },
  {
    question: "Si integra con il mio CRM o gestionale concessionaria?",
    answer: "Sì, l'agente si integra con i principali CRM automotive italiani ed europei. Ogni contatto qualificato viene inserito automaticamente nel CRM con tutti i dati raccolti durante la chiamata: modello richiesto, budget, preferenze, data appuntamento. Se usi un gestionale custom, il nostro team configura l'integrazione su misura.",
  },
  {
    question: "Quanto costa un agente vocale AI per una concessionaria?",
    answer: "Il costo dipende dal volume di chiamate e dal numero di sedi. Offriamo piani flessibili che partono da pacchetti entry-level per concessionarie mono-sede fino a piani enterprise per reti multi-brand. Il costo è sempre inferiore a quello di un consulente telefonico dedicato, con performance superiori. Contatta il nostro team per un preventivo su misura.",
  },
  {
    question: "L'agente AI può gestire anche campagne outbound verso i clienti esistenti?",
    answer: "Sì, oltre a gestire le chiamate in entrata, l'agente può condurre campagne outbound automatizzate: ricontatto clienti con revisione in scadenza, promozioni su nuovi modelli, follow-up su preventivi non chiusi, inviti a eventi in concessionaria. Ogni chiamata viene registrata e i risultati sono visibili in dashboard.",
  },
];

const VenditoreAutoPage: React.FC<VenditoreAutoPageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => { if (!isRevealed) setIsModalOpen(true); };
  const handleModalSubmit = (_data: LeadData) => { setIsModalOpen(false); firePhoneRevealConversion(); setIsRevealed(true); };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
      <BackgroundGlow />
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} title="Agente Venditore Auto" />

      {/* ── HERO ── */}
      <div className="w-full px-4 mb-20 md:mb-32 pt-20">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
            Ora Disponibile
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1] text-gray-900 mb-6">
            L&apos;agente che non perde<br />
            <span className="text-gray-500">mai un cliente.</span>
          </h1>
          {/* SEO subtitle — keyword-targeted, visually subordinate to H1 */}
          <h2 className="text-xl md:text-2xl font-light text-gray-400 tracking-tight mb-8">
            Agente Vocale AI per Concessionarie Auto — Qualifica acquirenti e fissa test drive 24/7
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Risponde a ogni chiamata, qualifica il potenziale acquirente e fissa l&apos;appuntamento in concessionaria — senza mai perdere un lead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-shore-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 inline-block"
            >
              Attiva Agente di Vendita
            </a>
            <LiveAgentCard label="Venditore Auto · Live" phoneHref="tel:+390287364217" />
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <FeaturesBlock
        heading="Vende mentre tu dormi."
        features={[
          { title: "Qualifica acquirenti", description: "automaticamente" },
          { title: "Fissa test drive", description: "e appuntamenti in concessionaria" },
          { title: "Gestisce preventivi", description: "con precisione" },
          { title: "Chiama in uscita", description: "campagne outbound automatizzate" },
          { title: "Aggiorna il CRM", description: "in tempo reale" },
          { title: "Risponde 24/7", description: "anche fuori orario" },
        ]}
        imageSrc="/car-assistant.png"
        imageAlt="Agente vocale AI per concessionarie auto italiane"
        imagePosition="right"
      />

      {/* ── COMPARISON ── */}
      <ComparisonBlock
        heading="Venditore tradizionale"
        headingAccent="vs Agente Vocale AI"
        leftTitle="Tradizionale"
        leftItems={[
          "Disponibile solo in orario",
          "Lead persi fuori orario",
          "Qualificazione manuale",
          "Follow-up dimenticati",
          "Un cliente alla volta",
          "Dipende dall'umore del venditore",
        ]}
        rightTitle="Agente Vocale"
        rightItems={[
          "24/7, anche di notte",
          "Zero lead persi",
          "Qualificazione precisa",
          "Follow-up automatici",
          "Più clienti in parallelo",
          "Sempre professionale",
        ]}
        ctaText="parla con il tuo prossimo agente di vendita"
        ctaHref="#contact"
      />

      {/* ── DEMO PHONE ── */}
      <div className="w-full px-4 mb-32 max-w-[1400px]" id="demo-line">
        <div className="bg-[#111] rounded-[40px] border border-gray-800 p-8 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px] group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest mb-10 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Linea Demo Live — Concessionaria
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10 leading-tight">
              Prova il nostro agente vocale per concessionarie.<br />
              <span className="text-gray-500">Parlagli subito.</span>
            </h2>
            {/* TODO: Marco to provide dedicated demo phone number for car dealership agent */}
            <div
              onClick={!isRevealed ? handleReveal : undefined}
              className={`group/number relative inline-block transition-all duration-500 ${isRevealed ? '' : 'cursor-pointer hover:scale-105'}`}
            >
              {isRevealed ? (
                <a
                  href="tel:+390287364217"
                  className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white hover:text-orange-400 hover:underline decoration-orange-400/30 underline-offset-8"
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
              Chiama questo numero per parlare con l&apos;agente e testare una qualificazione reale.<br />
              <span className="text-gray-500">Prova a richiedere un preventivo o fissare un test drive.</span>
            </p>
            <p className="text-gray-600 text-sm font-light mt-6">Disponibile anche per <Link href="/front-desk" className="text-shore-blue hover:underline">front desk aziendali</Link>, <Link href="/real-estate" className="text-shore-blue hover:underline">agenzie immobiliari</Link> e <Link href="/palestre" className="text-shore-blue hover:underline">palestre</Link>.</p>
          </div>
        </div>
      </div>

      {/* ── VIDEO ── */}
      <VideoSection
        heading="Guarda il video"
        videoSrc="https://www.youtube.com/embed/1_t2aqdQQgA"
        videoTitle="Demo agente vocale AI per concessionarie auto"
      />

      {/* ── FAQ ── */}
      <FaqSection questions={venditoreAutoFaqs} />

      {/* ── CONTACT / CTA ── */}
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default VenditoreAutoPage;
