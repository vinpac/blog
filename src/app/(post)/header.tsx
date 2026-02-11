"use client";
import { Post } from "@/app/get-posts";
import { Header } from "@/components/Header";
import { useSelectedLayoutSegments } from "next/navigation";
import { format, formatDistanceToNow } from "date-fns";
import { usePostViews } from "@/app/hooks/usePostViews";

export const PostHeader = ({ posts }: { posts: Post[] }) => {
  const segments = useSelectedLayoutSegments();
  const postId = segments[segments.length - 1];
  const initialPost = posts.find((post) => post.id === postId);
  const { views } = usePostViews(postId);

  if (!initialPost) {
    return <></>;
  }

  return (
    <div className="-mx-6 -mt-8 px-6 py-8 dark:bg-gray-900/50 border-b dark:border-gray-800">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {initialPost.title}
      </h1>
      <div className="text-gray-600 dark:text-gray-500 text-sm flex">
        <abbr title={initialPost.date} className="no-underline">
          {format(new Date(initialPost.date), "MMMM d, yyyy")} (
          {formatDistanceToNow(new Date(initialPost.date), {
            addSuffix: true,
          })}
          )
        </abbr>
        <span className="ml-auto">{views} views</span>
      </div>
    </div>
  );
};
