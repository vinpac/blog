import { Code } from "@/app/(post)/components/code";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: Code,
  };
}
