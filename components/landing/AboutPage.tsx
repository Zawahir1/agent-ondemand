'use client'

import React from 'react';
import ContactSection from './ContactSection';
import Footer from './Footer';
import BackgroundGlow from './BackgroundGlow';

interface AboutPageProps {
    onNavigate?: (page: string, anchor?: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    return (
        <div className="w-full flex flex-col items-center animate-in fade-in duration-700 relative">
            <BackgroundGlow />
            <div className="w-full px-4 mb-20 pt-20">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-mono uppercase tracking-widest mb-8">
                        Chi Siamo
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1] text-gray-900 mb-8">
                        Costruiamo il ponte tra <br className="hidden md:block" />
                        <span className="text-shore-blue">Umano</span> & <span className="text-purple-500">Intelligenza.</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        La nostra missione è democratizzare l'accesso all'AI vocale ad alta fedeltà, permettendo alle aziende di scalare senza perdere il tocco personale.
                    </p>
                </div>
            </div>

            <div className="w-full px-4 mb-32 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative rounded-[40px] bg-white border border-gray-200 p-10 md:p-16 overflow-hidden min-h-[500px] flex flex-col justify-between hover:border-shore-blue/30 shadow-sm hover:shadow-lg transition-all duration-500">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-shore-blue/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-shore-blue/10 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-shore-blue/10 flex items-center justify-center mb-8 border border-shore-blue/20">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-shore-blue"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">Agent on Demand.</h2>
                            <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                                Il braccio tecnologico. Ci specializziamo nel fine-tuning di LLM e motori di sintesi vocale per creare agenti iper-realistici.
                            </p>
                            <ul className="space-y-3 mt-8">
                                {['Sintesi Vocale Naturale', 'Latenza Sub-500ms', 'Addestramento Specifico'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-shore-blue"></div>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative z-10 mt-12"><span className="text-xs font-mono uppercase tracking-widest text-shore-blue">Est. 2024</span></div>
                    </div>

                    <div className="group relative rounded-[40px] bg-gray-50 border border-gray-200 p-10 md:p-16 overflow-hidden min-h-[500px] flex flex-col justify-between hover:border-purple-500/30 shadow-sm hover:shadow-lg transition-all duration-500">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">Sales on Demand.</h2>
                            <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                                L'infrastruttura madre. Un'agenzia di crescita globale che fornisce il supporto operativo e le strategie di vendita.
                            </p>
                            <ul className="space-y-3 mt-8">
                                {['Infrastruttura Globale', 'Strategia di Vendita', 'Eccellenza Operativa'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative z-10 mt-12"><span className="text-xs font-mono uppercase tracking-widest text-purple-500">Azienda Madre</span></div>
                    </div>
                </div>
            </div>
            <ContactSection />
            <Footer onNavigate={onNavigate} />
        </div>
    );
};

export default AboutPage;