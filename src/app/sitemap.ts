import type { MetadataRoute } from "next";
import { cities, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/gallery`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cities.map((c) => ({
      url: `${site.url}/areas/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
