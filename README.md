# CV/Portfolio — Multilingual Portfolio

CV/Portfolio website with two languages (id/en), print-friendly layout, and SEO ready. Built with Next.js App Router, React 19, and Tailwind CSS v4.

- Next.js 15 (App Router), React 19
- i18n with locale prefix: /id and /en
- SSG (static) pages, no revalidation (`export const dynamic = "error"; export const revalidate = false`)
- SEO: canonical, hreflang, robots.txt, sitemap.xml, JSON‑LD (Person, WebSite, Organization)
- Portfolio pages with optimized thumbnails (Next/Image + image.thum.io)
- Print page (auto-print, noindex)
- Tailwind CSS v4

## Project Structure (key files)

- Middleware (locale redirect): [src/middleware.ts](src/middleware.ts)
- App layout per-locale (metadata, canonical, hreflang, OG/Twitter): [src/app/[lang]/layout.tsx](src/app/%5Blang%5D/layout.tsx)
- Home page per-locale (JSON‑LD Person): [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)
- Print page per-locale (noindex): [src/app/[lang]/print/page.tsx](src/app/%5Blang%5D/print/page.tsx)
- Portfolio pages:
  - EN: [src/app/[lang]/portfolio/page.tsx](src/app/%5Blang%5D/portfolio/page.tsx)
  - ID: [src/app/[lang]/portofolio/page.tsx](src/app/%5Blang%5D/portofolio/page.tsx)
- Global styles (Tailwind v4): [src/app/globals.css](src/app/globals.css)
- i18n config: [src/i18n/config.ts](src/i18n/config.ts)
- i18n dictionaries:
  - ID: [src/i18n/dictionaries/id.ts](src/i18n/dictionaries/id.ts)
  - EN: [src/i18n/dictionaries/en.ts](src/i18n/dictionaries/en.ts)
- i18n loader: [src/i18n/getDictionary.ts](src/i18n/getDictionary.ts)
- Components:
  - Locale switcher: [src/components/LocaleSwitcher.tsx](src/components/LocaleSwitcher.tsx)
  - JSON‑LD injector: [src/components/JsonLd.tsx](src/components/JsonLd.tsx)
  - Auto print: [src/components/AutoPrint.tsx](src/components/AutoPrint.tsx)
  - Rich text (bold support): [src/app/components/RichText.tsx](src/app/components/RichText.tsx)
- SEO routes:
  - robots: [src/app/robots.ts](src/app/robots.ts)
  - sitemap: [src/app/sitemap.ts](src/app/sitemap.ts)
- Data source for projects (demos/repos): [src/data/projects.ts](src/data/projects.ts)
- Next config (remote image domains): [next.config.ts](next.config.ts)

## Routes

- ID
  - Home: /id
  - Portfolio: /id/portofolio
  - Print CV: /id/print
- EN
  - Home: /en
  - Portfolio: /en/portfolio
  - Print CV: /en/print

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
$BROWSER http://localhost:3000/id/portofolio
$BROWSER http://localhost:3000/en
$BROWSER http://localhost:3000/en/portfolio
$BROWSER http://localhost:3000/id/print
$BROWSER http://localhost:3000/en/print
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
- JSON‑LD Person (home): [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)
- JSON‑LD WebSite/Organization (portfolio): 
  - EN: [src/app/[lang]/portfolio/page.tsx](src/app/%5Blang%5D/portfolio/page.tsx)
  - ID: [src/app/[lang]/portofolio/page.tsx](src/app/%5Blang%5D/portofolio/page.tsx)

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
- robots.txt and sitemap.xml generated at runtime; sitemap includes Home and Portfolio pages for both locales: [src/app/sitemap.ts](src/app/sitemap.ts)
- JSON‑LD:
  - Person on Home: [src/app/[lang]/page.tsx](src/app/%5Blang%5D/page.tsx)
  - WebSite + Organization on Portfolio:
    - EN: [src/app/[lang]/portfolio/page.tsx](src/app/%5Blang%5D/portfolio/page.tsx)
    - ID: [src/app/[lang]/portofolio/page.tsx](src/app/%5Blang%5D/portofolio/page.tsx)
- Print page is noindex: [src/app/[lang]/print/page.tsx](src/app/%5Blang%5D/print/page.tsx)

After deploy:
1) Set SITE_URL (and GOOGLE_SITE_VERIFICATION if using Search Console)
2) Submit sitemap: https://search.google.com/search-console > Indexing > Sitemaps

## Images & Performance

- Next/Image remote patterns allow optimized external thumbnails (image.thum.io): [next.config.ts](next.config.ts)
- Thumbnail URL generation per demo domain:
  - EN: [src/app/[lang]/portfolio/page.tsx](src/app/%5Blang%5D/portfolio/page.tsx)
  - ID: [src/app/[lang]/portofolio/page.tsx](src/app/%5Blang%5D/portofolio/page.tsx)

## Tech Stack

- Next.js 15.5.3, React 19.1.0
- Tailwind CSS v4
- TypeScript
