import type { MetadataRoute } from "next";

import { siteConfig, caseStudies } from "@/lib/content";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/industries",
    "/work",
    "/pricing",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const workRoutes = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const posts = await getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
