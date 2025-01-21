import { Signature } from "@/components/Signature";
import Link from "next/link";

export function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={` dark:text-gray-400 border-t print:hidden border-gray-200 dark:border-gray-800 mt-24 pt-8 pb-16 ${className}`}
    >
      <div className="flex text-gray-400 items-center justify-between">
        <div className="text-sm">
          © {currentYear} Vinicius Pacheco. All rights reserved.
        </div>
        <nav className="flex gap-6 text-sm">
          <Link
            href="/about"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
      <Signature className="text-6xl w-[2em] h-[2em] mx-auto mt-12" />
    </footer>
  );
}
