import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";
  const currentUrl = `${siteUrl}/${lang}`;
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        "id-ID": `${siteUrl}/id`,
        "en-US": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      url: currentUrl,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
      images: [`${siteUrl}/images/photo.JPG`],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${siteUrl}/images/photo.JPG`],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="no-print fixed top-3 right-3 z-50">
          <LocaleSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}