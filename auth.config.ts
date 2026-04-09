import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  basePath: '/auth',
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.AUTH_SECRET,
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;
      const method = request.method;

      /**
       * ✅ MUST: Never touch NextAuth internal endpoints
       * signIn() needs these to complete auth + set cookies.
       */
      if (nextUrl.pathname.startsWith('/api/auth')) {
        return true;
      }

      /**
       * ✅ CRITICAL (production):
       * Server Actions / RSC requests must NOT be redirected.
       * Redirecting them causes: "unexpected response from the server"
       */
      if (request.headers.get('next-action')) return true;

      const accept = request.headers.get('accept') || '';
      if (accept.includes('text/x-component')) return true;

      /**
       * ✅ Allow /login POST (server action submit)
       */
      if (nextUrl.pathname.startsWith('/login') && method === 'POST') {
        return true;
      }

      const isLoggedIn = !!auth?.user;
      const role = (auth?.user as any)?.role;

      const isOnApp = nextUrl.pathname.startsWith('/app');
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnLogin = nextUrl.pathname.startsWith('/login');


      // Protected routes require auth
      if (!isLoggedIn && (isOnApp || isOnAdmin)) {
        return false; // NextAuth will redirect to /login
      }

      // Admin routes: only admins
      if (isOnAdmin) {
        if (role === 'ADMIN') return true;
        return Response.redirect(new URL('/app/dashboard', nextUrl));
      }

      // App routes: tenants only (admins redirected away)
      if (isOnApp) {
        if (role === 'ADMIN') {
          return Response.redirect(new URL('/admin/overview', nextUrl));
        }
        return true;
      }

      // Logged-in users shouldn't see login page (GET only)
      if (isOnLogin && isLoggedIn && method === 'GET') {
        if (role === 'ADMIN') return Response.redirect(new URL('/admin/overview', nextUrl));
        return Response.redirect(new URL('/app/dashboard', nextUrl));
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).role = token.role;
        (session.user as any).accessToken = token.accessToken;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

