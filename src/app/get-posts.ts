import postsData from "./posts.json";
import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  title: string;
  image?: string;
  views: number;
  viewsFormatted: string;
};

export const getPosts = async () => {
  const allViews: null | Record<string, string> = await redis.hgetall("views");
  const posts = postsData
    .map((post): Post => {
      const views = Number(allViews?.[post.id] ?? 0);
      return {
        ...post,
        views,
        viewsFormatted: commaNumber(views),
      };
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  return posts;
};
