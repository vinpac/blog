"use client";

import { Post } from "@/app/get-posts";
import { useSelectedLayoutSegments } from "next/navigation";

export function PostJsonLd({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  const postId = segments[segments.length - 1];
  const post = posts.find((p) => p.id === postId);

  if (!post) return null;

  const year = new Date(post.date).getFullYear();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          url: `https://vinpac.io/${year}/${post.id}`,
          author: {
            "@type": "Person",
            name: "Vinicius Pacheco",
            url: "https://vinpac.io/about",
          },
          publisher: {
            "@type": "Person",
            name: "Vinicius Pacheco",
            url: "https://vinpac.io",
          },
        }),
      }}
    />
  );
}
