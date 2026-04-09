
import React from 'react';

const testimonials = [
  {
    id: 1,
    type: 'scaleup',
    quote: "Non abbiamo perso una singola richiesta di visita da quando abbiamo implementato l'agente AI. Gestisce la pianificazione perfettamente.",
    name: "Marco Spina",
    role: "Broker Titolare, Spina Immobili",
  },
  {
    id: 2,
    type: 'mimo',
    quote: "Il volume del nostro front desk era travolgente. L'AI ora gestisce l'80% delle chiamate di routine, permettendo allo staff di concentrarsi sui pazienti.",
    name: "Dr. Elena Rossi",
    role: "Direttrice Sanitaria, Clinica Centrale City",
  },
  {
    id: 3,
    type: 'scaleup', 
    quote: "La voce è incredibilmente naturale. Molti clienti non si rendono conto di parlare con un'AI finché non glielo diciamo.",
    name: "Giacomo H.",
    role: "Agente Senior, Proprietà del Secolo",
  },
  {
    id: 4,
    type: 'mimo', 
    quote: "La configurazione è stata istantanea. Abbiamo inserito le nostre FAQ e l'agente gestiva le chiamate 10 minuti dopo.",
    name: "Sara Bianchi",
    role: "Responsabile Operativa, Dental Flow",
  }
];

const TestimonialCard = ({ item }: { item: any }) => (
  <div className="w-[400px] h-[200px] rounded-[24px] overflow-hidden flex flex-shrink-0 bg-white border border-gray-200 mx-3 shadow-sm">
    <div className={`w-[40%] flex items-center justify-center p-4 relative ${item.type === 'mimo' ? 'bg-[#e0e7ff]' : 'bg-gray-50'}`}>
       {item.type === 'scaleup' && (
          <div className="flex items-center gap-1.5">
             <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-600 rounded flex-shrink-0"></div>
             <span className="text-black font-bold text-base tracking-tight leading-none">Estate<sup className="text-[8px]">Pro</sup></span>
          </div>
       )}
       {item.type === 'mimo' && (
          <>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-[#6366f1] opacity-30 blur-sm"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-[#3b82f6] opacity-20"></div>
            </div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span className="text-[#1e1b4b] font-bold text-lg tracking-tighter flex items-center gap-1">
                    <span className="text-xl leading-none">+</span> Clinica
                </span>
            </div>
          </>
       )}
    </div>
    
    <div className="w-[60%] p-5 flex flex-col justify-between bg-white">
        <p className="text-gray-700 text-sm font-light leading-snug">
           “{item.quote}”
        </p>
        <div className="mt-2">
            <p className="text-gray-900 text-xs font-medium">{item.name}</p>
            <p className="text-gray-500 text-[10px] mt-0.5 truncate">{item.role}</p>
        </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {testimonials.map((item, index) => (
                <li key={`original-${index}`}>
                    <TestimonialCard item={item} />
                </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
            {testimonials.map((item, index) => (
                <li key={`duplicate-${index}`}>
                    <TestimonialCard item={item} />
                </li>
            ))}
          </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
