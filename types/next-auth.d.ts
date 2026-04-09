import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string;
            role: 'ADMIN' | 'TENANT' | 'BILLING' | 'READ_ONLY' | string;
            accessToken: string;
            businessName?: string;
            twilioNumber?: string;
            tenantId: string; // The ID of the primary account owner (or self if owner)
        } & DefaultSession["user"];
    }

    interface User {
        role: string;
        businessName?: string;
        twilioNumber?: string;
        accessToken?: string;
        tenantId?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: 'ADMIN' | 'TENANT' | 'BILLING' | 'READ_ONLY' | string;
        accessToken: string;
        businessName?: string;
        twilioNumber?: string;
        tenantId?: string;
    }
}
