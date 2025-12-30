import BlogShell from '@/components/blog/BlogShell';
import Link from 'next/link';

export default function NotFound() {
  return (
    <BlogShell>
      <div className="mx-auto w-full max-w-[720px] px-5 py-12 md:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
            記事が見つかりません
          </h1>
          <p className="mb-8 text-zinc-400">
            お探しのブログ記事は存在しないか、削除された可能性があります。
          </p>
          <Link
            href="/blog"
            className="inline-block rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-2 text-sm text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
          >
            ブログ一覧へ戻る
          </Link>
        </div>
      </div>
    </BlogShell>
  );
}

