import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "it", "es", "fr", "de"] as const;
const DEFAULT_LOCALE = "en";
const COOKIE_NAME = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest): string {
  // 1. Check cookie (set when user visits a locale-prefixed URL or switches language)
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Parse Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  const preferred = acceptLang
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase())
    .find((lang) => (LOCALES as readonly string[]).includes(lang));

  return preferred || DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals, API routes, Keystatic, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/keystatic") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a supported locale prefix
  const pathnameLocale = LOCALES.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    // Path already has a locale — set cookie and continue
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, pathnameLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // No locale in path — redirect to locale-prefixed URL
  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set(COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - Public files with extensions (images, fonts, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|images|icons|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|otf)).*)",
  ],
};
