import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-[720px]">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
            ドキュメントが見つかりません
          </h1>
          <p className="mb-8 text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            お探しのドキュメントは存在しないか、移動された可能性があります。
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
          >
            ドキュメント一覧に戻る
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
      </div>
    </main>
  );
}

