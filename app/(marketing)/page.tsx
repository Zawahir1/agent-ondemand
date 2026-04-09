import type { Metadata } from 'next';
import HomePageClient from '@/components/landing/HomePageClient';

export const metadata: Metadata = {
  title: 'Agent on Demand — Agenti Vocali AI per Aziende Italiane | Centralino Virtuale 24/7',
  description: 'Automatizza chiamate inbound e outbound con agenti vocali AI in italiano. Centralino virtuale, qualificazione lead, gestione clienti — sempre attivi, risposte in <3 secondi.',
  openGraph: {
    title: 'Agent on Demand — Agenti Vocali AI per Aziende Italiane | Centralino Virtuale 24/7',
    description: 'Automatizza chiamate inbound e outbound con agenti vocali AI in italiano. Centralino virtuale, qualificazione lead, gestione clienti — sempre attivi, risposte in <3 secondi.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Agent on Demand',
    // TODO: Marco to provide /og-home.jpg
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://agent-ondemand.com/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Agent on Demand',
      url: 'https://agent-ondemand.com',
      inLanguage: 'it-IT',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://agent-ondemand.com',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quanto sembra umana la voce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Inoltre, con una latenza inferiore a 500ms, la conversazione fluisce naturalmente senza imbarazzanti pause robotiche.",
          },
        },
        {
          '@type': 'Question',
          name: 'Può gestire pianificazioni complesse?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì. L'agente si integra direttamente con il tuo CRM e calendario (Google, Outlook, Calendly). Negozia gli orari, controlla la disponibilità e prenota appuntamenti in tempo reale.",
          },
        },
        {
          '@type': 'Question',
          name: "Cosa succede se l'AI non conosce la risposta?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Abbiamo impostato dei limiti rigorosi. Se l'AI incontra una domanda al di fuori della sua base di conoscenza, può prendere un messaggio, controllare le FAQ di backup o trasferire senza interruzioni la chiamata a un membro del personale umano.",
          },
        },
        {
          '@type': 'Question',
          name: 'È difficile da configurare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Per niente. Poiché siamo specializzati in Front Desk e Immobiliare, i nostri modelli pre-addestrati sono pronti al 90%. Devi solo caricare i dettagli della tua azienda e puoi essere live in meno di un'ora.",
          },
        },
        {
          '@type': 'Question',
          name: 'Supporta più lingue?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì. I nostri agenti parlano correntemente oltre 30 lingue principali, tra cui italiano, inglese, spagnolo, francese, tedesco e mandarino. Il sistema rileva automaticamente la lingua parlata e cambia contesto istantaneamente.',
          },
        },
        {
          '@type': 'Question',
          name: 'Possiamo avere numeri di telefono italiani nativi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Assolutamente. Forniamo il provisioning istantaneo di numeri di telefono locali per l\'Italia (+39), oltre a USA, UK e altre 50 regioni. Puoi scegliere un prefisso locale che corrisponda alla tua sede aziendale per creare fiducia.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa un agente vocale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I prezzi variano in base al volume di chiamate e alle integrazioni necessarie. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo personalizzato in base alle esigenze del tuo business.',
          },
        },
        {
          '@type': 'Question',
          name: 'Come funziona un agente vocale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un agente vocale AI risponde alle chiamate in modo naturale, comprende le richieste del cliente, segue il tuo script aziendale e può prenotare appuntamenti, qualificare lead o trasferire chiamate. Si integra con il tuo calendario, CRM e sistemi esistenti.',
          },
        },
        {
          '@type': 'Question',
          name: "Gli agenti vocali supportano l'italiano?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì, i nostri agenti parlano italiano in modo naturale e fluente. Inoltre supportano oltre 30 lingue, permettendo di gestire clienti internazionali senza cambiare sistema.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual è la differenza tra un centralino virtuale tradizionale e un agente vocale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un centralino virtuale tradizionale instrada le chiamate verso operatori umani o caselle vocali. Un agente vocale AI le gestisce direttamente: comprende la richiesta del cliente, risponde, prenota appuntamenti e qualifica i lead — tutto in autonomia, senza intervento umano. È l'evoluzione naturale del centralino virtuale, potenziata dall'intelligenza artificiale.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
