import type { MetadataRoute } from "next";
import { getPosts } from "@/utils/getPosts";

const siteUrl = "https://portfolio.marcelm.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return [
    {
      url: siteUrl,
    },
    {
      url: `${siteUrl}/resume`,
    },
    {
      url: `${siteUrl}/blog`,
    },
    ...posts.items.map((post) => ({
      url: `${siteUrl}/blog/${encodeURIComponent(post.fields.slug)}`,
      lastModified: new Date(post.fields.publishedDate),
    })),
  ];
}
