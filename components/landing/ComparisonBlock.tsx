interface ComparisonBlockProps {
  /** The non-highlighted part of the heading, e.g. "Receptionist tradizionale" */
  heading: string;
  /** The blue-highlighted part of the heading, e.g. "vs Agente Vocale" */
  headingAccent?: string;
  leftTitle?: string;
  leftItems: string[];
  rightTitle?: string;
  rightItems: string[];
  ctaText: string;
  ctaHref?: string;
}

const XIcon = () => (
  <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ComparisonBlock({
  heading,
  headingAccent,
  leftTitle = 'Tradizionale',
  leftItems,
  rightTitle = 'Agente Vocale',
  rightItems,
  ctaText,
  ctaHref = '#contact',
}: ComparisonBlockProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 leading-[1.1] italic">
          {heading}
          {headingAccent && (
            <>
              {' '}
              <span className="text-[#0055FF] not-italic">{headingAccent}</span>
            </>
          )}
        </h2>
      </div>

      {/* Two-column cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Left — negatives */}
        <div className="bg-white border border-gray-200 rounded-[32px] p-8 md:p-10 shadow-sm">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">{leftTitle}</p>
          <ul className="flex flex-col gap-4">
            {leftItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-base font-light">
                <XIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — positives */}
        <div className="bg-[#111111] border border-gray-800 rounded-[32px] p-8 md:p-10 shadow-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0055FF] mb-6">{rightTitle}</p>
          <ul className="flex flex-col gap-4">
            {rightItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-base font-light">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href={ctaHref}
          className="bg-[#0055FF] text-white px-10 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/25 inline-flex items-center gap-2"
        >
          {ctaText}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
