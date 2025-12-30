'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { BlogPost, BlogCategory } from '@/content/blog/types';
import BlogCard from './BlogCard';

interface SectionGridProps {
  posts: BlogPost[];
  initialCategory?: BlogCategory | 'すべて';
}

export default function SectionGrid({ posts, initialCategory = 'すべて' }: SectionGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'すべて'>(initialCategory);
  
  // Sync with URL on mount and when searchParams change
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const validCategories: BlogCategory[] = ['導入ノウハウ', '技術解説', '現場レポート', '考え方'];
      if (validCategories.includes(categoryParam as BlogCategory)) {
        setSelectedCategory(categoryParam as BlogCategory);
      }
    } else {
      setSelectedCategory('すべて');
    }
  }, [searchParams]);

  const categories: Array<BlogCategory | 'すべて'> = ['すべて', '導入ノウハウ', '技術解説', '現場レポート', '考え方'];

  const handleCategoryChange = (category: BlogCategory | 'すべて') => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'すべて') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'すべて') {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Group by category for section display
  const postsByCategory = useMemo(() => {
    const grouped: Record<BlogCategory, BlogPost[]> = {
      導入ノウハウ: [],
      技術解説: [],
      現場レポート: [],
      考え方: [],
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
          {(['導入ノウハウ', '技術解説', '現場レポート', '考え方'] as BlogCategory[]).map((category) => {
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
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

