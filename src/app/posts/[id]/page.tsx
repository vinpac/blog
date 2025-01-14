import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default function Post({ params }: { params: { id: string } }) {
  try {
    const postData = getPostData(params.id);

    return (
      <div className="min-h-screen text-white p-8 max-w-3xl mx-auto flex flex-col">
        <Header className="mb-8" />
        <article className="prose prose-invert flex-1">
          <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-400 mb-8">
            <time>{postData.date}</time>
            <span className="mx-2">•</span>
            <span>{postData.views} views</span>
          </div>
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </article>
        <Footer />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
