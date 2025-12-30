import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-4xl px-5 py-20">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-medium text-zinc-200">ロボットが見つかりません</h1>
          <p className="mb-8 text-sm text-zinc-400">
            指定されたロボットの情報が見つかりませんでした。
          </p>
          <Link
            href="/robots"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/30 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900/50"
          >
            ロボット一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

