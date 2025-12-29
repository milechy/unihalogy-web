export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-xl border border-zinc-200">
              <span className="block h-2.5 w-2.5 rotate-[10deg] rounded bg-zinc-950" />
            </span>
            ユニハロジー
          </a>

          <nav className="hidden items-center gap-4 text-sm text-zinc-600 md:flex">
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-950/5 hover:text-zinc-800" href="#issues">課題</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-950/5 hover:text-zinc-800" href="#approach">アプローチ</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-950/5 hover:text-zinc-800" href="#robots">ロボット</a>
            <a className="rounded-lg px-2 py-1 hover:bg-zinc-950/5 hover:text-zinc-800" href="#faq">FAQ</a>
          </nav>

          <a
            href="#diagnosis"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
          >
            無料診断を開始
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto w-full max-w-5xl px-5 py-14 md:py-20">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.05fr_.95fr] md:gap-10">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
              中小企業向け｜AI・ロボット導入支援
            </div>

            <h1 className="mt-5 text-[36px] font-semibold leading-[1.12] tracking-[-0.02em] text-zinc-950 md:text-[48px] md:leading-[1.1]">
              AIとロボットを、
              <br />
              使える経営判断に。
            </h1>

            <p className="mt-6 max-w-[54ch] text-[15.5px] leading-7 text-zinc-600 md:text-base">
              無人化や省人化を目的にしません。
              <br />
              日本の中小企業がテクノロジーで成長するための導入判断を、一緒に整理します。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#diagnosis"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                3分で導入可否を診断（無料）
              </a>
              <a
                href="#robots"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
              >
                ロボットを見る
              </a>
            </div>

            <p className="mt-5 max-w-[72ch] text-[12.5px] leading-6 text-zinc-500">
              売り込みは行いません。合わない場合は、そうお伝えします。
              <br />
              オフライン無料相談は枠が限られるため、適したケースのみご案内します。
            </p>
          </div>

          {/* Right: chat preview */}
          <aside id="diagnosis" className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white">
            <div className="flex items-start justify-between gap-3 border-b border-zinc-200/60 px-4 py-3">
              <div>
                <div className="text-[13px] font-medium text-zinc-700">無料｜導入可否診断</div>
                <div className="mt-0.5 text-xs text-zinc-500">所要：約3分 / 売り込みなし</div>
              </div>
              <div className="mt-0.5 whitespace-nowrap text-xs text-zinc-500">まずはここから</div>
            </div>

            <div className="flex h-[520px] flex-col gap-2.5 bg-white px-4 py-3.5">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 h-7 w-7 flex-none rounded-full border border-zinc-200/60 bg-zinc-50" />
                <div className="max-w-[85%] rounded-2xl border border-zinc-200/60 bg-zinc-50 px-3.5 py-2.5 text-sm leading-6 text-zinc-700">
                  こんにちは。導入可否を3分で整理します。<br />
                  まず、業種と「改善したい現場」を教えてください。
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl bg-zinc-950 px-3.5 py-2.5 text-sm leading-6 text-white">
                  製造業です。検査と搬送がボトルネックです。
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 h-7 w-7 flex-none rounded-full border border-zinc-200/60 bg-zinc-50" />
                <div className="max-w-[85%] rounded-2xl border border-zinc-200/60 bg-zinc-50 px-3.5 py-2.5 text-sm leading-6 text-zinc-700">
                  ありがとうございます。<br />
                  月額レンジ（例：5万/10万/30万〜）のイメージはありますか？
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-200/70 bg-white px-3.5 py-2.5 shadow-sm">
                  <span className="text-sm text-zinc-400">ここに入力…（後で本物のチャットに接続）</span>
                  <span className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-white">
                    ↑
                  </span>
                </div>

                <div className="mt-3 text-[12.5px] leading-6 text-zinc-500">
                  目的は「導入できるかどうか」を判断できる状態にすること。<br />
                  内容は要約し、次のアクション（オンライン継続 or 相談案内）をご提案します。
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="issues" className="border-t border-zinc-200/70 bg-white">
        <div className="mx-auto w-full max-w-5xl px-5 py-14">
          <h2 className="text-[22px] font-extrabold tracking-[-0.02em]">なぜ、多くの中小企業で導入が止まるのか</h2>
          <p className="mt-2 max-w-[80ch] text-[15px] leading-7 text-zinc-600">
            テクノロジー導入は、意欲の問題ではなく「判断できない構造」の問題になりがちです。私たちはまず、その構造をほどきます。
          </p>
        </div>
      </section>
    </main>
  );
}