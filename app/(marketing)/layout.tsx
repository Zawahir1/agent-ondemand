'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import MobileMenu from '@/components/landing/MobileMenu';
import Logo from '@/components/landing/Logo';
import CookieBanner from '@/components/landing/CookieBanner';
import { useRouter } from 'next/navigation';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Keep listen for custom navigate events from consent links in forms
    useEffect(() => {
        const handler = (e: Event) => {
            const page = (e as CustomEvent).detail;
            if (page) {
                if (page === 'home') router.push('/');
                else router.push(`/${page}`);
            }
        };
        window.addEventListener('navigate', handler);
        return () => window.removeEventListener('navigate', handler);
    }, [router]);

    return (
        <div className="min-h-screen bg-shore-bg text-shore-text relative flex flex-col selection:bg-shore-blue selection:text-white overflow-x-hidden">
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto">
                    <Logo onClick={() => router.push('/')} />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 pointer-events-auto hidden md:block">
                    <Navbar />
                </div>

                <div className="md:hidden pointer-events-auto relative z-50">
                    <button
                        className="text-shore-text font-medium bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-sm"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        Menu
                    </button>
                </div>

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </header>

            <main className="w-full flex flex-col items-center relative z-10">
                {children}
            </main>

            <CookieBanner onNavigateToPrivacy={() => router.push('/privacy')} />
        </div>
    );
}
