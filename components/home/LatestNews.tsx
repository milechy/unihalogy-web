'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { NewsPost } from '@/content/news/types';

interface LatestNewsProps {
  posts: NewsPost[];
}

function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -15% 0px', ...options }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [options]);

  return { ref, isInView, prefersReducedMotion };
}

export default function LatestNews({ posts }: LatestNewsProps) {
  const { ref, isInView, prefersReducedMotion } = useInView();

  // Split into two lanes: left (0, 2, 4) and right (1, 3, 5)
  const leftLane = [posts[0], posts[2], posts[4]].filter(Boolean);
  const rightLane = [posts[1], posts[3], posts[5]].filter(Boolean);

  const getItemStyle = (index: number) => {
    if (prefersReducedMotion || isInView) {
      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: prefersReducedMotion ? 'none' : 'opacity 400ms ease-out, transform 400ms ease-out',
        transitionDelay: prefersReducedMotion ? '0ms' : `${index * 75}ms`,
      };
    }

    return {
      opacity: 0,
      transform: 'translateY(12px)',
      transition: 'opacity 400ms ease-out, transform 400ms ease-out',
      transitionDelay: `${index * 75}ms`,
    };
  };

  return (
    <section ref={ref} className="mx-auto w-full max-w-[1120px] px-6 py-12 md:py-16">
      {/* Section header */}
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="text-2xl font-medium text-zinc-200 md:text-3xl">最新ニュース</h2>
        <Link href="/news" className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
          すべてを表示
        </Link>
      </div>

      {/* Two-lane layout */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-14">
        {/* Left lane */}
        <div className="flex flex-col gap-6">
          {leftLane.map((post, index) => {
            const globalIndex = index * 2; // 0, 2, 4
            const style = getItemStyle(globalIndex);

            return (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex gap-4 md:gap-6 items-start rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-4 hover:border-zinc-700/70 hover:-translate-y-1 transition-all"
                style={style}
              >
                {/* Thumbnail */}
                <div className="relative h-24 w-24 md:h-28 md:w-28 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-800/50 to-zinc-800/30">
                  {post.coverImage?.src ? (
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 96px, 112px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-zinc-600">{post.title}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-zinc-100 text-[16px] leading-snug md:text-[17px] font-medium line-clamp-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex gap-3 text-zinc-500 text-[12px]">
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
            );
          })}
        </div>

        {/* Right lane */}
        <div className="flex flex-col gap-6">
          {rightLane.map((post, index) => {
            const globalIndex = index * 2 + 1; // 1, 3, 5
            const style = getItemStyle(globalIndex);

            return (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex gap-4 md:gap-6 items-start rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-4 hover:border-zinc-700/70 hover:-translate-y-1 transition-all"
                style={style}
              >
                {/* Thumbnail */}
                <div className="relative h-24 w-24 md:h-28 md:w-28 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-800/50 to-zinc-800/30">
                  {post.coverImage?.src ? (
                    <Image
                      src={post.coverImage.src}
                      alt={post.coverImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 96px, 112px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-zinc-600">{post.title}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-zinc-100 text-[16px] leading-snug md:text-[17px] font-medium line-clamp-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex gap-3 text-zinc-500 text-[12px]">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

