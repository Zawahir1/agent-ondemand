import type { Metadata } from 'next';
import VenditoreAutoPage from '@/components/landing/VenditoreAutoPage';

export const metadata: Metadata = {
  title: 'Agente Vocale AI per Concessionarie Auto | Agent on Demand — Vendita 24/7',
  description: "L'agente vocale AI per concessionarie auto: qualifica acquirenti, fissa test drive e gestisce preventivi automaticamente. Integrazione CRM. Attivo 24/7.",
  openGraph: {
    title: 'Agente Vocale AI per Concessionarie Auto | Agent on Demand — Vendita 24/7',
    description: "L'agente vocale AI per concessionarie auto: qualifica acquirenti, fissa test drive e gestisce preventivi automaticamente. Integrazione CRM. Attivo 24/7.",
    type: 'website',
    locale: 'it_IT',
    // TODO: Marco to provide /og-venditore-auto.jpg
    images: ['/og-venditore-auto.jpg'],
  },
  alternates: {
    canonical: 'https://agent-ondemand.com/venditore-auto',
  },
};

// TODO: Marco to provide actual video URL, thumbnail, and real uploadDate
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Agente Vocale AI per Concessionarie Auto',
      description:
        'Agente vocale AI specializzato per concessionarie auto. Qualifica potenziali acquirenti, fissa appuntamenti per test drive, gestisce richieste di preventivo e campagne outbound.',
      brand: { '@type': 'Brand', name: 'Agent on Demand' },
      category: 'AI Voice Agent for Automotive Industry',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://agent-ondemand.com/venditore-auto',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agent-ondemand.com' },
        { '@type': 'ListItem', position: 2, name: 'Agenti', item: 'https://agent-ondemand.com/#agenti' },
        { '@type': 'ListItem', position: 3, name: 'Venditore Auto', item: 'https://agent-ondemand.com/venditore-auto' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Come gestisce un agente vocale AI le richieste di preventivo per un'auto?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'agente vocale risponde alla chiamata, raccoglie le preferenze del cliente (modello, allestimento, budget, tipo di finanziamento), compila automaticamente la richiesta di preventivo e la invia al consulente di vendita. Il cliente riceve conferma immediata e l'agente fissa un appuntamento in concessionaria per chiudere la trattativa.",
          },
        },
        {
          '@type': 'Question',
          name: 'Può fissare appuntamenti per test drive in autonomia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente verifica la disponibilità dei veicoli e degli slot orari direttamente dal tuo calendario, propone le date disponibili al cliente e conferma l'appuntamento per il test drive. Tutto in automatico, 24 ore su 24, anche fuori orario di apertura.",
          },
        },
        {
          '@type': 'Question',
          name: 'Funziona per concessionarie multi-marca?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Assolutamente sì. Ogni brand o sede può avere il suo agente dedicato con listini, modelli e procedure specifiche, mentre dalla dashboard centrale monitori lead, appuntamenti e conversioni di tutte le sedi in tempo reale. Scalabile da una singola concessionaria a una rete nazionale.",
          },
        },
        {
          '@type': 'Question',
          name: 'Come qualifica i lead che chiamano per un\'auto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'agente pone domande strategiche: veicolo di interesse, tempistiche di acquisto, disponibilità al finanziamento, eventuale permuta. Classifica automaticamente ogni lead per priorità e lo assegna al consulente giusto, così il team di vendita si concentra solo sui contatti caldi e pronti all'acquisto.",
          },
        },
        {
          '@type': 'Question',
          name: 'Si integra con il mio CRM o gestionale concessionaria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente si integra con i principali CRM automotive italiani ed europei. Ogni contatto qualificato viene inserito automaticamente nel CRM con tutti i dati raccolti durante la chiamata: modello richiesto, budget, preferenze, data appuntamento. Se usi un gestionale custom, il nostro team configura l'integrazione su misura.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa un agente vocale AI per una concessionaria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Il costo dipende dal volume di chiamate e dal numero di sedi. Offriamo piani flessibili che partono da pacchetti entry-level per concessionarie mono-sede fino a piani enterprise per reti multi-brand. Il costo è sempre inferiore a quello di un consulente telefonico dedicato, con performance superiori. Contatta il nostro team per un preventivo su misura.",
          },
        },
        {
          '@type': 'Question',
          name: "L'agente AI può gestire anche campagne outbound verso i clienti esistenti?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, oltre a gestire le chiamate in entrata, l'agente può condurre campagne outbound automatizzate: ricontatto clienti con revisione in scadenza, promozioni su nuovi modelli, follow-up su preventivi non chiusi, inviti a eventi in concessionaria. Ogni chiamata viene registrata e i risultati sono visibili in dashboard.",
          },
        },
      ],
    },
    {
      // TODO: Marco to provide actual video URL, thumbnail, and upload date
      '@type': 'VideoObject',
      name: 'Agente Vocale AI per Concessionarie Auto — Demo',
      description: 'Scopri come un agente vocale AI qualifica acquirenti e fissa test drive per una concessionaria auto.',
      thumbnailUrl: 'https://agent-ondemand.com/og-video-venditore-auto.jpg',
      uploadDate: '2026-04-08',
      contentUrl: 'https://www.youtube.com/shorts/dQw4w9WgXcQ',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
      <VenditoreAutoPage />
    </>
  );
}
