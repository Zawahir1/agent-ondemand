import React from 'react';
import ParticleSphere from './ParticleSphere';
import StarField from './StarField';

interface HeroProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      {/* Background Particle Effects - Untouched as requested */}
      <div className="absolute inset-0 z-0">
        <StarField />
        <ParticleSphere />
        {/* Subtle grid field */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '10px 10px'
        }}></div>

        {/* Decorative blurred balls */}
        {/* Top-right blue blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-multiply"></div>
        {/* Bottom-left blue blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3 mix-blend-multiply"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex items-center h-full">

        {/* Left Aligned Content - Centered Vertically and constrained to prevent overflow */}
        <div className="flex flex-col items-start gap-6 md:gap-8 max-w-4xl">
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium leading-[0.95] tracking-[-0.04em] text-gray-900">
              Agenti vocali,<br />
              <span className="text-shore-blue italic font-serif tracking-tight">su misura per il tuo business.</span>
            </h1>
          </div>

          {/* SEO H2 subtitle — keyword-targeted, visually subordinate to H1 */}
          <h2 className="text-base md:text-lg font-light text-gray-400 tracking-tight max-w-2xl">
            Agenti Vocali AI per Aziende — Centralino virtuale, qualificazione lead, gestione clienti 24/7
          </h2>

          <div className="max-w-md md:max-w-lg">
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed tracking-tight">
              Automatizza chiamate inbound e outbound con agenti vocali intelligenti, pronti all’uso e sempre disponibili.
            </p>
          </div>
          <div className='flex gap-5'>
            <button
              onClick={() => { if (onNavigate) onNavigate('home', '#agent-demo'); }}
              className="bg-gray-500 text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Prova un agente vocale
            </button>
            <button
              onClick={() => { if (onNavigate) onNavigate('coming-soon'); }}
              className="bg-shore-blue text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Vai alla dashboard
            </button>
          </div>
          {/* Simple clean call to action or scroll indicator could go here, but keeping it minimal as requested */}
        </div>


      </div>

      {/* Subtle vignette for depth on white */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.01)_100%)]"></div>

      {/* Optional minimal bottom detail to anchor the design */}
      <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 z-10 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="w-8 h-[1px] bg-gray-200"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-black">Intelligenza & Interazione</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
