import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen text-white p-8 max-w-3xl mx-auto flex flex-col">
      <Header />
      <p className="text-gray-400 text-lg mb-12">
        Full Stack developer Developer working to get the most out of the world
      </p>
      <main className="-mx-4 flex-1">
        <table className="w-full">
          <thead>
            <tr className="font-mono text-left text-gray-400 border-b border-gray-800">
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
            {posts.map((post) => (
              <tr
                key={post.id}
                className="group cursor-pointer hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-2 pl-4 py-3 w-14 text-gray-500">
                  {new Date(post.date).getFullYear()}
                </td>
                <td className="px-2 pl-4 text-gray-300 group-hover:text-gray-200">
                  <Link
                    href={`/posts/${post.id}`}
                    className="block hover:underline py-3 w-full"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-2 pr-4 py-3 text-gray-500 text-right w-5">
                  {post.views}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}
