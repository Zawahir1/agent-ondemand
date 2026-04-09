'use client'

import React, { useState } from 'react';

interface FaqItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ number, question, answer, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-[32px] cursor-pointer group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border
        ${isOpen
          ? 'bg-white border-shore-blue/40 shadow-lg shadow-blue-500/10'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }
      `}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-shore-blue transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="p-8 md:p-10">
        <div className="flex justify-between items-start gap-6">
          <div className="flex items-start gap-6 flex-1">
            <span className={`text-lg font-mono font-medium transition-colors duration-300 pt-1 ${isOpen ? 'text-shore-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>
              {number}
            </span>
            <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 leading-tight ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
              {question}
            </h3>
          </div>

          <div className={`
            flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500
            ${isOpen ? 'rotate-45 border-shore-blue bg-shore-blue/10 text-shore-blue' : 'rotate-0 border-gray-200 text-gray-400 group-hover:border-gray-300 group-hover:text-gray-600'}
          `}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>

        <div className={`
          grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}
        `}>
          <div className="overflow-hidden">
            <div className="pl-[3.25rem] md:pl-[3.5rem] pr-4 md:pr-10">
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  questions?: FaqQuestion[];
}

const defaultFaqs: FaqQuestion[] = [
    {
      question: "Quanto sembra umana la voce?",
      answer: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Inoltre, con una latenza inferiore a 500ms, la conversazione fluisce naturalmente senza imbarazzanti pause robotiche."
    },
    {
      question: "Può gestire pianificazioni complesse?",
      answer: "Sì. L'agente si integra direttamente con il tuo CRM e calendario (Google, Outlook, Calendly). Negozia gli orari, controlla la disponibilità e prenota appuntamenti in tempo reale."
    },
    {
      question: "Cosa succede se l'AI non conosce la risposta?",
      answer: "Abbiamo impostato dei limiti rigorosi. Se l'AI incontra una domanda al di fuori della sua base di conoscenza, può prendere un messaggio, controllare le FAQ di backup o trasferire senza interruzioni la chiamata a un membro del personale umano."
    },
    {
      question: "È difficile da configurare?",
      answer: "Per niente. Poiché siamo specializzati in Front Desk e Immobiliare, i nostri modelli pre-addestrati sono pronti al 90%. Devi solo caricare i dettagli della tua azienda e puoi essere live in meno di un'ora."
    },
    {
      question: "Supporta più lingue?",
      answer: "Sì. I nostri agenti parlano correntemente oltre 30 lingue principali, tra cui italiano, inglese, spagnolo, francese, tedesco e mandarino. Il sistema rileva automaticamente la lingua parlata e cambia contesto istantaneamente."
    },
    {
      question: "Possiamo avere numeri di telefono italiani nativi?",
      answer: "Assolutamente. Forniamo il provisioning istantaneo di numeri di telefono locali per l'Italia (+39), oltre a USA, UK e altre 50 regioni. Puoi scegliere un prefisso locale che corrisponda alla tua sede aziendale per creare fiducia."
    },
    {
      question: "Quanto costa un agente vocale AI?",
      answer: "I prezzi variano in base al volume di chiamate e alle integrazioni necessarie. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo personalizzato in base alle esigenze del tuo business."
    },
    {
      question: "Come funziona un agente vocale AI?",
      answer: "Un agente vocale AI risponde alle chiamate in modo naturale, comprende le richieste del cliente, segue il tuo script aziendale e può prenotare appuntamenti, qualificare lead o trasferire chiamate. Si integra con il tuo calendario, CRM e sistemi esistenti."
    },
    {
      question: "Gli agenti vocali supportano l'italiano?",
      answer: "Sì, i nostri agenti parlano italiano in modo naturale e fluente. Inoltre supportano oltre 30 lingue, permettendo di gestire clienti internazionali senza cambiare sistema."
    }
];

const FaqSection: React.FC<FaqSectionProps> = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = questions ?? defaultFaqs;

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20 relative">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <span className="text-shore-blue font-mono text-sm tracking-wider uppercase mb-4 block">Domande Frequenti</span>
          <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Tutto quello che <br className="hidden lg:block" />
            devi sapere.
          </h2>
          <p className="text-gray-500 text-lg font-light mb-8 max-w-sm">
            Non trovi la risposta che cerchi? Parla direttamente con il nostro team.
          </p>
          <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-900 hover:bg-black hover:text-white transition-all duration-300 font-medium text-sm">
            Contatta le Vendite
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              number={String(index + 1).padStart(2, '0')}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;