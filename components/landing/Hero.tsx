'use client'

import React, { useEffect, useRef } from 'react';
import ParticleSphere from './ParticleSphere';
import StarField from './StarField';

interface HeroProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

// Animated waveform — 4 bars pulsing at randomised heights
const Waveform = () => {
  const bars = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const randomHeight = () => Math.floor(Math.random() * 70 + 30); // 30–100%
    const tick = () => {
      bars.forEach(bar => {
        if (bar.current) bar.current.style.height = `${randomHeight()}%`;
      });
    };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex items-center gap-[4px] h-7 w-8 flex-shrink-0">
      {bars.map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className="w-[3px] rounded-full bg-shore-blue self-center transition-all duration-200 ease-in-out"
          style={{ height: '50%' }}
        />
      ))}
    </div>
  );
};

const scrollToDemo = () => {
  const el = document.getElementById('agent-demo');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  // Brief soft glow pulse on the section
  el.style.transition = 'background-color 200ms ease';
  el.style.backgroundColor = 'rgba(0, 85, 255, 0.04)';
  setTimeout(() => { el.style.backgroundColor = ''; }, 800);
};

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3 mix-blend-multiply"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 flex items-center h-full">

        {/* Left content */}
        <div className="flex flex-col items-start gap-6 md:gap-8 max-w-4xl">
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium leading-[0.95] tracking-[-0.04em] text-gray-900">
              Agenti vocali,<br />
              <span className="text-shore-blue italic font-serif tracking-tight">su misura per il tuo business.</span>
            </h1>
          </div>

          <div className="max-w-md md:max-w-lg">
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed tracking-tight">
              Automatizza chiamate inbound e outbound con agenti vocali intelligenti, pronti all&apos;uso e sempre disponibili.
            </p>
          </div>

          {/* Single CTA button — dropdown to platform selection */}
          <div className="flex gap-5">
            <div className="relative group">
              <button className="bg-shore-blue text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20 flex items-center gap-2 focus:outline-none">
                Vai alla dashboard
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-all duration-300">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 pt-2 z-50">
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
        </div>

      </div>

      {/* Live agent card — absolutely positioned bottom-right of hero, scrolls with page */}
      <button
        onClick={scrollToDemo}
        aria-label="Provalo ora — parla con un agente AI"
        className="absolute bottom-8 right-8 md:bottom-10 md:right-10 lg:right-24 z-10
          w-[240px] md:w-[280px] h-[84px] md:h-[96px]
          flex items-center gap-3 px-4
          bg-white/90 backdrop-blur-sm border border-gray-200/80 rounded-2xl
          shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)]
          hover:-translate-y-0.5 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.16)]
          transition-all duration-300 group text-left"
      >
        {/* Waveform */}
        <Waveform />

        {/* Text */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-gray-400 leading-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            Agente AI · Live
          </span>
          <span className="text-[15px] font-bold text-gray-900 leading-snug">
            Provalo ora
          </span>
        </div>

        {/* Phone button */}
        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-shore-blue flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z"/>
          </svg>
        </div>
      </button>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.01)_100%)]"></div>

      {/* Bottom-left label */}
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
