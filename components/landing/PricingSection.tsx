import React from 'react';

interface PricingSectionProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = () => {
  // Phase 2: replace this CTA block with vertical-specific call recordings player
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-[120px]" id="pricing">
      <div className="flex flex-col items-center text-center gap-8">
        <h2 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1] tracking-tight font-normal text-gray-900">
          Assumi una forza lavoro 24/7
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
          Hai un caso d&apos;uso specifico? Costruiamo un agente vocale su misura per il tuo business — integrato nei tuoi processi e pronto a lavorare 24/7.
        </p>
        <a
          href="#contact"
          className="bg-shore-blue text-white px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 inline-block"
        >
          Contatta un consulente
        </a>
      </div>
    </section>
  );
};

export default PricingSection;
