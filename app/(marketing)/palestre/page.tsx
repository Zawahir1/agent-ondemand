import type { Metadata } from 'next';
import PalestrePage from '@/components/landing/PalestrePage';

export const metadata: Metadata = {
  title: 'Agente Vocale AI per Palestre | Receptionist 24/7 — Agent on Demand',
  description: 'Il receptionist AI per palestre e catene fitness: risponde a chiamate, fissa prove gratuite, qualifica nuovi contatti. Si integra con il tuo gestionale palestra. 24/7.',
  openGraph: {
    title: 'Agente Vocale AI per Palestre | Receptionist 24/7 — Agent on Demand',
    description: 'Il receptionist AI per palestre e catene fitness: risponde a chiamate, fissa prove gratuite, qualifica nuovi contatti. Si integra con il tuo gestionale palestra. 24/7.',
    type: 'website',
    locale: 'it_IT',
    // TODO: Marco to provide /og-palestre.jpg
    images: ['/og-palestre.jpg'],
  },
  alternates: {
    canonical: 'https://agent-ondemand.com/palestre',
  },
};

// TODO: Marco to provide actual video URL, thumbnail, and real uploadDate
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Agente Vocale AI per Palestre',
      description:
        'Agente vocale AI specializzato per palestre e catene fitness. Gestisce prenotazioni, qualifica lead, fissa prove gratuite e supporta multi-sede.',
      brand: { '@type': 'Brand', name: 'Agent on Demand' },
      category: 'AI Voice Agent for Fitness Industry',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://agent-ondemand.com/palestre',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agent-ondemand.com' },
        { '@type': 'ListItem', position: 2, name: 'Agenti', item: 'https://agent-ondemand.com/#agenti' },
        { '@type': 'ListItem', position: 3, name: 'Receptionist Palestre', item: 'https://agent-ondemand.com/palestre' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Come gestire le prenotazioni palestra con un agente vocale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'agente vocale AI risponde alle chiamate, verifica la disponibilità delle lezioni o degli slot di prova, fissa l'appuntamento in automatico e sincronizza tutto con il tuo calendario. I clienti possono prenotare 24/7, anche quando la reception è chiusa, senza perdere nessuna opportunità.",
          },
        },
        {
          '@type': 'Question',
          name: 'Funziona per catene di palestre multi-sede?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, è progettato specificamente per le catene. Ogni palestra ha il suo agente dedicato con configurazioni indipendenti (orari, corsi, prezzi locali), mentre dalla dashboard centrale puoi monitorare tutte le sedi in tempo reale, confrontare performance e gestire iscrizioni in modo uniforme.",
          },
        },
        {
          '@type': 'Question',
          name: 'Può gestire iscrizioni e abbonamenti?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente fornisce informazioni dettagliate su corsi, abbonamenti e promozioni attive, risponde alle domande dei potenziali clienti, qualifica il contatto e fissa un appuntamento con lo staff per chiudere l'iscrizione. Tutte le informazioni vengono inserite automaticamente nel tuo sistema gestionale.",
          },
        },
        {
          '@type': 'Question',
          name: 'Si integra con il mio gestionale palestra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente vocale AI si integra con i principali gestionali palestra italiani. Riceve le chiamate dei tuoi clienti, controlla disponibilità di lezioni e corsi direttamente dal tuo gestionale, fissa prenotazioni in automatico e aggiorna il sistema in tempo reale. Se utilizzi un gestionale custom, il nostro team configura l'integrazione dedicata.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa un agente vocale per una palestra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il costo dipende dal volume di chiamate e dal numero di sedi. Per una singola palestra offriamo piani a partire da 100 minuti inclusi. Per le catene abbiamo piani dedicati che scalano con il numero di sedi. Contatta il nostro team per un preventivo personalizzato.',
          },
        },
        {
          '@type': 'Question',
          name: 'In quanto tempo si attiva per una nuova sede?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'attivazione di una nuova sede richiede pochi minuti dalla dashboard: basta caricare orari, corsi, prezzi e FAQ specifiche di quella palestra. L'agente sarà operativo e pronto a rispondere alle chiamate immediatamente. Per configurazioni complesse o integrazioni custom, il nostro team ti assiste.",
          },
        },
        {
          '@type': 'Question',
          name: "L'agente vocale AI sostituisce il mio gestionale palestra?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No, l'agente vocale AI lo completa. Il tuo gestionale gestisce iscritti, abbonamenti e contabilità; l'agente AI gestisce le chiamate e le richieste verbali, alimentando il gestionale con dati strutturati. Insieme automatizzano l'intera customer experience della palestra, dalla prima chiamata alla rinnovazione dell'abbonamento.",
          },
        },
      ],
    },
    {
      // TODO: Marco to provide actual video URL, thumbnail, and upload date
      '@type': 'VideoObject',
      name: 'Agente Vocale AI per Palestre — Demo',
      description: 'Scopri come un agente vocale AI gestisce prenotazioni e richieste per una palestra.',
      thumbnailUrl: 'https://agent-ondemand.com/og-video-palestre.jpg',
      uploadDate: '2026-04-07',
      contentUrl: 'https://www.youtube.com/shorts/4DdtjucGR0A',
      embedUrl: 'https://www.youtube.com/embed/4DdtjucGR0A',
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
      <PalestrePage />
    </>
  );
}
