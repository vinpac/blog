import fs from "fs";
import path from "path";
import * as glob from "glob";

interface Post {
  id: string;
  date: string;
  title: string;
}

function convertToTitle(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getExistingPosts(): Post[] {
  try {
    const postsFile = path.resolve("src", "app", "posts.json");
    if (fs.existsSync(postsFile)) {
      return JSON.parse(fs.readFileSync(postsFile, "utf8"));
    }
  } catch (error) {
    console.error("Error reading existing posts:", error);
  }
  return [];
}

function findNewPosts(existingPosts: Post[]): Post[] {
  const postsDir = path.join(process.cwd(), "src", "app", "(post)");
  const existingIds = new Set(existingPosts.map((post) => post.id));
  const newPosts: Post[] = [];

  // Read all directories under (post)
  const items = glob.globSync(path.join(postsDir, "**", "page.mdx"));

  for (const item of items) {
    const id = path.basename(path.dirname(item));

    // Check if page.mdx exists and post is not already in the list
    if (!existingIds.has(id)) {
      const date = new Date().toISOString();
      newPosts.push({
        id,
        date,
        title: convertToTitle(id),
      });
    }
  }

  return newPosts;
}

function main() {
  const existingPosts = getExistingPosts();
  const newPosts = findNewPosts(existingPosts);

  if (newPosts.length > 0) {
    const allPosts = [...existingPosts, ...newPosts];
    const postsFile = path.resolve("src", "app", "posts.json");

    fs.writeFileSync(postsFile, JSON.stringify(allPosts, null, 2));
    console.log(`Added ${newPosts.length} new posts:`);
    newPosts.forEach((post) => console.log(`- ${post.title} (${post.id})`));
  } else {
    console.log("No new posts found");
  }
}

main();
