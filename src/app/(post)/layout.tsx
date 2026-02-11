import { getPosts } from "@/app/get-posts";
import { PostHeader } from "./header";
import { PostJsonLd } from "./post-json-ld";
import { Header } from "@/components/Header";

export const revalidate = 60;

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <>
      <Header />

      <article className="prose border dark:border-gray-800 min-w-full bg-white mt-6 dark:bg-gray-950 px-6 py-8 dark:prose-invert flex-1">
        <PostHeader posts={posts} />

        {children}
      </article>

      <PostJsonLd posts={posts} />
    </>
  );
}
