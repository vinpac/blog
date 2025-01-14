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
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-semibold">
            Vinicius Pacheco{" "}
            <span className="text-gray-400 font-normal">@vinpac</span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/vinpac"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vinpac/"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://x.com/vinpac_io"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <Link
            href="/about"
            className="text-sm px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}
