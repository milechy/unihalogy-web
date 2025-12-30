import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: '現場適応型AI（Applied AI）',
      description: '現場の制約（人、時間、予算、制度）を前提に、実務で機能するAIの設計と評価を行います。',
    },
    {
      title: '人と協調するロボット',
      description: '完全自動化ではなく、人の作業を補助・拡張する協調型ロボットの設計と運用を研究します。',
    },
    {
      title: '安全設計とフェイルセーフ',
      description: '異常時にどう振る舞うか。停止・縮退・人の介入を前提とした安全設計を重視します。',
    },
    {
      title: '学習と定着の仕組み',
      description: '導入後に「使われなくなる」ことを防ぐための、学習支援・AIサポート・マニュアル設計を研究します。',
    },
    {
      title: '制度・ガイドラインと技術の接続',
      description: '国のガイドラインや補助金制度と、現場技術をどう接続するかを検討します。',
    },
  ];

  const researchFlowSteps = [
    {
      step: 1,
      title: '課題の仮説化（現場・相談データ）',
    },
    {
      step: 2,
      title: '小規模検証（PoC）',
    },
    {
      step: 3,
      title: '現場導入での観測',
    },
    {
      step: 4,
      title: 'フィードバックを研究に還元',
    },
  ];

  const opennessPoints = [
    '可能な範囲で知見を公開します',
    '導入事例・学びはブログやドキュメントに反映します',
    '外部パートナーとの共同研究も歓迎します',
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        {/* Hero */}
        <header className="mb-16 pb-12 border-b border-zinc-800/40">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
            研究と実装について
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ユニハロジーの研究は、論文のためではなく、現場で安全に、継続して使われる技術を生み出すために行われます。
          </p>
        </header>

        {/* Research philosophy */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            私たちの研究の考え方
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              私たちは、AIとロボットが本当に好きです。同時に、技術は「使われ続けて初めて価値になる」と考えています。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              そのため、ユニハロジーの研究はアルゴリズム単体の性能向上よりも、運用・保守・教育・失敗時の挙動まで含めた設計を対象とします。
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            研究領域
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
              >
                <h3 className="mb-3 text-base font-medium text-white break-words md:text-lg">
                  {area.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bridge from research to implementation */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            研究は、実装で検証されます
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {researchFlowSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-300">
                  {step.step}
                </span>
                <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500 break-words">
            研究成果は、製品・導入プロセス・AIサポートに反映されます。
          </p>
        </section>

        {/* AI chat & research relationship */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AIによる事前整理と研究
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              AIチャットで得られる相談内容は、個別の提案だけでなく研究にも活用されます。どこで迷われているか、どの説明が不足しているか。それらは次の研究テーマになります。
            </p>
            <p className="text-sm text-zinc-500 break-words">
              個別情報の取り扱いはセキュリティ方針に基づきます。
            </p>
          </div>
        </section>

        {/* Openness & transparency */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            公開と共有について
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              研究は囲い込むものではなく、現場で役立つ形で共有されるべきだと考えています。
            </p>
            <ul className="space-y-3">
              {opennessPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Collaboration */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            共同研究・協業について
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              現場課題を持つ企業、ハードウェア・ソフトウェアメーカー、研究機関との共同研究・実証を歓迎しています。
            </p>
            {/* TODO: Link to /contact if available */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/60 bg-zinc-900/20 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/30 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-950 break-words"
            >
              相談する
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
                {todayStr}：研究ページ公開
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

