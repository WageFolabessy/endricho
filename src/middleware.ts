import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, Locale } from "./i18n/config";

function getPreferredLocale(acceptLang: string | null): Locale {
  if (!acceptLang) return defaultLocale;
  const lower = acceptLang.toLowerCase();
  if (lower.includes("id")) return "id";
  if (lower.includes("en")) return "en";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    /\.[\w]+$/.test(pathname)
  ) {
    return;
  }

  const pathSegments = pathname.split("/");
  const first = pathSegments[1];

  if (locales.includes(first as Locale)) {
    return;
  }

  const preferred = getPreferredLocale(request.headers.get("accept-language"));
  const url = new URL(`/${preferred}${pathname}`, request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\..*).*)"],
};