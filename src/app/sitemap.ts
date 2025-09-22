import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";
  const now = new Date();
  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}