import { getAllBlogs, getFeaturedBlogs } from '@/content/blog/index';
import BlogShell from '@/components/blog/BlogShell';
import FeaturedRow from '@/components/blog/FeaturedRow';
import SectionGrid from '@/components/blog/SectionGrid';
import type { BlogCategory } from '@/content/blog/types';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const allBlogs = getAllBlogs();
  const featured = getFeaturedBlogs();
  const regularBlogs = allBlogs.filter((post) => !post.featured);
  
  // Validate category from query param
  const validCategories: BlogCategory[] = ['導入ノウハウ', '技術解説', '現場レポート', '考え方'];
  const initialCategory: BlogCategory | 'すべて' = 
    category && validCategories.includes(category as BlogCategory)
      ? (category as BlogCategory)
      : 'すべて';

  return (
    <BlogShell>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8">
        {/* Page header */}
        <header className="mb-12 pb-8 border-b border-zinc-800/60">
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white md:text-5xl">
            ブログ
          </h1>
          <p className="text-sm text-zinc-400">
            現場で使えるAI・ロボット導入の考え方を整理します。
          </p>
        </header>

        {/* Featured section */}
        {featured.length > 0 && <FeaturedRow featured={featured} />}

        {/* Regular blog grid */}
        <SectionGrid posts={regularBlogs} initialCategory={initialCategory} />
      </div>
    </BlogShell>
  );
}

