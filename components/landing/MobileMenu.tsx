
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate?: (page: string, anchor?: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
    const [agentsOpen, setAgentsOpen] = useState(false);
    const [accediOpen, setAccediOpen] = useState(false);
    const [iniziaOpen, setIniziaOpen] = useState(false);
    const router = useRouter();

    const handleNav = (page: string, anchor?: string) => {
        if (onNavigate) {
            onNavigate(page, anchor);
        } else {
            router.push(`/${page}`);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] pointer-events-auto"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-shore-bg border-l border-gray-200 z-[70] shadow-2xl flex flex-col pointer-events-auto"
                    >
                        <div className="p-6 flex flex-col h-full overflow-y-auto">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-semibold text-shore-text">Menu</span>
                                <button
                                    onClick={onClose}
                                    className="p-2 -mr-2 text-gray-500 hover:text-black transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-2 flex-grow">

                                {/* Agenti Dropdown */}
                                <div className="border-b border-gray-100 pb-2">
                                    <button
                                        onClick={() => setAgentsOpen(!agentsOpen)}
                                        className="flex items-center justify-between w-full py-3 text-left text-lg font-medium text-gray-800 hover:text-shore-blue transition-colors"
                                    >
                                        <span>Agenti</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`transition-transform duration-300 ${agentsOpen ? 'rotate-180' : ''}`}
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>

                                    <AnimatePresence>
                                        {agentsOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-4"
                                            >
                                                <div className="flex flex-col space-y-3 py-2">
                                                    <button
                                                        onClick={() => handleNav('front-desk')}
                                                        className="text-left py-2 text-gray-600 hover:text-shore-blue text-sm"
                                                    >
                                                        <div className="font-medium">Receptionist Front Desk</div>
                                                        <div className="text-xs text-gray-400 mt-0.5">Prenotazioni e supporto automatizzati</div>
                                                    </button>

                                                    <button
                                                        onClick={() => handleNav('real-estate')}
                                                        className="text-left py-2 text-gray-600 hover:text-shore-blue text-sm"
                                                    >
                                                        <div className="font-medium">Agente Immobiliare</div>
                                                        <div className="text-xs text-gray-400 mt-0.5">Qualificazione lead e vendite</div>
                                                    </button>

                                                    <button
                                                        onClick={() => handleNav('palestre')}
                                                        className="text-left py-2 text-gray-600 hover:text-shore-blue text-sm"
                                                    >
                                                        <div className="font-medium">Receptionist Palestre</div>
                                                        <div className="text-xs text-gray-400 mt-0.5">Iscrizioni, corsi e assistenza per palestre</div>
                                                    </button>

                                                    <button
                                                        onClick={() => handleNav('venditore-auto')}
                                                        className="text-left py-2 text-gray-600 hover:text-shore-blue text-sm"
                                                    >
                                                        <div className="font-medium">Venditore Auto</div>
                                                        <div className="text-xs text-gray-400 mt-0.5">Qualificazione lead e test drive automatici</div>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <button
                                    onClick={() => handleNav('custom')}
                                    className="py-3 text-left text-lg font-medium text-gray-800 hover:text-shore-blue border-b border-gray-100 transition-colors"
                                >
                                    Crea il tuo agente
                                </button>

                                <button
                                    onClick={() => handleNav('about')}
                                    className="py-3 text-left text-lg font-medium text-gray-800 hover:text-shore-blue border-b border-gray-100 transition-colors"
                                >
                                    Chi siamo
                                </button>
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-auto pt-8 flex flex-col space-y-4">

                                {/* Accedi Expandable */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setAccediOpen(!accediOpen)}
                                        className="w-full py-3 px-4 flex items-center justify-between text-gray-600 font-medium hover:text-black transition-colors"
                                    >
                                        <span>Accedi</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${accediOpen ? 'rotate-180' : ''}`}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <AnimatePresence>
                                        {accediOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden border-t border-gray-100"
                                            >
                                                <a href="https://receptionist.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-shore-blue transition-colors">
                                                    Receptionist
                                                </a>
                                                <div className="h-px bg-gray-100 mx-4"></div>
                                                <a href="https://real-estate.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-shore-blue transition-colors">
                                                    Immobiliare
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Inizia Ora Expandable */}
                                <div className="bg-shore-blue rounded-xl overflow-hidden shadow-lg shadow-blue-500/20">
                                    <button
                                        onClick={() => setIniziaOpen(!iniziaOpen)}
                                        className="w-full py-3 px-4 flex items-center justify-between text-white font-medium hover:bg-blue-600 transition-colors"
                                    >
                                        <span>Inizia Ora</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${iniziaOpen ? 'rotate-180' : ''}`}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <AnimatePresence>
                                        {iniziaOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden border-t border-blue-400/30"
                                            >
                                                <a href="https://receptionist.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-blue-600 hover:text-white transition-colors">
                                                    Receptionist
                                                </a>
                                                <div className="h-px bg-blue-400/30 mx-4"></div>
                                                <a href="https://real-estate.agent-ondemand.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-blue-600 hover:text-white transition-colors">
                                                    Immobiliare
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
