
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
                                <button
                                    onClick={() => handleNav('coming-soon')}
                                    className="w-full py-3 text-center text-gray-600 font-medium hover:text-black border border-gray-200 rounded-xl transition-colors"
                                >
                                    Accedi
                                </button>

                                <button
                                    onClick={() => handleNav('coming-soon')}
                                    className="w-full py-3 text-center text-white bg-shore-blue font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors"
                                >
                                    Inizia Ora
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
