import { getAllNews, getFeaturedNews } from '@/content/news/index';
import NewsShell from '@/components/news/NewsShell';
import FeaturedRow from '@/components/news/FeaturedRow';
import SectionGrid from '@/components/news/SectionGrid';
import type { NewsCategory } from '@/content/news/types';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function NewsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const allNews = getAllNews();
  const featured = getFeaturedNews();
  const regularNews = allNews.filter((post) => !post.featured);
  
  // Validate category from query param
  const validCategories: NewsCategory[] = ['製品', '研究', '導入事例', 'お知らせ'];
  const initialCategory: NewsCategory | 'すべて' = 
    category && validCategories.includes(category as NewsCategory)
      ? (category as NewsCategory)
      : 'すべて';

  return (
    <NewsShell>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8">
        {/* Page header */}
        <header className="mb-12 pb-8 border-b border-zinc-800/60">
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white md:text-5xl">
            ニュース
          </h1>
          <p className="text-sm text-zinc-400">
            ユニハロジーの開発・導入事例・更新情報
          </p>
        </header>

        {/* Featured section */}
        {featured.length > 0 && <FeaturedRow featured={featured} />}

        {/* Regular news grid */}
        <SectionGrid posts={regularNews} initialCategory={initialCategory} />
      </div>
    </NewsShell>
  );
}

