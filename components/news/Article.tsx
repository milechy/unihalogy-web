import Link from 'next/link';
import type { NewsPost } from '@/content/news/types';
import BlockRenderer from './BlockRenderer';

interface ArticleProps {
  post: NewsPost;
  previousPost?: NewsPost | null;
  nextPost?: NewsPost | null;
}

export default function Article({ post, previousPost, nextPost }: ArticleProps) {
  return (
    <article className="mx-auto w-full max-w-[720px] px-5 pb-32 pt-12 md:px-8">
      {/* Header */}
      <header className="mb-12 pb-8 border-b border-zinc-800/60">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-400">
            {post.category}
          </span>
          <time className="text-xs text-zinc-500">
            {new Date(post.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h1 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-lg leading-relaxed text-zinc-400">{post.subtitle}</p>
        )}
      </header>

      {/* Content */}
      {post.content && post.content.length > 0 ? (
        <BlockRenderer blocks={post.content} />
      ) : (
        <div className="space-y-6 text-zinc-300">
          {post.excerpt && (
            <p className="text-lg leading-relaxed text-zinc-200">{post.excerpt}</p>
          )}
          <p className="leading-relaxed text-[15px] md:text-[16px]">
            この記事の詳細な内容は準備中です。近日中に公開予定です。
          </p>
        </div>
      )}

      {/* Navigation */}
      <nav className="mt-20 border-t border-zinc-800/60 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {previousPost ? (
            <Link
              href={`/news/${previousPost.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>前の記事</span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/news"
            className="text-center text-sm text-zinc-400 hover:text-zinc-300 md:text-left"
          >
            ニュース一覧へ戻る
          </Link>
          {nextPost ? (
            <Link
              href={`/news/${nextPost.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 md:ml-auto"
            >
              <span>次の記事</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </article>
  );
}

