
'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', { ...Object.fromEntries(formData), redirectTo: '/app/dashboard' });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
    redirect('/app/dashboard');
}

export async function register(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');
        const name = formData.get('name');
        const businessName = formData.get('businessName');

        if (password !== confirmPassword) {
            return 'Les mots de passe ne correspondent pas.';
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://platform.noxatech.org/api';
        const res = await fetch(`${apiUrl}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name, businessName }),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return errorData.message || "Une erreur s'est produite lors de l'inscription.";
        }

        // Successfully registered, now log them in
        await signIn('credentials', { email, password, redirectTo: '/app/dashboard' });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Identifiants invalides.';
                default:
                    return "Une erreur s'est produite.";
            }
        }
        // If it's a redirect error (from successful signIn), rethrow it
        if ((error as any).digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.error('Registration Error:', error);
        return "Une erreur inattendue s'est produite. Veuillez réessayer.";
    }
}

export async function signOutAction() {
    const { signOut } = await import('@/auth');
    await signOut({ redirectTo: '/login' });
}

