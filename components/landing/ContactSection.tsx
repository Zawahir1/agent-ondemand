'use client'

import React, { useState } from 'react';
import Link from 'next/link';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!consent) return;
        setStatus('submitting');

        try {
            const response = await fetch('/api/mailerlite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    source: 'contact-form',
                    fields: {
                        name,
                        source: 'Contact Form - Custom Project',
                        notes: details
                    }
                }),
            });

            if (!response.ok) throw new Error('Sync failed');
            setStatus('success');
            setName('');
            setEmail('');
            setDetails('');
            setConsent(false);
        } catch (err) {
            console.error('Submission Error:', err);
            setStatus('error');
        }
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 py-10 md:py-20" id="contact">
            <div className="relative w-full bg-[#0055FF] rounded-[40px] md:rounded-[64px] overflow-hidden shadow-2xl shadow-blue-900/40 group">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px]">
                    <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span></span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">Team di Ingegneria Pronto</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal text-white leading-[0.9] tracking-tight mb-8">
                                Hai una <br />
                                <span className="opacity-70">automazione personalizzata?</span>
                            </h2>
                            <p className="text-blue-100 text-xl md:text-2xl font-light max-w-md leading-relaxed">
                                Workflow complessi? Integrazioni CRM uniche? Costruiamo soluzioni AI su misura per la tua infrastruttura.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-[500px] bg-[#004acc] lg:border-l border-white/10 p-8 md:p-16 flex flex-col justify-center relative">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center text-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 className="text-2xl font-medium text-white">Messaggio Inviato!</h3>
                                <p className="text-blue-200 font-light">Ti contatteremo il prima possibile.</p>
                                <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors">
                                    Invia un altro messaggio
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-blue-200 ml-1">Il tuo nome</label>
                                    <input type="text" required placeholder="Mario Rossi" value={name} onChange={e => setName(e.target.value)} className="w-full bg-black/10 border-b-2 border-white/10 text-white placeholder-blue-300/50 px-4 py-4 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t-lg text-lg" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-blue-200 ml-1">Email di lavoro</label>
                                    <input type="email" required placeholder="mario@azienda.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-black/10 border-b-2 border-white/10 text-white placeholder-blue-300/50 px-4 py-4 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t-lg text-lg" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-widest text-blue-200 ml-1">Dettagli del Progetto</label>
                                    <textarea rows={3} required placeholder="Parlaci dell'automazione di cui hai bisogno..." value={details} onChange={e => setDetails(e.target.value)} className="w-full bg-black/10 border-b-2 border-white/10 text-white placeholder-blue-300/50 px-4 py-4 focus:outline-none focus:border-white focus:bg-black/20 transition-all rounded-t-lg text-lg resize-none"></textarea>
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 w-4 h-4 accent-white rounded border-white/30 bg-transparent cursor-pointer" />
                                    <span className="text-xs text-blue-200 leading-relaxed font-light">
                                        Acconsento al trattamento dei miei dati personali ai sensi del GDPR. Leggi la nostra{' '}
                                        <Link href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">Informativa sulla Privacy</Link>.
                                    </span>
                                </label>
                                {status === 'error' && (
                                    <p className="text-red-200 text-sm font-light">Qualcosa è andato storto. Riprova.</p>
                                )}
                                <button type="submit" disabled={status === 'submitting' || !consent} className="mt-4 group relative w-full bg-white text-[#0055FF] h-20 rounded-2xl font-medium text-xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed">
                                    <span className="relative flex items-center justify-center gap-3">
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-[#0055FF]" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                Invio in corso...
                                            </>
                                        ) : (
                                            <>
                                                Inizia Progetto Personalizzato
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;