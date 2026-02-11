import {
  generatePostOGImage,
  getPostData,
  ogSize,
  ogContentType,
} from "@/lib/og";

const post = getPostData("i-built-a-digital-split-flap-display");

export const alt = post.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generatePostOGImage(post);
}
