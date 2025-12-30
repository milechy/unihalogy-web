'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { RobotData } from '@/lib/robots';
import { useRevealStagger } from './useRevealStagger';

interface LatestLPShowcaseProps {
  robots: RobotData[];
}

export default function LatestLPShowcase({ robots }: LatestLPShowcaseProps) {
  // Get first robot as featured, next 3 as side items
  const featured = robots[0];
  const sideItems = robots.slice(1, 4);

  const { containerRef, getItemStyle } = useRevealStagger(sideItems.length, {
    threshold: 0.25,
    rootMargin: '0px 0px -15% 0px',
    staggerDelay: 100,
    transitionDuration: 600,
  });

  if (!featured) {
    return null;
  }

  const featuredImage = featured.images?.[0] || null;
  const featuredCategory = featured.category?.[0] || 'その他';

  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 py-12 md:py-16">
      {/* Section header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-medium text-zinc-200 md:text-3xl">
          新しいテクノロジーが続々登場
        </h2>
        <Link
          href="/robots"
          className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          すべてを表示
        </Link>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-12 md:gap-8">
        {/* Featured card (left, 60%) */}
        <div className="md:col-span-7">
          <Link
            href={`/robots/${featured.slug}`}
            className="group block rounded-2xl border border-zinc-800/60 bg-zinc-900/20 overflow-hidden transition-all hover:border-zinc-700/70"
          >
            {/* Image area */}
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-800/30">
              {featuredImage ? (
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt || featured.nameJa}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-zinc-600">{featured.nameJa}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-400">
                  {featuredCategory}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-medium text-zinc-100 md:text-2xl group-hover:text-white transition-colors">
                {featured.nameJa}
              </h3>
              {featured.description && (
                <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                  {featured.description}
                </p>
              )}
              <span className="inline-flex items-center text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
                詳細を見る
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Side stack (right, 40%) */}
        <div ref={containerRef} className="md:col-span-5 flex flex-col gap-4">
          {sideItems.map((robot, index) => {
            const itemImage = robot.images?.[0] || null;
            const itemCategory = robot.category?.[0] || 'その他';
            const style = getItemStyle(index);

            return (
              <Link
                key={robot.slug}
                href={`/robots/${robot.slug}`}
                className="group block rounded-2xl border border-zinc-800/60 bg-zinc-900/20 overflow-hidden transition-all hover:border-zinc-700/70 hover:-translate-y-1"
                style={style}
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800/50 to-zinc-800/30">
                    {itemImage ? (
                      <Image
                        src={itemImage.src}
                        alt={itemImage.alt || robot.nameJa}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="96px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-zinc-600">{robot.nameJa}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-2">
                    <h4 className="mb-2 line-clamp-2 text-sm font-medium text-zinc-100 group-hover:text-white transition-colors">
                      {robot.nameJa}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span>{itemCategory}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

