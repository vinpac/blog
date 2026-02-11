import {
  generatePostOGImage,
  getPostData,
  ogSize,
  ogContentType,
} from "@/lib/og";

const post = getPostData(
  "why-my-first-startup-didnt-succeed-and-what-i-learned-from-it",
);

export const alt = post.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generatePostOGImage(post);
}
