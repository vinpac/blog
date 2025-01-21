import Link from "next/link";
import { Header } from "@/components/Header";
import { getPosts } from "@/app/get-posts";

export default async function Blog() {
  const posts = await getPosts();
  let lastRenderedYear: number | null = null;

  return (
    <>
      <Header />
      <main className="-mx-4 flex-1 mt-8">
        <table className="w-full">
          <thead>
            <tr className="font-mono text-left text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
              <th className="pl-4 pb-2 uppercase text-xs font-medium">Date</th>
              <th className="px-2 pl-4 pb-2 uppercase text-xs font-medium">
                Title
              </th>
              <th className="px-2 pb-2 uppercase text-xs font-medium text-right">
                Views
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              const year = new Date(post.date).getFullYear();
              const isNewYear = lastRenderedYear !== year;
              lastRenderedYear = year;
              return (
                <tr
                  key={post.id}
                  className="group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td
                    className={[
                      "px-2 pl-4 py-3 w-14 text-gray-500",
                      !isNewYear ? "opacity-0" : "",
                    ].join(" ")}
                  >
                    {year}
                  </td>
                  <td className="px-2 pl-4 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                    <Link
                      href={`/${new Date(post.date).getFullYear()}/${post.id}`}
                      className="block hover:underline py-3 w-full"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-2 pr-4 py-3 text-gray-500 text-right w-5">
                    {post.views}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
