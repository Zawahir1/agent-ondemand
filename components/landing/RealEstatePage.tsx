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

interface RealEstatePageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const realEstateFaqs = [
  {
    question: "Come qualificare i lead immobiliari con un agente vocale AI?",
    answer: "L'agente vocale AI risponde alle richieste provenienti da portali immobiliari e chiamate dirette, pone domande di qualificazione (budget, zona, tipologia di immobile, tempistiche), filtra i contatti veramente interessati e li inserisce nel tuo CRM con tutte le informazioni raccolte. Riceverai solo lead pronti da contattare.",
  },
  {
    question: "Si integra con il mio CRM immobiliare?",
    answer: "Sì, l'agente vocale si integra con i principali CRM italiani per il settore immobiliare. I dati di ogni chiamata vengono inseriti automaticamente nel sistema, con trascrizione, riepilogo e azioni suggerite. Se utilizzi un CRM custom, il nostro team configura un'integrazione dedicata.",
  },
  {
    question: "Funziona con i portali immobiliari italiani?",
    answer: "Sì, l'agente gestisce le richieste provenienti dai principali portali immobiliari italiani. Può rispondere immediatamente alle richieste di informazioni, fissare visite e qualificare i contatti, riducendo i tempi di risposta da ore a secondi — un vantaggio competitivo enorme per non perdere lead.",
  },
  {
    question: "Può fissare visite automaticamente?",
    answer: "Sì, l'agente vocale si collega al tuo calendario e fissa visite in base alle disponibilità reali tue e dei tuoi collaboratori. Invia conferme automatiche al cliente via email o SMS e aggiorna l'agenda in tempo reale. Se una visita viene spostata o cancellata, il cliente viene notificato automaticamente.",
  },
  {
    question: "Quanto costa un agente vocale per agenzia immobiliare?",
    answer: "Il costo dipende dal volume di chiamate e dal numero di collaboratori che vuoi supportare. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo basato sulle dimensioni della tua agenzia e sui portali che utilizzi.",
  },
  {
    question: "Quanto sembra umana la voce?",
    answer: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Con una latenza inferiore a 500ms, la conversazione fluisce naturalmente. I tuoi clienti parleranno con l'agente come parlerebbero con un commerciale esperto.",
  },
  {
    question: "Posso usare un agente vocale AI per riattivare il database clienti?",
    answer: "Sì, l'agente vocale può chiamare in outbound i contatti dormienti del tuo database, riproponendo immobili nuovi o aggiornamenti, e qualificare chi torna interessato. Tutte le risposte vengono riportate nel CRM con riepilogo della conversazione e azioni suggerite per il commerciale.",
  },
];

const RealEstatePage: React.FC<RealEstatePageProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => { if (!isRevealed) setIsModalOpen(true); };
  const handleModalSubmit = (_data: LeadData) => { setIsModalOpen(false); firePhoneRevealConversion(); setIsRevealed(true); };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
      <BackgroundGlow />
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} title="Assistente Immobiliare" />

      {/* ── HERO ── */}
      <div className="w-full px-4 mb-20 md:mb-32 pt-20">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
            Ora Disponibile
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1] text-gray-900 mb-6">
            Gestisce ogni richiesta <br />
            <span className="text-gray-500">come farebbe il tuo miglior agente.</span>
          </h1>
          {/* SEO subtitle — keyword-targeted, visually subordinate to H1 */}
          <h2 className="text-xl md:text-2xl font-light text-gray-400 tracking-tight mb-8">
            Agente Vocale AI per Agenzie Immobiliari — Qualifica lead 24/7 e fissa visite in automatico
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Risponde ai clienti, qualifica i lead e organizza le visite, senza interruzioni e senza errori.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-shore-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 inline-block">
              Attiva Agente di Vendita
            </a>
            <LiveAgentCard label="Agente Immobiliare · Live" phoneHref="tel:+390287364217" />
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      {/* TODO: Marco to provide a dedicated real estate agent image — using /2.png as placeholder */}
      <FeaturesBlock
        heading="Non dimentica, non sbaglia, non si ferma."
        features={[
          { title: "Conosce ogni dettaglio", description: "dei tuoi immobili" },
          { title: "Risponde subito", description: "da portali e chiamate" },
          { title: "Qualifica", description: "i lead" },
          { title: "Organizza", description: "visite" },
          { title: "Gestisce", description: "tutto in parallelo" },
          { title: "Aggiorna", description: "il team" },
        ]}
        imageSrc="/2.png"
        imageAlt="Agente vocale AI per agenzie immobiliari"
        imagePosition="left"
      />

      {/* ── COMPARISON ── */}
      <ComparisonBlock
        heading="Agente immobiliare tradizionale"
        headingAccent="vs Agente Vocale"
        leftTitle="Tradizionale"
        leftItems={[
          "Orari limitati",
          "Risponde in ritardo",
          "Lead non qualificati",
          "Costi fissi elevati",
          "Appuntamenti persi",
          "Dipende dalla disponibilità",
        ]}
        rightTitle="Agente Vocale"
        rightItems={[
          "Sempre attiva 24/7",
          "Risposta immediata",
          "Lead filtrati automaticamente",
          "Costo basso e flessibile",
          "Agenda sempre aggiornata",
          "Sempre operativo",
        ]}
        ctaText="parla con il tuo prossimo agente immobiliare"
        ctaHref="#contact"
      />

      {/* ── DEMO PHONE ── */}
      <div className="w-full px-4 mb-32 max-w-[1400px]" id="demo-line">
        <div className="bg-[#111] rounded-[40px] border border-gray-800 p-8 md:p-24 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px] group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-10 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
              Linea Demo Live
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10 leading-tight">Simula di essere un acquirente. <br /><span className="text-gray-500">Testa le sue abilità di vendita.</span></h2>
            <div onClick={!isRevealed ? handleReveal : undefined} className={`group/number relative inline-block transition-all duration-500 ${isRevealed ? '' : 'cursor-pointer hover:scale-105'}`}>
              {isRevealed ? (
                <a href="tel:+390287364324" className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white hover:text-purple-500 hover:underline decoration-purple-500/30 underline-offset-8">
                  +39 02 8736 4324
                </a>
              ) : (
                <span className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter transition-all duration-700 text-white/20 blur-[12px] select-none">
                  +39 (XX) XXX-XXXX
                </span>
              )}
              {!isRevealed && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/number:opacity-100 transition-opacity duration-300"><span className="bg-white text-black px-6 py-2 rounded-full font-mono text-sm font-bold shadow-xl">CLICCA PER RIVELARE</span></div>}
            </div>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto mt-10">Chiama per parlare con il nostro agente immobiliare. <br /><span className="text-gray-500">Prova a prenotare una visita o chiedi informazioni sulla zona.</span></p>
            <p className="text-gray-600 text-sm font-light mt-6">Disponibile anche per <Link href="/front-desk" className="text-shore-blue hover:underline">front desk aziendali</Link> e <Link href="/palestre" className="text-shore-blue hover:underline">palestre e catene fitness</Link>.</p>
          </div>
        </div>
      </div>

      {/* ── VIDEO ── */}
      {/* TODO: Marco will replace with actual YouTube video URL from his channel */}
      <VideoSection
        heading="Guarda il video"
        videoSrc="https://www.youtube.com/embed/xP2owlfrCwg"
        videoTitle="Agente Vocale AI per Agenzie Immobiliari — Demo Agent on Demand"
      />

      {/* ── FAQ ── */}
      <FaqSection questions={realEstateFaqs} />

      {/* ── CONTACT / CTA ── */}
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default RealEstatePage;
