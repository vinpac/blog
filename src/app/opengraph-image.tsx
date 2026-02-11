import { generateBlogOGImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Vinicius Pacheco's blog";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateBlogOGImage();
}
