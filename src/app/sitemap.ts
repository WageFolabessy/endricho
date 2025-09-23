import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";
  const now = new Date();
  return locales.flatMap((lang) => {
    const base = `${siteUrl}/${lang}`;
    const portfolio = lang === "id" ? `${base}/portofolio` : `${base}/portfolio`;
    return [
      {
        url: base,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: portfolio,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];
  });
}