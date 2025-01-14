import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-white p-8 max-w-3xl mx-auto flex flex-col">
      <Header className="mb-6" />

      <article className="prose prose-invert flex-1">{children}</article>
      <Footer />
    </div>
  );
}
