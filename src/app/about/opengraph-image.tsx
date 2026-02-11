import { generateAboutOGImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Vinicius Pacheco - Senior Software Engineer";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generateAboutOGImage();
}
