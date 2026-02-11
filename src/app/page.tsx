import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { getPosts } from "@/app/get-posts";
import { ProfileHeaderSection } from "@/app/about/about-header";

const FALLBACK_COLORS = [
  "bg-rose-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-fuchsia-500",
];

export default async function Blog() {
  const posts = await getPosts();
  let lastRenderedYear: number | null = null;

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-950 border-x dark:border-gray-800 border-b  pb-16 flex-1 mt-6">
        {/* Hero Section */}
        <ProfileHeaderSection>
          <h1 className="text-4xl md:text-5xl tracking-tight !leading-tight text-gray-900 dark:text-gray-100">
            Hi there,
            <br />
            I&apos;m <span className="font-bold font-serif">Vinicius</span>.
          </h1>
          <p className="max-w-[18rem] mt-2 text-lg md:text-xl text-gray-500 dark:text-gray-400">
            I share ideas, launch products, and build things.
          </p>
        </ProfileHeaderSection>
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
            {posts.map((post, index) => {
              const year = new Date(post.date).getFullYear();
              const isNewYear = lastRenderedYear !== year;
              lastRenderedYear = year;
              const fallbackColor =
                FALLBACK_COLORS[index % FALLBACK_COLORS.length];
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
                      className="flex items-center gap-2 hover:underline py-3 w-full"
                    >
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={20}
                            height={20}
                            className="rounded-sm object-contain"
                          />
                        ) : (
                          <span
                            className={`w-3 h-3 rotate-45 ${fallbackColor}`}
                          />
                        )}
                      </span>
                      <span>{post.title}</span>
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
