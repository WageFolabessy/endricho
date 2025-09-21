import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Endricho - Full-Stack Developer",
  description:
    "Professional CV website of Endricho, a Full-Stack Developer specializing in Laravel, React, and modern web technologies.",
  keywords:
    "Full-Stack Developer, Laravel, React, Next.js, PHP, JavaScript, TypeScript, Web Development",
  authors: [{ name: "Endricho" }],
  creator: "Endricho",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://efolabessy.app",
    title: "Endricho - Full-Stack Developer",
    description:
      "Professional CV website of Endricho, a Full-Stack Developer specializing in Laravel, React, and modern web technologies.",
    siteName: "Endricho Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endricho - Full-Stack Developer",
    description:
      "Professional CV website of Endricho, a Full-Stack Developer specializing in Laravel, React, and modern web technologies.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
