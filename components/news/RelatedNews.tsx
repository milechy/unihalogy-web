import Link from 'next/link';
import type { NewsPost, NewsCategory } from '@/content/news/types';
import { getAllNews } from '@/content/news/index';

interface RelatedNewsProps {
  currentPost: NewsPost;
}

export default function RelatedNews({ currentPost }: RelatedNewsProps) {
  const allPosts = getAllNews();
  const relatedPosts = allPosts
    .filter(
      (post) =>
        post.slug !== currentPost.slug && post.category === currentPost.category
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  const categoryParam = encodeURIComponent(currentPost.category);

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-200">さらに読む</h2>
        <Link
          href={`/news?category=${categoryParam}`}
          className="text-sm text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 transition-colors hover:decoration-zinc-500/50 hover:text-zinc-300"
        >
          すべてを表示
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className="group block rounded-xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden transition-all hover:border-zinc-700 hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-zinc-600">{post.coverImage.alt}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 line-clamp-2 font-medium text-zinc-200 group-hover:text-zinc-100">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{post.category}</span>
                <span>•</span>
                <time>
                  {new Date(post.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

