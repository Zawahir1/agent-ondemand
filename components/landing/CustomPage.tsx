import React from 'react';
import ContactSection from './ContactSection';
import Footer from './Footer';
import BackgroundGlow from './BackgroundGlow';

interface CustomPageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

const CustomPage: React.FC<CustomPageProps> = ({ onNavigate }) => {
  const features = [
    { number: "01.", title: "Vendite Outbound", desc: "Agenti per chiamate a freddo che qualificano i lead e fissano appuntamenti con persistenza umana.", color: "bg-shore-card1", textColor: "text-white", arrowBg: "bg-white/20 hover:bg-white/30", icon: <span>📊</span> },
    { number: "02.", title: "Supporto Inbound", desc: "Supporto di Livello 1 h24 per FAQ, risoluzione problemi e creazione ticket.", color: "bg-shore-card2", textColor: "text-white", arrowBg: "bg-white/10 hover:bg-white/20", icon: <span>🎧</span> },
    { number: "03.", title: "Gestione agende", desc: "Si sincronizza con più calendari per negoziare orari senza scambi di email infiniti.", color: "bg-shore-card3", textColor: "text-white", arrowBg: "bg-white/10 hover:bg-white/20", icon: <span>📅</span> },
    { number: "04.", title: "Sondaggi Clienti", desc: "Esegue sondaggi NPS e chiamate di feedback con tassi di completamento elevati.", color: "bg-shore-card2", textColor: "text-white", arrowBg: "bg-white/10 hover:bg-white/20", icon: <span>📝</span> },
    { number: "05.", title: "Recupero Crediti", desc: "Gentili solleciti per fatture scadute con elaborazione sicura del pagamento al telefono.", color: "bg-shore-card4", textColor: "text-gray-900", arrowBg: "bg-black/5 hover:bg-black/10", icon: <span>💳</span> },
    { number: "06.", title: "Dispatch Emergenze", desc: "Instradamento istantaneo per chiamate di servizio urgenti, filtrando i casi non critici.", color: "bg-shore-card2", textColor: "text-white", arrowBg: "bg-white/10 hover:bg-white/20", icon: <span>🔔</span> },
    { number: "07.", title: "Screening Reclutamento", desc: "Pre-seleziona i candidati, pone domande di qualificazione e fissa i colloqui.", color: "bg-shore-card3", textColor: "text-white", arrowBg: "bg-white/10 hover:bg-white/20", icon: <span>🤝</span> },
    { number: "08.", title: "Arricchimento Dati", desc: "Chiama le aziende per verificare orari e dettagli di contatto, aggiornando il CRM.", color: "bg-shore-card5", textColor: "text-gray-900", arrowBg: "bg-black/5 hover:bg-black/10", icon: <span>🗄️</span> },
    { number: "09.", title: "E molto altro...", desc: "Offriamo ogni tipo di automazione vocale su misura.", color: "bg-shore-card1", textColor: "text-white", arrowBg: "bg-white/20 hover:bg-white/30", icon: <span>✨</span> }
  ];

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
      <BackgroundGlow />
      <div className="w-full px-4 mb-24 pt-20">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-xs font-mono uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
            Soluzioni Personalizzate
          </div>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1] text-gray-900 mb-8">
            Hai in mente un'automazione specifica? <br />
            <span className="text-gray-500">Gestiamo anche progetti su misura.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Dal raggio d'azione ad alto volume ai workflow interni complessi, il nostro team progetta agenti AI personalizzati per la tua infrastruttura.
          </p>
        </div>
      </div>

      <div className="w-full px-4 mb-32 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} number={f.number} title={f.title} desc={f.desc} color={f.color} textColor={f.textColor} arrowBg={f.arrowBg} icon={f.icon} />
          ))}
        </div>
      </div>

      <div className="w-full px-4 mb-32 max-w-[1400px]">
        <div className="bg-[#101015] border border-gray-800 rounded-[40px] p-8 md:p-20 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">Creato da Ingegneri, <br /><span className="text-gray-500">Non Marketer.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Il nostro team è composto da ricercatori ML ed esperti di sintesi vocale. Non ci limitiamo a fare wrapper di API generiche; addestriamo modelli per catturare le sfumature della conversazione umana.
            </p>
            <div className="flex gap-12">
              <div><div className="text-4xl font-bold text-white mb-1">50+</div><div className="text-xs text-gray-500 uppercase tracking-widest">Sviluppatori</div></div>
              <div><div className="text-4xl font-bold text-white mb-1">10M+</div><div className="text-xs text-gray-500 uppercase tracking-widest">Chiamate Gestite</div></div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

const FeatureCard = ({ number, title, desc, color, textColor, arrowBg, icon }: any) => (
  <div className={`group relative rounded-[32px] p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 min-h-[320px] border border-transparent hover:border-black/5 ${color} ${textColor}`}>
    <div className="flex justify-between items-start z-10"><span className="text-base font-medium opacity-90 font-mono">{number}</span><div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm ${arrowBg}`}><ArrowIcon /></div></div>
    <div className="z-10 flex flex-col gap-4 mt-auto"><div className="mb-1 opacity-90 scale-90 origin-left">{icon}</div><h3 className="text-2xl font-medium leading-tight tracking-tight">{title}</h3><div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden"><p className="text-base font-normal leading-relaxed opacity-85">{desc}</p></div></div>
  </div>
);

export default CustomPage;