# CV/Portfolio — Multilingual Portfolio

CV/Portfolio website with two languages (id/en), print-friendly layout, and SEO ready. Built with Next.js App Router, React 19, and Tailwind CSS v4.

- Next.js 15 (App Router), React 19
- i18n with locale prefix: /id and /en
- SSG (static) pages, no revalidation
- SEO: canonical, hreflang, robots.txt, sitemap.xml, JSON‑LD (Person)
- Print page (auto-print, noindex)
- Tailwind CSS v4

## Project Structure (key files)

- Middleware (locale redirect): [src/middleware.ts](src/middleware.ts)
- App layout per-locale: [src/app/[lang]/layout.tsx](src/app/%5Blang%5D/layout.tsx)
- Home page per-locale: [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)
- Print page per-locale: [src/app/[lang]/print/page.tsx](src/app/%5Blang%5D/print/page.tsx)
- Global styles (Tailwind v4): [src/app/globals.css](src/app/globals.css)
- i18n config: [src/i18n/config.ts](src/i18n/config.ts)
- i18n dictionaries:
  - [src/i18n/dictionaries/id.ts](src/i18n/dictionaries/id.ts)
  - [src/i18n/dictionaries/en.ts](src/i18n/dictionaries/en.ts)
- i18n loader: [src/i18n/getDictionary.ts](src/i18n/getDictionary.ts)
- Components:
  - Locale switcher: [src/components/LocaleSwitcher.tsx](src/components/LocaleSwitcher.tsx)
  - JSON‑LD injector: [src/components/JsonLd.tsx](src/components/JsonLd.tsx)
  - Auto print: [src/components/AutoPrint.tsx](src/components/AutoPrint.tsx)
  - Rich text (bold support): [src/app/components/RichText.tsx](src/app/components/RichText.tsx)
- SEO routes:
  - [src/app/robots.ts](src/app/robots.ts)
  - [src/app/sitemap.ts](src/app/sitemap.ts)

## Getting Started

1) Install and run
```bash
npm install
npm run dev
```
Open: http://localhost:3000 (auto-redirects to /id based on Accept-Language)

2) Build and start
```bash
npm run build
npm start
```

3) Useful local URLs
```bash
$BROWSER http://localhost:3000
$BROWSER http://localhost:3000/id
$BROWSER http://localhost:3000/en
$BROWSER http://localhost:3000/sitemap.xml
$BROWSER http://localhost:3000/robots.txt
```

## Environment Variables

Create .env.local:
```bash
SITE_URL=https://your-domain.tld
# optional: after adding meta tag in Google Search Console
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxx
```

Used by:
- metadata (canonical/hreflang/OG): [src/app/[lang]/layout.tsx](src/app/%5Blang%5D/layout.tsx)
- sitemap/robots: [src/app/sitemap.ts](src/app/sitemap.ts), [src/app/robots.ts](src/app/robots.ts)
- JSON‑LD: [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)

## Internationalization (i18n)

- Supported locales: configured in [src/i18n/config.ts](src/i18n/config.ts)
- Content dictionaries:
  - ID: [src/i18n/dictionaries/id.ts](src/i18n/dictionaries/id.ts)
  - EN: [src/i18n/dictionaries/en.ts](src/i18n/dictionaries/en.ts)
- Runtime loader: [src/i18n/getDictionary.ts](src/i18n/getDictionary.ts)
- Language switcher updates the first URL segment: [src/components/LocaleSwitcher.tsx](src/components/LocaleSwitcher.tsx)
- Bold emphasis in bullets via safe HTML rendering: [src/app/components/RichText.tsx](src/app/components/RichText.tsx)

To add a new language:
- Add code to [src/i18n/dictionaries](src/i18n) and list it in [src/i18n/config.ts](src/i18n/config.ts)
- The middleware and static params already respect the locales list

## SEO

- Canonical, hreflang, OG/Twitter metadata in [src/app/[lang]/layout.tsx](src/app/%5Blang%5D/layout.tsx)
- robots.txt and sitemap.xml generated at runtime
- JSON‑LD Person in [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)
- Print page is noindex: [src/app/[lang]/print/page.tsx](src/app/%5Blang%5D/print/page.tsx)

After deploy:
1) Set SITE_URL (and GOOGLE_SITE_VERIFICATION if using Search Console)
2) Submit sitemap: https://search.google.com/search-console > Indexing > Sitemaps

## Tech Stack

- Next.js 15.5.3, React 19.1.0
- Tailwind CSS v4
- TypeScript
