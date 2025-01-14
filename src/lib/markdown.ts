import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface MarkdownContent {
  content: string;
  metadata: {
    title: string;
    lastUpdated?: string;
    [key: string]: any;
  };
}

export async function getMarkdownContent(
  filename: string
): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    metadata: matterResult.data as MarkdownContent["metadata"],
  };
}
