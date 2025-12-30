import { getAllCases, getFeaturedCases } from '@/content/cases/index';
import CasesShell from '@/components/cases/CasesShell';
import FeaturedRow from '@/components/cases/FeaturedRow';
import SectionGrid from '@/components/cases/SectionGrid';
import type { CaseCategory } from '@/content/cases/types';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function CasesPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const allCases = getAllCases();
  const featured = getFeaturedCases();
  const regularCases = allCases.filter((post) => !post.featured);
  
  // Validate category from query param
  const validCategories: CaseCategory[] = [
    '飲食・カフェ',
    'イベント',
    'オフィス',
    '商業施設',
    '交通・公共',
    '製造・物流',
    '医療・介護',
    'その他',
  ];
  const initialCategory: CaseCategory | 'すべて' = 
    category && validCategories.includes(category as CaseCategory)
      ? (category as CaseCategory)
      : 'すべて';

  return (
    <CasesShell>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8">
        {/* Page header */}
        <header className="mb-12 pb-8 border-b border-zinc-800/60">
          <h1 className="mb-2 text-4xl font-light tracking-tight text-white md:text-5xl">
            活用事例
          </h1>
          <p className="text-sm text-zinc-400">
            導入背景・設置条件・運用のポイントを、静かにまとめます。
          </p>
        </header>

        {/* Featured section */}
        {featured.length > 0 && <FeaturedRow featured={featured} />}

        {/* Regular cases grid */}
        <SectionGrid posts={regularCases} initialCategory={initialCategory} />
      </div>
    </CasesShell>
  );
}

