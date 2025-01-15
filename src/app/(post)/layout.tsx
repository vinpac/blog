import { getPosts } from "@/app/get-posts";
import { PostHeader } from "./header";

export const revalidate = 60;

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <>
      <PostHeader posts={posts} />

      <article className="prose dark:prose-invert flex-1">{children}</article>
    </>
  );
}
