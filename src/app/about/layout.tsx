import { Header } from "@/components/Header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className="print:mb-0 mb-2" />

      <article className="prose dark:prose-invert flex-1">{children}</article>
    </>
  );
}
