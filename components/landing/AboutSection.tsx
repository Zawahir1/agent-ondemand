'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import LeadGenModal, { LeadData } from './LeadGenModal';
import { firePhoneRevealConversion } from '@/lib/gtag';

const ServiceTag = ({ label }: { label: string }) => (
  <span className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-all cursor-default">
    {label}
  </span>
);

const Metric = ({ value, label }: { value: string, label: React.ReactNode }) => (
  <div className="relative bg-[#111111] rounded-[24px] border border-gray-800 hover:border-shore-blue/50 transition-colors group shadow-sm flex flex-col justify-between p-5 md:p-7 min-h-[160px] md:min-h-[190px]">
    <span className="text-4xl md:text-5xl lg:text-6xl font-normal text-white group-hover:text-shore-blue transition-colors tracking-tight">{value}</span>
    <span className="text-sm text-gray-400 leading-snug">{label}</span>
  </div>
);

const PhoneCard = ({
  title,
  number,
  type,
  colorClass,
  isRevealed,
  onReveal
}: {
  title: string,
  number: string,
  type: string,
  colorClass: string,
  isRevealed: boolean,
  onReveal: () => void
}) => (
  <div
    onClick={!isRevealed ? onReveal : undefined}
    className="relative group cursor-pointer overflow-hidden rounded-[24px] bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm"
  >
    <div className={`absolute -right-16 -bottom-16 w-56 h-56 rounded-full ${colorClass} opacity-0 blur-[80px] group-hover:opacity-15 transition-opacity duration-700`}></div>

    <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 gap-4">
      {/* Top row: badge + live indicator */}
      <div className="flex justify-between items-center">
        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 w-fit ${colorClass.replace('bg-', 'text-')}`}>
          {type}
        </span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorClass} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${colorClass}`}></span>
          </span>
          <span className="text-xs text-gray-500 font-medium">Dal Vivo</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl text-gray-900 font-bold leading-snug">{title}</h3>

      {/* Phone number */}
      <div className={`transition-all duration-700 ${!isRevealed ? 'blur-[8px] opacity-30 select-none' : 'blur-0 opacity-100'}`}>
        {isRevealed ? (
          <a
            href={`tel:${number.replace(/\s+/g, '')}`}
            className="text-xl md:text-2xl font-normal tracking-tight text-gray-400 hover:text-shore-blue transition-colors duration-300 inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            {number}
          </a>
        ) : (
          <div className="text-xl md:text-2xl font-normal tracking-tight text-gray-400">
            +39 (XX) XXX-XXXX
          </div>
        )}
      </div>

      {!isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <span className="bg-shore-blue text-white px-4 py-1.5 rounded-full font-mono text-[10px] font-bold shadow-lg uppercase tracking-wider">Clicca per Rivelare</span>
        </div>
      )}
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRevealRequest = () => {
    if (!isRevealed) {
      setIsModalOpen(true);
    }
  };

  const handleModalSubmit = (data: LeadData) => {
    setIsModalOpen(false);
    firePhoneRevealConversion();
    setIsRevealed(true);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20">

      <LeadGenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        title="Linea Demo Agente"
      />

      <div className="flex flex-col gap-6">

        <div className="w-full bg-[#111111] rounded-[40px] p-8 md:p-12 border border-gray-800 shadow-sm flex flex-col items-center text-center justify-between">
          <div className="w-full">
            <h2 className="text-4xl md:text-6xl font-normal leading-[1.1] tracking-tight text-white mb-6">
              <span className="text-white">Non semplici agenti AI.</span> <br />
              <span className="text-gray-500 text-3xl md:text-4xl">Operatori vocali che lavorano al posto tuo, migliorando ogni interazione con i tuoi clienti.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mt-4 mx-auto">
              Sviluppiamo agenti vocali AI che parlano in modo naturale, seguono i tuoi processi e si integrano con i tuoi sistemi.
              <span className="text-white font-bold"> Lavorano come il tuo team, senza costi fissi né limiti di orario.</span>
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Un progetto</span>
            <Image src="/logo-bw.png" alt="Sales on Demand" width={120} height={32} className="h-8 w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Metric value="<3s" label={<><span className="font-semibold text-white">Risposta</span> in &lt;3s</>} />
          <Metric value="0" label={<><span className="font-semibold text-white">Nessuna</span><br />chiamata persa</>} />
          <Metric value="24/7" label={<>Operativi<br /><span className="font-semibold text-white">senza interruzioni</span></>} />
          <Metric value="30+" label={<>Lingue <span className="font-semibold text-white">supportate</span></>} />
        </div>

        <div id="agent-demo" className="mt-16 scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            <div className="md:w-1/3 flex flex-col gap-3 p-4">
              <span className="text-shore-blue font-mono text-sm tracking-wide">testa i nostri agenti.</span>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Provali davvero:<br />
                <span className="text-2xl md:text-3xl font-bold">parla con i nostri agenti vocali AI</span>
              </h3>
              <p className="text-gray-500 font-light mt-1 leading-relaxed">
                Chiama i numeri qui sotto per interagire in tempo reale con i nostri agenti vocali. Scopri come gestiscono richieste, appuntamenti e conversazioni complesse in autonomia.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PhoneCard
                title="Receptionist aziende"
                type="Receptionist"
                number="+39 02 8736 4217"
                colorClass="bg-shore-blue"
                isRevealed={isRevealed}
                onReveal={handleRevealRequest}
              />
              <PhoneCard
                title="Agente immobiliare"
                type="Immobiliare"
                number="+39 02 8736 4324"
                colorClass="bg-purple-500"
                isRevealed={isRevealed}
                onReveal={handleRevealRequest}
              />
              {/* TODO: Marco to provide dedicated phone number for Palestre demo — using Receptionist number temporarily */}
              <PhoneCard
                title="Receptionist Palestre"
                type="Palestre"
                number="+39 02 8736 4217"
                colorClass="bg-emerald-500"
                isRevealed={isRevealed}
                onReveal={handleRevealRequest}
              />
              {/* TODO: Marco to provide dedicated phone number for Venditore Auto demo — using Receptionist number temporarily */}
              <PhoneCard
                title="Venditore Auto"
                type="Concessionari"
                number="+39 02 8736 4217"
                colorClass="bg-amber-500"
                isRevealed={isRevealed}
                onReveal={handleRevealRequest}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;