import type { Metadata } from 'next';
import RealEstatePage from '@/components/landing/RealEstatePage';

export const metadata: Metadata = {
  title: 'Agente Vocale AI per Agenzie Immobiliari | Qualificazione Lead 24/7',
  description: 'Qualifica i lead immobiliari 24/7, fissa visite in automatico e riattiva il tuo database con un agente vocale AI in italiano. Si integra con i tuoi portali e CRM.',
  openGraph: {
    title: 'Agente Vocale AI per Agenzie Immobiliari | Qualificazione Lead 24/7',
    description: 'Qualifica i lead immobiliari 24/7, fissa visite in automatico e riattiva il tuo database con un agente vocale AI in italiano. Si integra con i tuoi portali e CRM.',
    type: 'website',
    locale: 'it_IT',
    // TODO: Marco to provide /og-real-estate.jpg
    images: ['/og-real-estate.jpg'],
  },
  alternates: {
    canonical: 'https://agent-ondemand.com/real-estate',
  },
};

// TODO: Marco to provide actual video URL, thumbnail, and real uploadDate
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Agente Vocale AI per Agenzie Immobiliari',
      description:
        'Agente vocale AI specializzato per il settore immobiliare. Qualifica lead 24/7, fissa visite, si integra con CRM e portali italiani.',
      brand: { '@type': 'Brand', name: 'Agent on Demand' },
      category: 'AI Voice Agent for Real Estate',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://agent-ondemand.com/real-estate',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agent-ondemand.com' },
        { '@type': 'ListItem', position: 2, name: 'Agenti', item: 'https://agent-ondemand.com/#agenti' },
        { '@type': 'ListItem', position: 3, name: 'Agente Immobiliare', item: 'https://agent-ondemand.com/real-estate' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Come qualificare i lead immobiliari con un agente vocale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'agente vocale AI risponde alle richieste provenienti da portali immobiliari e chiamate dirette, pone domande di qualificazione (budget, zona, tipologia di immobile, tempistiche), filtra i contatti veramente interessati e li inserisce nel tuo CRM con tutte le informazioni raccolte. Riceverai solo lead pronti da contattare.",
          },
        },
        {
          '@type': 'Question',
          name: 'Si integra con il mio CRM immobiliare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente vocale si integra con i principali CRM italiani per il settore immobiliare. I dati di ogni chiamata vengono inseriti automaticamente nel sistema, con trascrizione, riepilogo e azioni suggerite. Se utilizzi un CRM custom, il nostro team configura un'integrazione dedicata.",
          },
        },
        {
          '@type': 'Question',
          name: 'Funziona con i portali immobiliari italiani?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente gestisce le richieste provenienti dai principali portali immobiliari italiani. Può rispondere immediatamente alle richieste di informazioni, fissare visite e qualificare i contatti, riducendo i tempi di risposta da ore a secondi — un vantaggio competitivo enorme per non perdere lead.",
          },
        },
        {
          '@type': 'Question',
          name: 'Può fissare visite automaticamente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente vocale si collega al tuo calendario e fissa visite in base alle disponibilità reali tue e dei tuoi collaboratori. Invia conferme automatiche al cliente via email o SMS e aggiorna l'agenda in tempo reale. Se una visita viene spostata o cancellata, il cliente viene notificato automaticamente.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa un agente vocale per agenzia immobiliare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il costo dipende dal volume di chiamate e dal numero di collaboratori che vuoi supportare. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo basato sulle dimensioni della tua agenzia e sui portali che utilizzi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto sembra umana la voce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Con una latenza inferiore a 500ms, la conversazione fluisce naturalmente. I tuoi clienti parleranno con l'agente come parlerebbero con un commerciale esperto.",
          },
        },
        {
          '@type': 'Question',
          name: 'Posso usare un agente vocale AI per riattivare il database clienti?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente vocale può chiamare in outbound i contatti dormienti del tuo database, riproponendo immobili nuovi o aggiornamenti, e qualificare chi torna interessato. Tutte le risposte vengono riportate nel CRM con riepilogo della conversazione e azioni suggerite per il commerciale.",
          },
        },
      ],
    },
    {
      // TODO: Marco to provide actual video URL, thumbnail, and real uploadDate
      '@type': 'VideoObject',
      name: 'Agente Vocale AI per Agenzie Immobiliari — Demo',
      description:
        "Scopri come un agente vocale AI gestisce le chiamate e qualifica i lead per un'agenzia immobiliare.",
      thumbnailUrl: 'https://agent-ondemand.com/og-video-real-estate.jpg',
      uploadDate: '2026-04-07',
      contentUrl: 'https://www.youtube.com/shorts/xP2owlfrCwg',
      embedUrl: 'https://www.youtube.com/embed/xP2owlfrCwg',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RealEstatePage />
    </>
  );
}
