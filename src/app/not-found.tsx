import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-950 border-x dark:border-gray-800 border-b pb-16 flex-1 mt-8 flex flex-col items-center justify-center py-24">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          404
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
