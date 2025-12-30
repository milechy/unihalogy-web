'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import type { RobotData } from '@/lib/robots';

interface RobotsContentProps {
  initialRobots: RobotData[];
}

export default function RobotsContent({ initialRobots }: RobotsContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');

  // Read category from URL on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Get all unique categories
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    initialRobots.forEach((robot) => {
      if (robot.category && robot.category.length > 0) {
        robot.category.forEach((cat) => allCategories.add(cat));
      }
    });
    return ['すべて', ...Array.from(allCategories).sort()];
  }, [initialRobots]);

  // Filter and sort robots
  const filteredRobots = useMemo(() => {
    let filtered = initialRobots;

    // Filter by category
    if (selectedCategory !== 'すべて') {
      filtered = initialRobots.filter((robot) => {
        const robotCategories = robot.category || ['その他'];
        return robotCategories.includes(selectedCategory);
      });
    }

    // Sort: featured first, then alphabetical by nameJa
    return filtered.sort((a, b) => {
      // Featured robots first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then alphabetical by nameJa
      return a.nameJa.localeCompare(b.nameJa, 'ja');
    });
  }, [initialRobots, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL without page reload
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'すべて') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/robots?${params.toString()}`, { scroll: false });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <h1 className="mb-12 text-3xl font-semibold text-white">テクノロジー一覧</h1>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'border-zinc-600 text-zinc-100'
                  : 'border-zinc-800/60 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Robots Grid */}
        {filteredRobots.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRobots.map((robot) => (
              <Link
                key={robot.slug}
                href={`/robots/${robot.slug}`}
                className="group rounded-lg border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
                <div className="p-5">
                  <h2 className="mb-2 text-lg font-medium text-zinc-200 group-hover:text-zinc-100">
                    {robot.name} ({robot.nameJa})
                  </h2>
                  <p className="mb-3 text-sm text-zinc-400">{robot.description}</p>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {(robot.category || ['その他']).map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-400"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500">{robot.priceRange}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-zinc-400">該当するロボットが見つかりませんでした</p>
          </div>
        )}
      </div>
    </main>
  );
}

