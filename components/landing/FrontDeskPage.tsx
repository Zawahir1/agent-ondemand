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
import LiveAgentCard from './LiveAgentCard';
import { firePhoneRevealConversion } from '@/lib/gtag';

interface FrontDeskPageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const frontDeskFaqs = [
  {
    question: "Come funziona un centralino virtuale AI?",
    answer: "Un centralino virtuale AI risponde alle chiamate in entrata in modo naturale, riconosce la richiesta del cliente, fornisce informazioni, prenota appuntamenti o trasferisce la chiamata al reparto giusto. A differenza di un centralino tradizionale, non si limita a smistare: comprende e risolve. Funziona 24/7 e gestisce più chiamate in parallelo.",
  },
  {
    question: "Quanto costa un centralino virtuale AI?",
    answer: "Il costo di un centralino virtuale AI dipende dal volume di chiamate, dalle integrazioni con i tuoi sistemi e dal livello di personalizzazione. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo su misura per la tua azienda.",
  },
  {
    question: "Perché usare un centralino virtuale in cloud?",
    answer: "Un centralino virtuale in cloud elimina i costi di hardware e manutenzione, scala con la crescita della tua azienda, e funziona da qualsiasi sede. Aggiungere il livello AI lo trasforma in un assistente vero: non solo instrada le chiamate, ma le gestisce — risponde a domande, prenota appuntamenti e qualifica i lead automaticamente.",
  },
  {
    question: "Come funziona un centralino virtuale per aziende?",
    answer: "Per le aziende, un centralino virtuale AI riceve tutte le chiamate in entrata, le smista per reparto o operatore, e risponde direttamente quando il team non è disponibile. Si integra con calendari, CRM e sistemi esistenti, fornendo riepiloghi automatici di ogni conversazione e notificando il team in tempo reale.",
  },
  {
    question: "Posso trasferire chiamate a più operatori?",
    answer: "Sì, l'AI receptionist può instradare automaticamente le chiamate al reparto o collaboratore corretto, sia su numeri fissi che mobili. Puoi configurare regole di smistamento personalizzate in base al tipo di richiesta, orario o priorità.",
  },
  {
    question: "Supporta numeri fissi aziendali italiani?",
    answer: "Sì, l'agente vocale si integra con numeri fissi italiani nativi e mantiene l'identità della tua azienda. I clienti non notano differenze rispetto a una receptionist tradizionale, ma beneficiano di tempi di risposta immediati.",
  },
  {
    question: "In quanto tempo si attiva?",
    answer: "L'attivazione base richiede pochi minuti: ti basta configurare il tuo agente vocale dalla dashboard, caricare le FAQ aziendali e collegare il calendario. Per configurazioni professionali con integrazioni complesse, il nostro team ti assiste per una messa in produzione in pochi giorni.",
  },
  {
    question: "Quanto sembra umana la voce?",
    answer: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Con una latenza inferiore a 500ms, la conversazione fluisce naturalmente senza pause robotiche.",
  },
];

const FrontDeskPage: React.FC<FrontDeskPageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => { if (!isRevealed) setIsModalOpen(true); };
  const handleModalSubmit = (_data: LeadData) => { setIsModalOpen(false); firePhoneRevealConversion(); setIsRevealed(true); };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
      <BackgroundGlow />
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} title="AI Receptionist" />

      {/* ── HERO ── */}
      <div className="w-full px-4 mb-20 md:mb-32 pt-20">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
            Ora Disponibile
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1] text-gray-900 mb-6">
            Il Front Desk che <br />
            <span className="text-gray-500">non si ammala mai.</span>
          </h1>
          {/* SEO subtitle — keyword-targeted, visually subordinate to H1 */}
          <h2 className="text-xl md:text-2xl font-light text-gray-400 tracking-tight mb-8">
            Centralino Virtuale AI per Aziende — Risponde, prenota, qualifica 24/7
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Automatizza il 100% delle chiamate in entrata. Prenota appuntamenti, rispondi alle FAQ e gestisci emergenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-shore-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 inline-block">
              Attiva Receptionist
            </a>
            <LiveAgentCard label="Receptionist · Live" phoneHref="tel:+390287364217" />
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      {/* TODO: Marco to provide a dedicated receptionist feature image — using /1.png as placeholder */}
      <FeaturesBlock
        heading="Non dimentica, non sbaglia, non si ferma."
        features={[
          { title: "Apprende ogni dettaglio", description: "della tua azienda e lo usa in ogni conversazione" },
          { title: "Trasferisce le chiamate", description: "verso la persona giusta, su fisso o mobile" },
          { title: "Instrada automaticamente", description: "per reparto o collaboratore" },
          { title: "Raccoglie dati e richieste", description: "senza perdere nulla" },
          { title: "Risponde in modo chiaro", description: "e immediato ai clienti" },
          { title: "Notifica il tuo team con email", description: "riassuntive pronte all'azione" },
        ]}
        imageSrc="/1.png"
        imageAlt="AI Receptionist per aziende italiane"
        imagePosition="right"
      />

      {/* ── COMPARISON ── */}
      <ComparisonBlock
        heading="Receptionist tradizionale"
        headingAccent="vs Agente Vocale"
        leftTitle="Tradizionale"
        leftItems={[
          "Orari limitati",
          "Errori e dimenticanze",
          "Una chiamata alla volta",
          "Costi fissi elevati",
          "Dipende dalla presenza",
        ]}
        rightTitle="Agente Vocale"
        rightItems={[
          "Sempre attiva 24/7",
          "Precisione costante",
          "Più chiamate in parallelo",
          "Costo basso e flessibile",
          "Sempre disponibile",
        ]}
        ctaText="parla con la tua prossima receptionist"
        ctaHref="#contact"
      />

      {/* ── DEMO PHONE ── */}
      <div className="w-full px-4 mb-32 max-w-[1400px]" id="demo-line">
        <div className="bg-[#111] rounded-[40px] border border-gray-800 p-8 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px] group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shore-blue/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-shore-blue/20 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
              Linea Demo Live
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10 leading-tight">Non ascoltare e basta. <br /><span className="text-gray-500">Parlaci subito.</span></h2>
            <div onClick={!isRevealed ? handleReveal : undefined} className={`group/number relative inline-block transition-all duration-500 ${isRevealed ? '' : 'cursor-pointer hover:scale-105'}`}>
              {isRevealed ? (
                <a href="tel:+390287364217" className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white hover:text-shore-blue hover:underline decoration-shore-blue/30 underline-offset-8">
                  +39 02 8736 4217
                </a>
              ) : (
                <span className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white/20 blur-[12px] select-none">
                  +39 (XX) XXX-XXXX
                </span>
              )}
              {!isRevealed && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/number:opacity-100 transition-opacity duration-300"><span className="bg-white text-black px-6 py-2 rounded-full font-mono text-sm font-bold shadow-xl">CLICCA PER RIVELARE</span></div>}
            </div>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto mt-10">Chiama questo numero per parlare con la nostra AI. <br /><span className="text-gray-500">Prova a prenotare, chiedere i prezzi o cambiare lingua.</span></p>
            <p className="text-gray-600 text-sm font-light mt-6">Disponibile anche per <Link href="/real-estate" className="text-shore-blue hover:underline">agenzie immobiliari</Link> e <Link href="/palestre" className="text-shore-blue hover:underline">palestre e catene fitness</Link>.</p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <FaqSection questions={frontDeskFaqs} />

      {/* ── CONTACT / CTA ── */}
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default FrontDeskPage;
