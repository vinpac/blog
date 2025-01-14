import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getMarkdownContent } from "@/lib/markdown";

export default async function About() {
  const { content, metadata } = await getMarkdownContent("about");

  return (
    <div className="min-h-screen text-white p-8 max-w-3xl mx-auto flex flex-col">
      <Header className="mb-8" />
      <article className="prose prose-invert flex-1">
        <div
          className="prose prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
      <Footer />
    </div>
  );
}
