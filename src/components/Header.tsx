import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-md sm:text-xl font-semibold text-gray-900 dark:text-white">
            Vinicius Pacheco{" "}
            <span className="block sm:inline text-gray-500 dark:text-gray-400 font-normal">
              @vinpac
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vinpac"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vinpac/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/vinpac_io"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <Link
            href="/about"
            className="text-sm px-3 py-1.5 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors print:hidden"
          >
            <span>About </span>
            <span className="hidden sm:inline">Me</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
