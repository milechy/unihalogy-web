import { notFound } from 'next/navigation';
import { getDocBySlug, getCategoryById } from '@/content/docs/index';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const category = getCategoryById(doc.categoryId);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="mb-8">
          <Link
            href="/docs"
            className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors break-words"
          >
            ← ドキュメント一覧に戻る
          </Link>
        </div>

        <header className="mb-12 pb-8 border-b border-zinc-800/40">
          <div className="mb-4 flex items-center gap-3 text-xs text-zinc-500">
            <span>{category?.title || doc.categoryId}</span>
            <span>•</span>
            <time>{new Date(doc.updatedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            {doc.readingMinutes && (
              <>
                <span>•</span>
                <span>読了目安 {doc.readingMinutes}分</span>
              </>
            )}
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
            {doc.title}
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            {doc.excerpt}
          </p>
        </header>

        <div className="max-w-[720px]">
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 break-words">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              このドキュメントの詳細な内容は準備中です。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

