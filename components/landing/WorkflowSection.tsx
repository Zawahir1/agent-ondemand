import React from 'react';

const CheckIcon = () => (
  <div className="w-4 h-4 rounded-full bg-shore-blue flex items-center justify-center flex-shrink-0">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const UserIcon = () => (
  <div className="w-6 h-6 rounded-full border border-dashed border-gray-500 flex items-center justify-center opacity-60 text-gray-400">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
);

const Card = ({ title, active = false }: { title: string, active?: boolean }) => (
  <div className="bg-[#1E293B] p-4 rounded-2xl flex flex-col gap-4 border border-gray-700 shadow-md hover:bg-[#253248] transition-all cursor-pointer group">
    <div className="flex items-start gap-3">
      <CheckIcon />
      <span className={`text-sm font-medium leading-tight ${active ? 'text-white' : 'text-gray-200'}`}>{title}</span>
    </div>
    <div className="flex justify-start">
      <UserIcon />
    </div>
  </div>
);

const Column = ({ title, count, children }: { title: string, count: number, children?: React.ReactNode }) => (
  <div className="flex flex-col gap-4 min-w-[260px] flex-1">
    <div className="flex items-center justify-between px-1">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
        <span className="text-xs text-gray-500">{count}</span>
      </div>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        <div className="w-1 h-1 rounded-full bg-gray-700"></div>
      </div>
    </div>
    <div className="flex flex-col gap-3">
      {children}
    </div>
  </div>
);

import { motion } from 'framer-motion';

// ... (CheckIcon, UserIcon, Card, Column components remain unchanged)

interface WorkflowSectionProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto mb-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-shore-blue font-mono text-sm tracking-wider uppercase mb-6 inline-block"
          >
            Vai in diretta in Pochi minuti
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-gray-900"
          >
            <span className="text-shore-blue">Due modi per iniziare
            </span>
          </motion.h2>
          <br />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1] tracking-tight text-gray-900">
              Iscriviti istantaneamente           <br />
              <span style={{ lineHeight: '0' }} className="text-gray-400 text-3xl md:text-4xl lg:text-5xl ">
                Connetti il tuo calendario e vai live in 5 minuti con un agente vocale pronto all’uso.
              </span>{' '}
            </h2>
            <div className="mt-8 mb-12">
              <button
                onClick={() => { if (onNavigate) onNavigate('coming-soon'); }}
                className="bg-shore-blue text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Vai alla dashboard
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1] tracking-tight text-gray-900">
              Configurazione professionale
              <br />
              <span className="text-gray-400 text-3xl md:text-4xl lg:text-5xl leading-0 tracking-tight">
                Parla con il nostro team.
              </span>{' '}<br></br>
              <span className="text-gray-400 text-3xl md:text-4xl lg:text-5xl leading-0 tracking-tight">
                Ti aiutiamo a progettare e configurare un agente vocale su misura, integrato nei tuoi processi.
              </span>{' '}
            </h2>
            <div className="mt-8">
              <button
                onClick={() => { if (onNavigate) onNavigate('home', '#contact'); }}
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg"
              >
                Contatta un consulente
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full"> {/* Container to separate heading */}
        <div className="flex justify-center mb-8">
          <h3 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight text-center">
            Attiva il tuo agente vocale <span className="text-shore-blue">in pochi minuti</span>
          </h3>
        </div>

        <div className="bg-[#0B1120] border border-gray-800 rounded-[40px] p-6 md:p-10 w-full overflow-x-auto">
          <div className="flex gap-6 min-w-[1000px]">
            <Column title="1. Seleziona Nicchia" count={3}>
              <Card title="Reception Front Desk" />
              <Card title="Agente Immobiliare" />
              <Card title="Receptionist Palestre" />
            </Column>

            <Column title="2. Personalizzazione" count={3}>
              <Card title="Carica FAQ Aziendali" />
              <div className="bg-[#1E293B] p-4 rounded-2xl flex flex-col gap-4 border border-shore-blue/30 shadow-md relative overflow-hidden group hover:bg-[#253248] transition-colors cursor-pointer">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-shore-blue"></div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm font-medium text-white/90 bg-shore-blue/10 px-1 rounded">Tono dello Script</span>
                </div>
                <div className="flex justify-start"><UserIcon /></div>
              </div>
              <Card title="Connetti Calendario" />
            </Column>

            <Column title="3. Test" count={1}>
              <Card title="Simula Chiamata Inbound" />
            </Column>

            <Column title="4. Live" count={150}>
              <Column title="Chiamata #1024 - Prenotata" count={1} />
              <Card title="Chiamata #1025 - Qualificata" />
              <Card title="Chiamata #1026 - Trasferita" />
            </Column>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;