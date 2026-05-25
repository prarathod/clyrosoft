// Server component — related articles section below tool pages.
//
// SEO role:     Internal links from tool pages to blog posts distribute PageRank
//               to content pages, helping both rank. Google sees topic clusters:
//               tool page + supporting articles = topical authority.
//               This section targets users in the "learn more" phase after using the tool.
// UX role:      Users who calculated their age might want to read about how
//               age affects life insurance. Natural progression = lower bounce rate.
// Monetization: Articles can contain affiliate links and display ads.

import type { BlogMeta } from "lib/blog-registry";

type Props = {
  posts: BlogMeta[];
  heading?: string;
};

export default function RelatedBlogs({
  posts,
  heading = "Related Articles",
}: Props) {
  if (posts.length === 0) return null;

  return (
    <section aria-label="Related articles" className="mt-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{heading}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.slug}
            className="group flex gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-200 hover:shadow-sm transition-all"
          >
            {/* Thumbnail */}
            {post.coverImage && (
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-100">
                {/* Using a plain <img> here to avoid Next.js Image config requirements.
                    Switch to next/image after configuring image domains. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Text */}
            <div className="flex-1 min-w-0">
              {post.category && (
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </span>
              )}
              <p className="mt-0.5 text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-snug line-clamp-2 transition-colors">
                {post.title}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
