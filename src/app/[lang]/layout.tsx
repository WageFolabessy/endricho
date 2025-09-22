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
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      url: "https://efolabessy.app",
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={inter.variable}>
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