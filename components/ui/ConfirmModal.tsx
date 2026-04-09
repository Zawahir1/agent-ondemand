import React from 'react';
import { Button } from './Button';
import { TbAlertTriangle } from 'react-icons/tb';

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDestructive?: boolean;
    isLoading?: boolean;
}

export function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Conferma',
    cancelText = 'Annulla',
    isDestructive = false,
    isLoading = false,
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center gap-4">
                    {isDestructive && (
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                            <TbAlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                    )}

                    <h3 className="text-xl font-semibold text-white">
                        {title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {message}
                    </p>

                    <div className="flex gap-3 w-full mt-4">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="flex-1 bg-transparent border-white/10 hover:bg-white/5 text-neutral-300"
                            disabled={isLoading}
                        >
                            {cancelText}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            className={`flex-1 text-white ${isDestructive
                                ? 'bg-red-600 hover:bg-red-700'
                                : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Elaborazione...' : confirmText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
