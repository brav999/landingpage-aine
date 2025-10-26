import type { MetadataRoute } from "next";

const BASE_URL = "https://www.ainefisiopelvica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2025-07-02");

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
