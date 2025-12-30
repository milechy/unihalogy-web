import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogs, getBlogBySlug } from '@/content/blog/index';
import BlogShell from '@/components/blog/BlogShell';
import ReferencesSection from '@/components/article/ReferencesSection';
import RelatedPosts from '@/components/article/RelatedPosts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allBlogs = getAllBlogs();
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, exclude current, sorted by date desc)
  const relatedPosts = allBlogs
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      date: p.date,
      coverImage: p.coverImage,
    }));

  return (
    <BlogShell>
      <div className="mx-auto w-full max-w-[720px] px-5 py-12 md:px-8">
        <article>
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
              {post.readingTime && (
                <>
                  <span className="text-xs text-zinc-500">•</span>
                  <span className="text-xs text-zinc-500">{post.readingTime}</span>
                </>
              )}
            </div>
            <h1 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg leading-relaxed text-zinc-400">{post.subtitle}</p>
            )}
            {post.excerpt && !post.subtitle && (
              <p className="text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
            )}
          </header>

          <div className="space-y-6 text-zinc-300">
            {post.content && post.content.length > 0 ? (
              <p className="leading-relaxed text-[15px] md:text-[16px]">
                この記事の詳細な内容は準備中です。近日中に公開予定です。
              </p>
            ) : (
              <div>
                {post.excerpt && (
                  <p className="text-lg leading-relaxed text-zinc-200">{post.excerpt}</p>
                )}
                <p className="mt-6 leading-relaxed text-[15px] md:text-[16px]">
                  この記事の詳細な内容は準備中です。近日中に公開予定です。
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="mt-20 border-t border-zinc-800/60 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Link
                href="/blog"
                className="text-center text-sm text-zinc-400 hover:text-zinc-300 md:text-left"
              >
                ブログ一覧へ戻る
              </Link>
            </div>
          </nav>
        </article>
      </div>
      <div className="mx-auto w-full max-w-[720px] px-5 md:px-8 pb-32">
        <ReferencesSection references={post.references} />
        <RelatedPosts posts={relatedPosts} contentType="blog" currentCategory={post.category} />
      </div>
    </BlogShell>
  );
}

