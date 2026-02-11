import type { MetadataRoute } from "next";
import posts from "./posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts.map((post) => ({
    url: `https://vinpac.io/${new Date(post.date).getFullYear()}/${post.id}`,
    lastModified: post.date,
  }));

  return [
    { url: "https://vinpac.io", lastModified: new Date() },
    { url: "https://vinpac.io/about", lastModified: new Date() },
    ...blogPosts,
  ];
}
