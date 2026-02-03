import { cn } from "@/lib/utils";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa";

export const ProfileHeaderSection = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        "mb-12 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50",
        className
      )}
    >
      <div className="flex items-center md:items-end flex-col-reverse pb-4 md:pb-0 print:flex-row md:flex-row gap-2 print:gap-4 md:gap-4">
        <div className="flex-1 text-center print:text-left md:text-left  p-4 print:p-8 md:p-8">
          {children}
        </div>
        <div className="relative px-4 w-full md:w-auto md:max-w-[300px] overflow-hidden group">
          <img
            src="/images/about/profile-no-bg.png"
            className="relative z-10 max-w-[170px] md:max-w-[250px] mx-auto print:max-w-[230px] rounded-3xl !mt-0 -mb-4 transition-all duration-500"
          />
          <div className="size-[240px] mx-auto md:size-[250px] bg-orange-300 absolute inset-x-0 top-12 md:top-16 rounded-full transition-all duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export const AboutHeader = () => {
  return (
    <ProfileHeaderSection>
      <h1 className="!m-0  text-2xl font-semibold print:text-4xl md:text-4xl tracking-tight !leading-tight text-gray-900 dark:text-gray-100">
        Vinicius Pacheco{" "}
      </h1>
      <span className="block text-gray-500 font-medium text-2xl mt-1.5">
        Senior Software Engineer
      </span>
      <p className="mt-4 text-lg print:text-lg md:text-lg text-gray-500 dark:text-gray-400">
        🇧🇷 Brazil · Fluent English
      </p>
      <div className="flex items-center gap-4 justify-center md:justify-start">
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
    </ProfileHeaderSection>
  );
};
