import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

interface CardData {
  number: string;
  title: string;
  description: string;
  bgImage: string;
  href?: string; // only set for clickable cards
  bgFallback?: string; // solid bg color when image may not exist
}

const cards: CardData[] = [
  {
    number: '01.',
    title: 'Receptionist Front Desk',
    description: "Automatizza prenotazioni, instradamento chiamate e richieste generali con un agente vocale naturale attivo 24/7.",
    bgImage: '/1.png',
    href: '/front-desk',
  },
  {
    number: '02.',
    title: 'Agente Immobiliare',
    description: "Qualifica lead, pianifica visite e gestisci follow-up istantaneamente con un agente addestrato per il settore.",
    bgImage: '/2.png',
    href: '/real-estate',
  },
  {
    number: '03.',
    title: 'Receptionist Palestre',
    description: "Gestisci iscrizioni, rinnovi, prenotazioni corsi e richieste informazioni per la tua palestra in automatico.",
    bgImage: '/gymfeatured.png',
    href: '/palestre',
  },
  {
    number: '04.',
    title: 'Venditore Auto',
    description: "Qualifica i potenziali acquirenti, fissa appuntamenti in concessionaria e gestisci richieste di preventivo.",
    bgImage: '/autofeatured.png',
  },
  {
    number: '05.',
    title: 'Segretaria Personale',
    description: "Gestisce il tuo calendario, filtra le chiamate e organizza le tue giornate come una vera assistente personale.",
    bgImage: '/segretaria-personalize.png',
  },
  {
    number: '06.',
    title: 'Customer Care',
    description: "Risolvi richieste di assistenza, gestisci reclami e offri supporto post-vendita senza mai mettere nessuno in attesa.",
    bgImage: '/4.png',
  },
  {
    number: '07.',
    title: 'Venditore Inbound Outbound',
    description: "Gestisci chiamate in entrata e campagne outbound con un agente di vendita vocale sempre pronto a convertire.",
    bgImage: '/inbound-outbound.png',
  },
  {
    number: '08.',
    title: 'Crea il tuo agente',
    description: "Hai un caso d'uso specifico? Costruiamo un agente vocale su misura per i tuoi processi e il tuo settore.",
    bgImage: '/5.png',
  },
];

interface CardListProps {
  onNavigate: (page: string) => void;
}

const CardInner = ({ card }: { card: CardData }) => (
  <>
    {/* Background image with strong gradient overlay for readability */}
    <div className={`absolute inset-0 z-0 ${card.bgFallback ?? ''}`}>
      <Image
        src={card.bgImage}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </div>

    {/* Top row: number + arrow */}
    <div className="relative z-10 flex justify-between items-start">
      <span className="text-sm font-mono text-white/70">{card.number}</span>
      {card.href && (
        <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors text-white">
          <ArrowIcon />
        </div>
      )}
    </div>

    {/* Bottom: title + description on hover */}
    <div className="relative z-10 mt-auto flex flex-col gap-2">
      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
        {card.title}
      </h3>
      <p className="text-white/80 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
        {card.description}
      </p>
    </div>
  </>
);

const baseCardClasses =
  "group relative rounded-[24px] overflow-hidden aspect-square flex flex-col justify-between p-5 transition-all duration-500 border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20";

const CardList: React.FC<CardListProps> = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) =>
        card.href ? (
          <Link
            key={card.number}
            href={card.href}
            className={baseCardClasses}
          >
            <CardInner card={card} />
          </Link>
        ) : (
          <div
            key={card.number}
            className={baseCardClasses + " cursor-default"}
          >
            <CardInner card={card} />
          </div>
        )
      )}
    </div>
  );
};

export default CardList;
