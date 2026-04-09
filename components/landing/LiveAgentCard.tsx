'use client'

import React, { useEffect, useRef } from 'react';

// Animated waveform — 4 bars pulsing at randomised heights (mirrors Hero.tsx)
const Waveform = () => {
  const bars = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const randomHeight = () => Math.floor(Math.random() * 70 + 30);
    const tick = () => { bars.forEach(bar => { if (bar.current) bar.current.style.height = `${randomHeight()}%`; }); };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex items-center gap-[4px] h-6 w-7 flex-shrink-0">
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

interface LiveAgentCardProps {
  /** Short label shown above "Provalo ora" — e.g. "RECEPTIONIST · LIVE" */
  label: string;
  /** tel: href — e.g. "tel:+390287364217" */
  phoneHref: string;
}

/**
 * Inline "live agent" call card — sits alongside the primary CTA in the hero.
 * One tap opens the native dialer immediately.
 */
const LiveAgentCard: React.FC<LiveAgentCardProps> = ({ label, phoneHref }) => (
  <a
    href={phoneHref}
    aria-label={`Chiama — ${label}`}
    className="inline-flex items-center gap-3 px-4
      h-[58px]
      bg-white border border-gray-200/80 rounded-2xl
      shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)]
      hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.15)]
      transition-all duration-300 group text-left"
  >
    {/* Waveform */}
    <Waveform />

    {/* Text */}
    <div className="flex flex-col gap-0.5">
      <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-gray-400 leading-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
        {label}
      </span>
      <span className="text-sm font-bold text-gray-900 leading-snug whitespace-nowrap">
        Provalo ora
      </span>
    </div>

    {/* Phone button */}
    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-shore-blue flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z"/>
      </svg>
    </div>
  </a>
);

export default LiveAgentCard;
