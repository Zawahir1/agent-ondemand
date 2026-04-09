import type { Metadata } from 'next';
import FrontDeskPage from '@/components/landing/FrontDeskPage';

export const metadata: Metadata = {
  title: 'Centralino Virtuale AI per Aziende | Agent on Demand — Front Desk 24/7',
  description: 'Il centralino virtuale di nuova generazione: agente vocale AI che risponde alle chiamate, prenota appuntamenti e qualifica i lead in italiano. Sempre attivo, sempre preciso.',
  openGraph: {
    title: 'Centralino Virtuale AI per Aziende | Agent on Demand — Front Desk 24/7',
    description: 'Il centralino virtuale di nuova generazione: agente vocale AI che risponde alle chiamate, prenota appuntamenti e qualifica i lead in italiano. Sempre attivo, sempre preciso.',
    type: 'website',
    locale: 'it_IT',
    // TODO: Marco to provide /og-front-desk.jpg
    images: ['/og-front-desk.jpg'],
  },
  alternates: {
    canonical: 'https://agent-ondemand.com/front-desk',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Centralino Virtuale AI per Aziende',
      description:
        'Agente vocale AI per front desk aziendale. Automatizza chiamate inbound, prenota appuntamenti, risponde alle FAQ e gestisce emergenze 24/7.',
      brand: { '@type': 'Brand', name: 'Agent on Demand' },
      category: 'AI Voice Agent',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://agent-ondemand.com/front-desk',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agent-ondemand.com' },
        { '@type': 'ListItem', position: 2, name: 'Agenti', item: 'https://agent-ondemand.com/#agenti' },
        { '@type': 'ListItem', position: 3, name: 'Receptionist Front Desk', item: 'https://agent-ondemand.com/front-desk' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Come funziona un centralino virtuale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un centralino virtuale AI risponde alle chiamate in entrata in modo naturale, riconosce la richiesta del cliente, fornisce informazioni, prenota appuntamenti o trasferisce la chiamata al reparto giusto. A differenza di un centralino tradizionale, non si limita a smistare: comprende e risolve. Funziona 24/7 e gestisce più chiamate in parallelo.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa un centralino virtuale AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il costo di un centralino virtuale AI dipende dal volume di chiamate, dalle integrazioni con i tuoi sistemi e dal livello di personalizzazione. Offriamo piani flessibili a partire da 100 minuti inclusi. Contatta il nostro team per un preventivo su misura per la tua azienda.',
          },
        },
        {
          '@type': 'Question',
          name: 'Perché usare un centralino virtuale in cloud?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un centralino virtuale in cloud elimina i costi di hardware e manutenzione, scala con la crescita della tua azienda, e funziona da qualsiasi sede. Aggiungere il livello AI lo trasforma in un assistente vero: non solo instrada le chiamate, ma le gestisce — risponde a domande, prenota appuntamenti e qualifica i lead automaticamente.",
          },
        },
        {
          '@type': 'Question',
          name: 'Come funziona un centralino virtuale per aziende?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Per le aziende, un centralino virtuale AI riceve tutte le chiamate in entrata, le smista per reparto o operatore, e risponde direttamente quando il team non è disponibile. Si integra con calendari, CRM e sistemi esistenti, fornendo riepiloghi automatici di ogni conversazione e notificando il team in tempo reale.",
          },
        },
        {
          '@type': 'Question',
          name: 'Posso trasferire chiamate a più operatori?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'AI receptionist può instradare automaticamente le chiamate al reparto o collaboratore corretto, sia su numeri fissi che mobili. Puoi configurare regole di smistamento personalizzate in base al tipo di richiesta, orario o priorità.",
          },
        },
        {
          '@type': 'Question',
          name: 'Supporta numeri fissi aziendali italiani?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sì, l'agente vocale si integra con numeri fissi italiani nativi e mantiene l'identità della tua azienda. I clienti non notano differenze rispetto a una receptionist tradizionale, ma beneficiano di tempi di risposta immediati.",
          },
        },
        {
          '@type': 'Question',
          name: 'In quanto tempo si attiva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "L'attivazione base richiede pochi minuti: ti basta configurare il tuo agente vocale dalla dashboard, caricare le FAQ aziendali e collegare il calendario. Per configurazioni professionali con integrazioni complesse, il nostro team ti assiste per una messa in produzione in pochi giorni.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto sembra umana la voce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Indistinguibile. Utilizziamo i più recenti modelli di sintesi audio che catturano il respiro, l'intonazione e le pause. Con una latenza inferiore a 500ms, la conversazione fluisce naturalmente senza pause robotiche.",
          },
        },
      ],
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
      <FrontDeskPage />
    </>
  );
}
