'use client'

import React, { useState } from 'react';
import Link from 'next/link';

interface ComingSoonPageProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/mailerlite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          fields: {
            source: 'Coming Soon Waitlist'
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'iscrizione. Riprova più tardi.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('MailerLite Error:', err);
      // Even if there's a CORS error, we show success to the user for UX if we want, 
      // but here we handle it properly.
      setError('Si è verificato un problema tecnico. Per favore riprova tra poco.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden animate-in fade-in duration-1000">

      {/* Immersive Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-shore-blue/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">

        {/* Voice Wave Animation */}
        <div className="flex items-center justify-center gap-1.5 h-16 mb-12">
          {[0.5, 0.8, 0.4, 0.9, 0.6, 1, 0.7, 0.5, 0.8, 0.4].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-shore-blue rounded-full animate-wave"
              style={{
                height: `${h * 100}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-shore-blue text-[10px] font-mono uppercase tracking-widest mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-shore-blue animate-pulse"></span>
          Accesso Anticipato in Arrivo
        </div>

        <h1 className="text-5xl md:text-8xl font-normal tracking-tighter leading-[0.9] text-gray-900 mb-8">
          Stiamo perfezionando <br />
          <span className="text-gray-400 italic font-serif">la tua dashboard.</span>
        </h1>

        <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12">
          Il portale di Agent on Demand è in fase di test finale. Unisciti alla waitlist per essere tra i primi a gestire i tuoi agenti vocali.
        </p>

        {!isSubmitted ? (
          <div className="w-full flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-3xl border border-gray-200 shadow-2xl shadow-blue-500/10 focus-within:border-shore-blue/50 transition-colors duration-300">
              <input
                type="email"
                required
                placeholder="Il tuo indirizzo email"
                className="flex-1 bg-transparent px-6 py-4 outline-none text-gray-900 placeholder-gray-400 font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                disabled={isSubmitting || !consent}
                className="bg-shore-blue text-white px-8 py-4 rounded-[20px] font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50 min-w-[180px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Inviando...
                  </span>
                ) : 'Unisciti alla Waitlist'}
              </button>
            </form>
            <label className="flex items-start gap-3 cursor-pointer mt-4 max-w-md w-full">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 w-4 h-4 accent-shore-blue rounded cursor-pointer" />
              <span className="text-xs text-gray-500 leading-relaxed">
                Acconsento al trattamento dei miei dati personali ai sensi del GDPR. Leggi la nostra{' '}
                <Link href="/privacy" className="underline underline-offset-2 text-shore-blue hover:text-blue-700 transition-colors">Informativa sulla Privacy</Link>.
              </span>
            </label>
            {error && <p className="text-red-500 text-sm mt-4 animate-in fade-in slide-in-from-top-2">{error}</p>}
          </div>
        ) : (
          <div className="animate-in zoom-in fade-in duration-500 bg-emerald-50 text-emerald-700 px-8 py-6 rounded-3xl border border-emerald-100 flex flex-col items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3 className="text-xl font-bold">Sei in lista!</h3>
            <p className="opacity-80">Ti contatteremo non appena l'accesso sarà sbloccato.</p>
          </div>
        )}

        <div className="mt-20 flex flex-col items-center gap-4">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Torna alla navigazione</span>
          <button
            onClick={() => onNavigate?.('home')}
            className="text-gray-900 font-medium hover:text-shore-blue transition-colors flex items-center gap-2 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </button>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;