import {
  generatePostOGImage,
  getPostData,
  ogSize,
  ogContentType,
} from "@/lib/og";

const post = getPostData("openloop-an-opensource-gumloop-that-runs-on-browser");

export const alt = post.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generatePostOGImage(post);
}
