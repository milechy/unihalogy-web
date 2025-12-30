import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-300">
          <span className="grid h-6 w-6 place-items-center rounded-lg border border-zinc-800">
            <span className="block h-2 w-2 rotate-[10deg] rounded bg-zinc-400" />
          </span>
          ユニハロジー
        </Link>

        <nav className="hidden items-center gap-3 text-xs text-zinc-500 md:flex">
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="#research">研究</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="#safety">安全性</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="/robots">テクノロジー</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="/cases">活用事例</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="/blog">ブログ</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="/company">会社情報</Link>
          <Link className="rounded px-2 py-1 hover:text-zinc-400" href="/news">ニュース</Link>
        </nav>
      </div>
    </header>
  );
}

