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
  const canonicalHost = process.env.CANONICAL_HOST ?? "efolabessy.app";
  const currentHost = request.headers.get("host") ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? "https";

  if (process.env.NODE_ENV === "production") {
    if (proto !== "https") {
      const httpsUrl = new URL(request.url);
      httpsUrl.protocol = "https:";
      return NextResponse.redirect(httpsUrl, 308);
    }
    if (currentHost !== canonicalHost) {
      const hostUrl = new URL(request.url);
      hostUrl.protocol = "https:";
      hostUrl.host = canonicalHost;
      return NextResponse.redirect(hostUrl, 308);
    }
  }

  const { pathname } = request.nextUrl;

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
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\..*).*)"],
};