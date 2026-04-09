import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import MicrosoftEntraId from 'next-auth/providers/microsoft-entra-id';
import Apple from 'next-auth/providers/apple';
import { z } from 'zod';
import { API_BASE_URL } from '@/lib/config';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    secret: process.env.AUTH_SECRET,
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        MicrosoftEntraId({
            clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
            clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
            issuer: `https://login.microsoftonline.com/${process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID}/v2.0`,
        }),
        Apple({
            clientId: process.env.AUTH_APPLE_ID,
            clientSecret: process.env.AUTH_APPLE_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    try {
                        const res = await fetch(`${API_BASE_URL}/auth/login`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password }),
                        });

                        if (!res.ok) return null;

                        const response = await res.json();
                        const { user, access_token } = response;

                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            accessToken: access_token,
                            businessName: user.businessName,
                            twilioNumber: user.twilioNumber,
                        };
                    } catch (e) {
                        return null;
                    }
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            // Initial sign in from Credentials
            if (user && account?.provider === 'credentials') {
                return { ...token, ...user };
            }

            // Initial sign in from OAuth
            if (account && account.provider !== 'credentials' && profile) {
                try {
                    // Call backend to find-or-create user
                    const res = await fetch(`${API_BASE_URL}/auth/oauth`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: profile.email,
                            name: profile.name,
                            image: profile.picture || (profile as any).image, // Google sends 'picture', others might vary
                        }),
                    });

                    if (res.ok) {
                        const backendData = await res.json();
                        // augment token with backend user data
                        token.accessToken = backendData.access_token;
                        token.role = backendData.user.role;
                        token.id = backendData.user.id;
                        token.businessName = backendData.user.businessName;
                        token.twilioNumber = backendData.user.twilioNumber;
                        // tenantId is parentId (if exists) or id
                        token.tenantId = backendData.user.parentId || backendData.user.id;
                    }
                } catch (error) {
                    console.error('OAuth Backend Sync Error', error);
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.role = token.role as string; // 'ADMIN' or 'TENANT' or others
                session.user.accessToken = token.accessToken as string;
                session.user.businessName = token.businessName as string | undefined;
                session.user.twilioNumber = token.twilioNumber as string | undefined;
                session.user.tenantId = (token.tenantId as string) || (token.id as string);
            }
            return session;
        },
    },
});
