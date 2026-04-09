import React from 'react';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-shore-blue flex-shrink-0">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PricingCard = ({
  title,
  price,
  setupFee,
  features,
  isPremium = false,
  onClick,
  start = false
}: {
  title: string,
  price: string,
  setupFee: string,
  features: string[],
  isPremium?: boolean,
  onClick?: () => void,
  start?: boolean
}) => (
  <div className={`relative rounded-[32px] p-8 md:p-10 flex flex-col h-full border transition-all duration-300 ${isPremium
    ? 'bg-shore-blue text-white border-transparent shadow-2xl shadow-blue-900/40 transform md:-translate-y-4'
    : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300 shadow-sm'
    }`}>

    <div className="mb-8">
      <h3 className="text-2xl font-medium opacity-90">{title}</h3>
    </div>

    <div className="flex-1 space-y-4 mb-10">
      <div className={`text-xs font-bold uppercase tracking-wider mb-6 ${isPremium ? 'text-blue-200' : 'text-gray-400'}`}>
        Tutto Incluso
      </div>
      {features.map((feat, idx) => (
        <div key={idx} className="flex items-start gap-3 text-sm font-medium opacity-90 leading-snug">
          {isPremium ? (
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          ) : (
            <CheckIcon />
          )}
          <span>{feat}</span>
        </div>
      ))}
    </div>

    <button
      onClick={onClick}
      className={`w-full py-4 rounded-xl font-medium text-center transition-transform active:scale-95 duration-200 ${isPremium
        ? 'bg-white text-shore-blue hover:bg-blue-50 shadow-lg'
        : 'bg-gray-100 text-gray-900 border border-transparent hover:bg-gray-200'
        }`}>
      Contattaci Ora
    </button>
  </div>
);

interface PricingSectionProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate }) => {
  const frontDeskFeatures = [
    "100 Minuti inclusi",
    "Qualificazione lead inbound",
    "Follow-up via email",
    "Riepilogo a fine chiamata",
    "Sincronizzazione calendario",
    "Linee multiple contemporanee"
  ];

  const realEstateFeatures = [
    "100 Minuti inclusi",
    "Qualificazione lead inbound",
    "Follow-up via email",
    "Riepilogo a fine chiamata",
    "Sincronizzazione calendario",
    "Linee multiple contemporanee",
    "Estrazione dati automatizzata"
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20 md:py-32" id="pricing">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1] tracking-tight font-normal text-gray-900 mb-8">
          Assumi una forza lavoro 24/7
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PricingCard
          title="Reception Front Desk"
          price="€140"
          setupFee="€200"
          features={frontDeskFeatures}
          onClick={() => onNavigate?.('home', '#contact')}
          start={true}
        />
        <PricingCard
          title="Agente Immobiliare"
          price="€120"
          setupFee="€200"
          features={realEstateFeatures}
          isPremium={true}
          onClick={() => onNavigate?.('home', '#contact')}
          start={true}
        />
      </div>
    </section>
  );
};

export default PricingSection;