import React from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const router = useRouter();
  const links = ['Crea il tuo agente', 'Chi siamo'];

  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-full px-2 py-2 flex items-center shadow-sm relative">

      {/* Dropdown Agenti */}
      <div className="relative group">
        <button className="px-5 py-2.5 text-sm text-gray-600 group-hover:text-black transition-colors duration-200 font-medium flex items-center gap-1.5 focus:outline-none">
          Agenti
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 pt-4">
          <div className="bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-2xl p-2 shadow-xl overflow-hidden">

            <a
              href="/front-desk"
              onClick={(e) => handleNav(e, 'front-desk')}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
            >
              <span className="text-sm font-medium text-gray-900">Receptionist Front Desk</span>
              <span className="text-[10px] text-gray-500 group-hover/item:text-gray-600 leading-tight">Prenotazioni e supporto automatizzati</span>
            </a>

            <div className="h-px bg-gray-100 my-1 mx-2"></div>

            <a
              href="/real-estate"
              onClick={(e) => handleNav(e, 'real-estate')}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
            >
              <span className="text-sm font-medium text-gray-900">Agente Immobiliare</span>
              <span className="text-[10px] text-gray-500 group-hover/item:text-gray-600 leading-tight">Qualificazione lead e vendite</span>
            </a>

            <div className="h-px bg-gray-100 my-1 mx-2"></div>

            <a
              href="/palestre"
              onClick={(e) => handleNav(e, 'palestre')}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
            >
              <span className="text-sm font-medium text-gray-900">Receptionist Palestre</span>
              <span className="text-[10px] text-gray-500 group-hover/item:text-gray-600 leading-tight">Iscrizioni, corsi e assistenza per palestre</span>
            </a>

            <div className="h-px bg-gray-100 my-1 mx-2"></div>

            <a
              href="/venditore-auto"
              onClick={(e) => handleNav(e, 'venditore-auto')}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
            >
              <span className="text-sm font-medium text-gray-900">Venditore Auto</span>
              <span className="text-[10px] text-gray-500 group-hover/item:text-gray-600 leading-tight">Qualificazione lead e test drive automatici</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-1">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              if (link === 'Chi siamo') {
                handleNav(e, 'about');
              } else if (link === 'Crea il tuo agente') {
                handleNav(e, 'custom');
              } else {
                if (onNavigate) onNavigate('home');
              }
            }}
            className="px-5 py-2.5 text-sm text-gray-600 hover:text-black transition-colors duration-200 font-medium"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center ml-2 border-l border-gray-100 pl-4 gap-2">

        {/* Accedi Dropdown */}
        <div className="relative group">
          <button className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1.5 focus:outline-none">
            Accedi
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="absolute top-full right-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right -translate-y-2 group-hover:translate-y-0 pt-2 z-50">
            <div className="bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-2xl p-2 shadow-xl">
              <a href="https://receptionist.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-900">Receptionist</span>
              </a>
              <div className="h-px bg-gray-100 my-1 mx-2"></div>
              <a href="https://real-estate.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-900">Immobiliare</span>
              </a>
            </div>
          </div>
        </div>

        {/* Inizia Ora Dropdown */}
        <div className="relative group">
          <button className="bg-shore-blue text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20 flex items-center gap-2 focus:outline-none">
            Inizia Ora
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-all duration-300">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="absolute top-full right-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right -translate-y-2 group-hover:translate-y-0 pt-2 z-50">
            <div className="bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-2xl p-2 shadow-xl">
              <a href="https://receptionist.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-900">Receptionist</span>
              </a>
              <div className="h-px bg-gray-100 my-1 mx-2"></div>
              <a href="https://real-estate.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-sm font-medium text-gray-900">Immobiliare</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;