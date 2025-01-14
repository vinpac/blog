import { getPosts } from "@/app/get-posts";
import { Footer } from "@/components/Footer";
import { PostHeader } from "./header";

export const revalidate = 60;

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <div className="min-h-screen text-white p-8 max-w-3xl mx-auto flex flex-col">
      <PostHeader posts={posts} />

      <article className="prose prose-invert flex-1">{children}</article>
      <Footer />
    </div>
  );
}
