import Link from 'next/link';
import NewsShell from '@/components/news/NewsShell';

export default function NotFound() {
  return (
    <NewsShell>
      <div className="mx-auto w-full max-w-4xl px-5 py-12 md:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light tracking-tight text-white">記事が見つかりません</h1>
          <p className="mb-8 text-zinc-400">
            お探しの記事は存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/30 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900/50"
          >
            ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </NewsShell>
  );
}

