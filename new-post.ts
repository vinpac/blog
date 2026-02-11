import fs from "fs";
import path from "path";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith("-"));

  if (args.length === 0) {
    console.error("Usage: bun new-post <Post Title>");
    console.error("Example: bun new-post Why I think I procrastinate");
    process.exit(1);
  }

  const title = args.join(" ");
  const slug = slugify(title);
  const year = new Date().getFullYear().toString();
  const postDir = path.join("src", "app", "(post)", year, slug);

  if (fs.existsSync(postDir)) {
    console.error(`Post already exists at ${postDir}`);
    process.exit(1);
  }

  // Create post directory
  fs.mkdirSync(postDir, { recursive: true });

  // Create page.mdx
  const pageMdx = `export const metadata = {
  title: ${JSON.stringify(title)},
  description: "",
};

Write your post here.
`;
  fs.writeFileSync(path.join(postDir, "page.mdx"), pageMdx);

  // Create opengraph-image.tsx
  const ogImage = `import {
  generatePostOGImage,
  getPostData,
  ogSize,
  ogContentType,
} from "@/lib/og";

const post = getPostData(${JSON.stringify(slug)});

export const alt = post.title;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return generatePostOGImage(post);
}
`;
  fs.writeFileSync(path.join(postDir, "opengraph-image.tsx"), ogImage);

  // Update posts.json
  const postsFile = path.resolve("src", "app", "posts.json");
  const posts = JSON.parse(fs.readFileSync(postsFile, "utf8"));
  posts.push({
    id: slug,
    date: new Date().toISOString(),
    title,
  });
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2) + "\n");

  console.log(`✓ Created new post: "${title}"`);
  console.log(`  ${postDir}/page.mdx`);
  console.log(`  ${postDir}/opengraph-image.tsx`);
  console.log(`  Updated posts.json`);
}

main();
