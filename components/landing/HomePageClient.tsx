'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/landing/Hero';
import { useRouter } from 'next/navigation';

const CardList = dynamic(() => import('@/components/landing/CardList'));
const AboutSection = dynamic(() => import('@/components/landing/AboutSection'));
const MeetFounderSection = dynamic(() => import('@/components/landing/MeetFounderSection'));
const WorkflowSection = dynamic(() => import('@/components/landing/WorkflowSection'));
const PricingSection = dynamic(() => import('@/components/landing/PricingSection'));
const FaqSection = dynamic(() => import('@/components/landing/FaqSection'));
const ContactSection = dynamic(() => import('@/components/landing/ContactSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));

export default function HomePageClient() {
    const router = useRouter();

    const handleNavigate = (page: string, anchor?: string) => {
        if (page === 'home' && anchor) {
            setTimeout(() => {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            router.push(page === 'home' ? '/' : `/${page}`);
        }
    };

    return (
        <>
            <div className="w-full">
                <Hero onNavigate={handleNavigate} />
            </div>

            <div className="w-full px-4 md:px-10 mt-20 mb-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-medium text-shore-blue tracking-tight mb-4">I nostri agenti vocali</h2>
                        <p className="text-gray-500 text-lg font-light max-w-2xl">Agenti vocali intelligenti progettati per gestire il tuo business in totale autonomia</p>
                    </div>
                    <CardList onNavigate={handleNavigate} />
                </div>
            </div>

            <div className="w-full mb-32">
                <AboutSection />
            </div>

            <div className="w-full mb-20">
                <WorkflowSection onNavigate={handleNavigate} />
            </div>

            <div className="w-full px-4 md:px-10 mb-32">
                <MeetFounderSection />
            </div>

            <div className="w-full mb-10">
                <PricingSection onNavigate={handleNavigate} />
            </div>

            <div className="w-full mb-20">
                <FaqSection />
            </div>

            <div className="w-full mb-20">
                <ContactSection />
            </div>

            <Footer onNavigate={handleNavigate} />
        </>
    );
}
