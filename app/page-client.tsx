'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { RobotData } from '@/lib/robots';
import type { NewsPost } from '@/content/news/types';
import type { CasePost } from '@/content/cases/types';
import LatestLPShowcase from '@/components/home/LatestLPShowcase';
import LatestNews from '@/components/home/LatestNews';

function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -15% 0px', ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView] as const;
}

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

interface PageClientProps {
  initialRobots: RobotData[];
  latestNews: NewsPost[];
  latestCases: CasePost[];
}

export default function PageClient({ initialRobots, latestNews, latestCases }: PageClientProps) {
  const [inputValue, setInputValue] = useState('');
  const [showChatButton, setShowChatButton] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [casesRef, isCasesInView] = useInView();
  const [researchRef, isResearchInView] = useInView();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const footer = document.querySelector('footer');
        const heroOutOfView = heroRect.bottom < 0;
        let footerInView = false;
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          footerInView = footerRect.top < window.innerHeight;
        }
        setShowChatButton(heroOutOfView && !footerInView);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const starters = [
    '製造業で、検査工程の自動化を検討しています',
    '人手不足を解消するロボット導入は可能ですか？',
    '補助金を使ってAI・ロボット導入できますか？',
  ];

  // News and cases are now passed as props from server component

  const research = [
    {
      title: 'Evaluating chain-of-thought monitorability',
      category: '研究',
      date: '2025年12月18日',
      slug: 'chain-of-thought-monitorability',
    },
    {
      title: 'AIの科学研究タスク遂行能力の評価',
      category: '研究',
      date: '2025年12月16日',
      slug: 'ai-scientific-research-evaluation',
    },
    {
      title: 'AIの能力を測定して、生物学研究を加速させる',
      category: '研究',
      date: '2025年12月16日',
      slug: 'ai-biology-research-acceleration',
    },
  ];

  const handleStarterClick = (text: string) => {
    setInputValue(text);
  };

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <section ref={heroRef} className="flex min-h-[100svh] flex-col items-center justify-center px-5 pt-8 pb-12">
        <div className="w-full max-w-3xl">
          <p className="mb-8 text-center text-2xl font-semibold text-white">
            貴社にあったテクノロジーを提案します
          </p>

          <div className="relative">
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-3.5 shadow-lg">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="メッセージを入力..."
                className="flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 hover:bg-zinc-200">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {starters.map((starter, index) => (
                <button
                  key={index}
                  onClick={() => handleStarterClick(starter)}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900/50"
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest LP Showcase Section */}
      <LatestLPShowcase robots={initialRobots} />

      {/* Latest News Section */}
      <LatestNews posts={latestNews} />

      <section
        ref={casesRef}
        className="mx-auto w-full max-w-6xl px-5 pt-20 pb-20"
        style={{
          opacity: isCasesInView ? 1 : 0,
          transform: prefersReducedMotion ? 'none' : isCasesInView ? 'translateY(0)' : 'translateY(6px)',
          transition: prefersReducedMotion
            ? 'opacity 240ms ease-out'
            : 'opacity 240ms ease-out, transform 240ms ease-out',
        }}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white">活用事例</h2>
          <Link href="/cases" className="text-sm text-zinc-400 hover:text-zinc-300">
            すべてを表示
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestCases.map((item, index) => {
            const columnsPerRow = 3;
            const row = Math.floor(index / columnsPerRow);
            const col = index % columnsPerRow;
            const delay = row * 120 + col * 40;

            return (
              <Link
                key={item.slug}
                href={`/cases/${item.slug}`}
                className="group rounded-lg border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/50"
                style={{
                  opacity: isCasesInView ? 1 : 0,
                  transform: prefersReducedMotion ? 'none' : isCasesInView ? 'translateY(0)' : 'translateY(6px)',
                  transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
                  transition: prefersReducedMotion
                    ? 'opacity 240ms ease-out'
                    : 'opacity 240ms ease-out, transform 240ms ease-out',
                }}
              >
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
                <div className="p-5">
                  <h3 className="mb-3 text-base font-medium text-zinc-200 group-hover:text-zinc-100">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{item.category}</span>
                    <span>•</span>
                    <time>
                      {new Date(item.date).toLocaleDateString('ja-JP', {
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
      </section>

      <section
        ref={researchRef}
        className="mx-auto w-full max-w-6xl px-5 pt-20 pb-20"
        style={{
          opacity: isResearchInView ? 1 : 0,
          transform: prefersReducedMotion ? 'none' : isResearchInView ? 'translateY(0)' : 'translateY(6px)',
          transition: prefersReducedMotion
            ? 'opacity 240ms ease-out'
            : 'opacity 240ms ease-out, transform 240ms ease-out',
        }}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-white">最新の研究</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-zinc-300">
            すべてを表示
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {research.map((item, index) => {
            const columnsPerRow = 3;
            const row = Math.floor(index / columnsPerRow);
            const col = index % columnsPerRow;
            const delay = row * 120 + col * 40;

            return (
              <a
                key={item.slug}
                href={`/research/${item.slug}`}
                className="group rounded-lg border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 hover:bg-zinc-900/50"
                style={{
                  opacity: isResearchInView ? 1 : 0,
                  transform: prefersReducedMotion ? 'none' : isResearchInView ? 'translateY(0)' : 'translateY(6px)',
                  transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
                  transition: prefersReducedMotion
                    ? 'opacity 240ms ease-out'
                    : 'opacity 240ms ease-out, transform 240ms ease-out',
                }}
              >
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
                <div className="p-5">
                  <h3 className="mb-3 text-base font-medium text-zinc-200 group-hover:text-zinc-100">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {showChatButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-zinc-700/50 bg-zinc-900/30 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all hover:scale-105 hover:bg-zinc-900/50 hover:border-zinc-600/50"
          style={{
            background: 'rgba(24, 24, 27, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          KARAKURIから問い合わせする
        </button>
      )}
    </main>
  );
}

