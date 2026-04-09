
import React from 'react';
import Image from 'next/image';

const MeetFounderSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto relative select-none px-4 md:px-0">
      <div className="bg-[#111111] rounded-[40px] border border-gray-800 p-8 md:p-12 lg:p-20 flex flex-col md:flex-row gap-12 lg:gap-24 items-center shadow-sm relative overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-shore-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex-1 relative z-10 flex flex-col justify-center text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="w-10 h-[1px] bg-shore-blue"></span>
            <span className="text-shore-blue font-mono text-[10px] uppercase tracking-[0.3em] font-semibold">Il Fondatore</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-10 leading-[1.1] tracking-tight">
            “Non abbiamo costruito questa tecnologia per sostituire il tuo team,” <span className="text-shore-blue italic font-serif"> ma per potenziarlo.</span>."
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
            Marco Ferrario ha fondato Agent on Demand con una tesi semplice:
            <strong className="text-white font-medium">il futuro delle aziende non dipende dall’automazione bruta, ma dalla reattività umana aumentata.</strong>.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight">Marco Ferrario</span>
              <span className="text-gray-500 text-xs font-medium tracking-wide uppercase">Fondatore & CEO</span>
            </div>
            <div className="h-10 w-px bg-gray-800"></div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Connesso</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%] relative order-1 md:order-2">
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative shadow-2xl border border-gray-800 bg-gray-900">
            {/* Portrait of a bald man in a grey suit - matching the visual reference provided */}
            <Image
              src="/Marco.jpg"
              alt="Marco Ferrario"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle vignette on the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating accent badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#1E293B] border border-gray-700 px-6 py-5 rounded-2xl shadow-2xl z-20 hidden sm:block transform -rotate-1">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono text-shore-blue font-bold uppercase tracking-widest">Visione</span>
              <span className="text-sm font-medium text-white tracking-tight">Ispirazione & Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetFounderSection;
