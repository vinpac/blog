import { Header } from "@/components/Header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header className="print:mb-0 print:hidden mb-8" />

      <article className="prose bg-white dark:bg-gray-950 dark:prose-invert flex-1 min-w-full border-x dark:border-gray-800 border-b">
        {children}
      </article>
    </>
  );
}
