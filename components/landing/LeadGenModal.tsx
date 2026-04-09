'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
}

interface StepContent {
  description: string;
  tone: string;
  questions: string[];
}

const AGENT_CONTENT: Record<string, StepContent> = {
  'AI Receptionist': {
    description: 'Addestrato per la reception generale, l\'accettazione clinica e la pianificazione professionale.',
    tone: 'Professionale, calmo e disponibile. Progettato per gestire ambienti ad alto stress.',
    questions: [
      '“Vorrei prenotare un appuntamento per martedì prossimo.”',
      '“Qual è la vostra politica di cancellazione?”',
      '“Puoi dirmi dove vi trovate esattamente?”'
    ]
  },
  'Assistente Immobiliare': {
    description: 'Esperto nella qualificazione dei lead e nel follow-up delle vendite immobiliari.',
    tone: 'Proattivo, energico e persuasivo. Focalizzato sull\'identificare la motivazione dell\'acquirente.',
    questions: [
      '“Ho visto l\'annuncio in via Roma, posso vederlo domani?”',
      '“Cerco una casa con 3 camere sotto i 400.000€.”',
      '“Quali sono le tasse sulla proprietà in questa zona?”'
    ]
  },
  'Linea Demo Agente': {
    description: 'Un agente versatile addestrato per mostrare il flusso conversazionale naturale.',
    tone: 'Adattivo e intelligente. Seguirà il tuo ritmo per garantire un\'interazione naturale.',
    questions: [
      '“In cosa sei diverso da una segreteria telefonica?”',
      '“Puoi gestire i trasferimenti verso una linea umana?”',
      '“Mostrami come gestisci un cliente che ha fretta.”'
    ]
  }
};

interface LeadGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadData) => void;
  title: string;
}

const LeadGenModal: React.FC<LeadGenModalProps> = ({ isOpen, onClose, onSubmit, title }) => {
  const [step, setStep] = useState<'COLLECT' | 'INSTRUCT'>('COLLECT');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState<LeadData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: ''
  });

  if (!isOpen) return null;

  const content = AGENT_CONTENT[title] || AGENT_CONTENT['Linea Demo Agente'];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/mailerlite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          fields: {
            name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            address: formData.address,
            source: `Lead Modal - ${title}`
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Sync failed');
      }

      setStep('INSTRUCT');
    } catch (err) {
      console.error('MailerLite Sync Error:', err);
      // We still let them see the instructions as a fallback for UX 
      setStep('INSTRUCT');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalSubmit = () => {
    onSubmit(formData);
    setTimeout(() => { setStep('COLLECT'); }, 500);
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-shore-blue/20 focus:border-shore-blue transition-all text-base";
  const labelClasses = "text-xs font-mono uppercase tracking-widest text-gray-500 mb-1.5 block ml-1";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in zoom-in duration-300">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col transition-all duration-500">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        <div className="p-8 md:p-12">
          {step === 'COLLECT' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10">
                <h2 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight">Sblocca l'Accesso Demo</h2>
                <p className="text-gray-500 font-light leading-relaxed">Per provare la demo live di <span className="text-shore-blue font-medium">{title}</span>, fornisci i tuoi recapiti.</p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className={labelClasses}>Nome</label><input required type="text" placeholder="Gianna" className={inputClasses} value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} /></div>
                  <div><label className={labelClasses}>Cognome</label><input required type="text" placeholder="Rossi" className={inputClasses} value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} /></div>
                </div>
                <div><label className={labelClasses}>Email di Lavoro</label><input required type="email" placeholder="gianna@azienda.it" className={inputClasses} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} /></div>
                <div><label className={labelClasses}>Indirizzo Aziendale</label><input required type="text" placeholder="Via Roma 10, Milano" className={inputClasses} value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} /></div>
                <div><label className={labelClasses}>Numero di Telefono</label><input required type="tel" placeholder="+39 333 000 0000" className={inputClasses} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} /></div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 w-4 h-4 accent-shore-blue rounded cursor-pointer" />
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR. Leggi la nostra{' '}
                    <Link href="/privacy" className="underline underline-offset-2 text-shore-blue hover:text-blue-700 transition-colors">Informativa sulla Privacy</Link>.
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting || !consent} className="w-full bg-shore-blue text-white py-4 rounded-xl font-medium text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20 mt-4 disabled:opacity-50 min-h-[60px]">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sincronizzazione in corso...
                    </span>
                  ) : 'Continua alle Istruzioni'}
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <span className="text-shore-blue font-mono text-[10px] uppercase tracking-widest font-bold mb-2 block">Briefing Agente</span>
                <h2 className="text-3xl font-medium text-gray-900 mb-6 tracking-tight">Incontra {title}</h2>
                <div className="space-y-6">
                  <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Capacità</h4><p className="text-gray-600 font-light leading-relaxed">{content.description}</p></div>
                  <div><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Voce & Personalità</h4><p className="text-gray-600 font-light leading-relaxed italic">{content.tone}</p></div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100"><h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Domande Consigliate</h4><ul className="space-y-3">{content.questions.map((q, i) => (<li key={i} className="text-sm text-gray-700 flex gap-3"><span className="text-shore-blue">•</span>{q}</li>))}</ul></div>
                </div>
              </div>
              <button onClick={handleFinalSubmit} className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-black active:scale-[0.98] transition-all shadow-xl mt-4">Rivela Numero e Inizia</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadGenModal;