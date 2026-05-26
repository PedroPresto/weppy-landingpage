import type { MetadataRoute } from "next";
import { getPayloadInstance } from "@/lib/payload";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadInstance();
    const result = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      limit: 1000,
      depth: 0,
    });

    postRoutes = result.docs.map((doc) => {
      const modified = (doc.modifiedAt as string | null) ?? (doc.publishedAt as string);
      return {
        url: `${SITE_URL}/blog/${doc.slug as string}`,
        lastModified: new Date(modified),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });
  } catch {
    // DB unavailable at build time — return just static routes
  }

  return [...staticRoutes, ...postRoutes];
}
