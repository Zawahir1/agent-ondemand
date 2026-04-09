'use client'

import React from 'react';
import ComingSoonPage from '@/components/landing/ComingSoonPage';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    const handleNavigate = (page: string, anchor?: string) => {
        if (page === 'home' && anchor) {
            router.push(`/${anchor}`);
        } else {
            router.push(page === 'home' ? '/' : `/${page}`);
        }
    };

    return <ComingSoonPage onNavigate={handleNavigate} />;
}
