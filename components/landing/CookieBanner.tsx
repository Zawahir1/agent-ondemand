'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'cookie_consent';

const CookieBanner: React.FC<{ onNavigateToPrivacy?: () => void }> = ({ onNavigateToPrivacy }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            // Small delay for a smoother entrance
            const timer = setTimeout(() => setVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem(CONSENT_KEY, 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6 animate-in slide-in-from-bottom-6 fade-in duration-700">
            <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/50">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Cookie Policy</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Questo sito utilizza cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o di terze parti per il tracciamento.{' '}
                            <Link href="/privacy" className="text-shore-blue hover:underline underline-offset-2 transition-colors">
                                Informativa sulla Privacy
                            </Link>
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={handleReject}
                            className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-gray-400 border border-gray-700 rounded-xl hover:bg-white/5 hover:text-white transition-all active:scale-95"
                        >
                            Rifiuta
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-white bg-shore-blue rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                        >
                            Accetta
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
