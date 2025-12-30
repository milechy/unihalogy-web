'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { docCategories, getAllDocs, getFeaturedDocs, getCategoryById } from '@/content/docs/index';
import type { DocItem } from '@/content/docs/types';
import { useMemo } from 'react';

export default function DocsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get('category') || null;

  const allDocs = getAllDocs();
  const featuredDocs = getFeaturedDocs();

  const filteredDocs = useMemo(() => {
    if (!selectedCategory) return allDocs;
    return allDocs.filter((doc) => doc.categoryId === selectedCategory);
  }, [selectedCategory, allDocs]);

  const handleCategoryClick = (categoryId: string | null) => {
    if (categoryId === null) {
      router.push('/docs');
    } else {
      router.push(`/docs?category=${categoryId}`);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Hero */}
      <header className="mb-16 pb-12 border-b border-zinc-800/40">
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
          ドキュメント
        </h1>
        <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
          ユニハロジーのドキュメントは、専門家でなくても理解できることを前提に設計されています。導入前・導入後の判断や運用に役立つ情報をまとめています。
        </p>
      </header>

      {/* Philosophy */}
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          ドキュメントについての考え方
        </h2>
        <div className="max-w-[720px]">
          <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
            技術は、説明されて初めて使われます。ユニハロジーでは、難しい言葉よりも判断に使える情報を優先します。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          カテゴリから探す
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`rounded-2xl border p-6 text-left transition-colors break-words ${
              selectedCategory === null
                ? 'border-zinc-700 bg-zinc-900/30'
                : 'border-zinc-800/60 bg-zinc-900/20 hover:border-zinc-700/70'
            }`}
          >
            <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">すべて</h3>
            <p className="mb-4 text-sm text-zinc-400 break-words">すべてのドキュメントを表示</p>
            <span className="text-sm text-zinc-500">見る →</span>
          </button>
          {docCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`rounded-2xl border p-6 text-left transition-colors break-words ${
                selectedCategory === category.id
                  ? 'border-zinc-700 bg-zinc-900/30'
                  : 'border-zinc-800/60 bg-zinc-900/20 hover:border-zinc-700/70'
              }`}
            >
              <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">
                {category.title}
              </h3>
              <p className="mb-4 text-sm text-zinc-400 break-words">{category.description}</p>
              <span className="text-sm text-zinc-500">見る →</span>
            </button>
          ))}
        </div>
      </section>

      {/* Filtered docs list */}
      {selectedCategory && (
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white tracking-tight break-words">
              {getCategoryById(selectedCategory)?.title || 'ドキュメント'}
            </h2>
            <button
              onClick={() => handleCategoryClick(null)}
              className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors break-words"
            >
              すべて表示
            </button>
          </div>
          <div className="space-y-4">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => {
                const category = getCategoryById(doc.categoryId);
                return (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="block rounded-xl border border-zinc-800/60 bg-zinc-900/10 p-5 transition-colors hover:border-zinc-700/70 hover:bg-zinc-900/20 break-words"
                  >
                    <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">
                      {doc.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-400 break-words">
                      {doc.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <span>{category?.title || doc.categoryId}</span>
                      <span>•</span>
                      <time>{formatDate(doc.updatedAt)}</time>
                      {doc.readingMinutes && (
                        <>
                          <span>•</span>
                          <span>読了目安 {doc.readingMinutes}分</span>
                        </>
                      )}
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-sm text-zinc-400 break-words">このカテゴリにはまだドキュメントがありません。</p>
            )}
          </div>
        </section>
      )}

      {/* Popular docs */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          よく読まれているドキュメント
        </h2>
        <div className="space-y-4">
          {featuredDocs.map((doc) => {
            const category = getCategoryById(doc.categoryId);
            return (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="block rounded-xl border border-zinc-800/60 bg-zinc-900/10 p-5 transition-colors hover:border-zinc-700/70 hover:bg-zinc-900/20 break-words"
              >
                <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">
                  {doc.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-zinc-400 break-words">{doc.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span>{category?.title || doc.categoryId}</span>
                  <span>•</span>
                  <time>{formatDate(doc.updatedAt)}</time>
                  {doc.readingMinutes && (
                    <>
                      <span>•</span>
                      <span>読了目安 {doc.readingMinutes}分</span>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Update policy */}
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          ドキュメントの更新について
        </h2>
        <div className="max-w-[720px]">
          <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
            ドキュメントは、一度書いて終わりではありません。現場・相談・導入事例から得られた知見をもとに、内容は継続的に更新されます。
          </p>
        </div>
      </section>

      {/* Docs vs AI */}
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          ドキュメントとAIの違い
        </h2>
        <div className="max-w-[720px]">
          <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
            ドキュメントは「全体像を理解する」ためのもの。AIチャットは「自社に当てはめて整理する」ためのものです。まず読み、次にAIで整理する。その順序をおすすめします。
          </p>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="mt-16">
        <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 md:p-12 break-words">
          <h2 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
            それでも判断に迷う場合
          </h2>
          <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ドキュメントを読んでも判断が難しい場合は、AIによる事前整理をご利用ください。
          </p>
          {/* TODO: Link to the existing AI entry point used on top page */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/40 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-950 break-words"
          >
            AIで整理する（無料）
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Changelog */}
      <section className="mt-16">
        <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
          更新履歴
        </h2>
        <div className="max-w-[720px]">
          <ul className="space-y-2">
            <li className="text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
              {todayStr}：ドキュメントページ公開
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

