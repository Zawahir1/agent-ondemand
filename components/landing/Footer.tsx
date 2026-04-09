import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParentLogo from './ParentLogo';

interface FooterProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation = (page: string, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    }
  };

  return (
    <footer className="w-full bg-[#111111] border-t border-gray-800 pt-24 pb-12 px-6 md:px-10 mt-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 mb-24">

          <div className="flex flex-col gap-10 max-w-lg">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col font-bold text-2xl leading-[0.8] tracking-tight text-white select-none w-min">
                  <div>Agent on</div>
                  <div>Demand.</div>
                </div>
                <div className="h-8 w-px bg-gray-800"></div>
                <Image src="/logo-bw.png" alt="Sales on Demand" width={120} height={32} className="h-8 w-auto opacity-70" />
              </div>

              <div className="flex items-center gap-2.5 text-gray-400 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <span className="font-mono uppercase tracking-wider text-xs">Disponibile 24/7</span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-sm:text-sm">
                Costruiamo il ponte tra la connessione umana e l'intelligenza artificiale. Agenti vocali professionali pronti per essere attivati istantaneamente.

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email</span>
                <a href="mailto:info@agentondemand.it" className="text-lg text-white hover:text-shore-blue transition-colors font-medium">
                  info@agentondemand.it
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Telefono</span>
                <a href="tel:+390282959857" className="text-lg text-white hover:text-shore-blue transition-colors font-medium">
                  +39 02 8295 9857
                </a>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sede Operativa</span>
                <span className="text-white font-medium">
                  Via Monte di Pietà 21, 20121 Milano (MI)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <div className="bg-[#0B1120] border border-gray-800 rounded-[40px] p-8 md:p-10 max-w-md w-full hover:shadow-2xl transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF8A00]"></div>
                <div className="w-10 h-3 rounded-full bg-[#6366F1]"></div>
                <div className="ml-auto relative h-8 w-24">
                  <Image src="/logo-bw.png" alt="Sales on Demand" fill className="object-contain opacity-70" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Unisciti a Agent on Demand Ora</h3>
              <p className="text-gray-400 text-sm mb-8 leading-snug">
                Sperimenta il vantaggio sleale di una forza lavoro automatizzata 24 ore su 24.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => handleNavigation('front-desk', '#demo-line')}
                  className="group w-full flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl font-medium transition-transform active:scale-95 duration-200 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-shore-blue group-hover:scale-125 transition-transform"></span>
                    <span>Testa Receptionist Vocale</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => handleNavigation('real-estate', '#demo-line')}
                  className="group w-full flex items-center justify-between bg-white/5 text-white border border-white/10 px-6 py-4 rounded-xl font-medium transition-all active:scale-95 duration-200 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform"></span>
                    <span>Testa Agente Immobiliare</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
          <div className="text-center md:text-left leading-relaxed">
            <span className="text-white font-bold">AGENT ON DEMAND</span> © 2026 — Sales on Demand S.r.l. <br className="md:hidden" />
            <span className="mx-2 hidden md:inline">|</span>
            P.IVA 10808470966 <span className="mx-2 hidden md:inline">|</span> TUTTI I DIRITTI RISERVATI
          </div>
          <div className="flex gap-8">
            <Link href="/pricing" className="hover:text-white transition-colors">Griglia Prezzi</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Termini di Utilizzo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
