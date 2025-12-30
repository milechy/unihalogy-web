'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { CasePost, CaseCategory } from '@/content/cases/types';
import CaseCard from './CaseCard';

interface SectionGridProps {
  posts: CasePost[];
  initialCategory?: CaseCategory | 'すべて';
}

export default function SectionGrid({ posts, initialCategory = 'すべて' }: SectionGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory | 'すべて'>(initialCategory);
  
  // Sync with URL on mount and when searchParams change
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
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
      if (validCategories.includes(categoryParam as CaseCategory)) {
        setSelectedCategory(categoryParam as CaseCategory);
      }
    } else {
      setSelectedCategory('すべて');
    }
  }, [searchParams]);

  const categories: Array<CaseCategory | 'すべて'> = [
    'すべて',
    '飲食・カフェ',
    'イベント',
    'オフィス',
    '商業施設',
    '交通・公共',
    '製造・物流',
    '医療・介護',
    'その他',
  ];

  const handleCategoryChange = (category: CaseCategory | 'すべて') => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'すべて') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/cases?${params.toString()}`, { scroll: false });
  };

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'すべて') {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Group by category for section display
  const postsByCategory = useMemo(() => {
    const grouped: Record<CaseCategory, CasePost[]> = {
      '飲食・カフェ': [],
      イベント: [],
      オフィス: [],
      商業施設: [],
      '交通・公共': [],
      '製造・物流': [],
      '医療・介護': [],
      その他: [],
    };

    filteredPosts.forEach((post) => {
      if (grouped[post.category]) {
        grouped[post.category].push(post);
      }
    });

    return grouped;
  }, [filteredPosts]);

  return (
    <div>
      {/* Category filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'border-zinc-600 bg-zinc-900/50 text-zinc-100'
                : 'border-zinc-800/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sections by category */}
      {selectedCategory === 'すべて' ? (
        <>
          {(
            [
              '飲食・カフェ',
              'イベント',
              'オフィス',
              '商業施設',
              '交通・公共',
              '製造・物流',
              '医療・介護',
              'その他',
            ] as CaseCategory[]
          ).map((category) => {
            const categoryPosts = postsByCategory[category];
            if (categoryPosts.length === 0) return null;

            return (
              <section key={category} className="mb-12">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-medium text-zinc-200">{category}</h2>
                  {categoryPosts.length > 3 && (
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="text-sm text-zinc-400 hover:text-zinc-300"
                    >
                      すべて表示
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryPosts.slice(0, 3).map((post) => (
                    <CaseCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <CaseCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

