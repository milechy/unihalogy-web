import Link from 'next/link';

export default function CharterPage() {
  const principles = [
    {
      number: 1,
      title: '「無人化」をゴールにしない',
      description: '人の価値を前提に、適切に自動化する。目的は現場の安定と余力の創出です。',
    },
    {
      number: 2,
      title: '現場で回ることを最優先する',
      description: '運用・保守・教育まで含めて設計し、導入後に困らない形を目指します。',
    },
    {
      number: 3,
      title: '"導入しない"提案を含める',
      description: '合わない場合は、導入を勧めません。最適解は、時に「見送ること」です。',
    },
    {
      number: 4,
      title: 'AI入口（事前整理）を必須にする',
      description: '相談の前に、課題・制約・目的をAIで整理します。無駄な商談を減らすためです。',
    },
    {
      number: 5,
      title: '学習と定着を支援する',
      description: '導入後の学習、サポート、マニュアルは、無償のAIアシスタントで提供します。',
    },
    {
      number: 6,
      title: '費用とリスクを設計する',
      description: '月額導入、最低3ヶ月、効果が薄い場合の返却など、撤退可能性を含めた設計を行います。',
    },
    {
      number: 7,
      title: 'ガイドラインに沿って研究開発する',
      description: '国の指針、セキュリティ、プライバシー、説明責任に基づき、技術を扱います。',
    },
    {
      number: 8,
      title: '透明性を守る',
      description: '前提条件・制約・期待値を明確にし、誤解を招く表現（過度なROIの断定など）を避けます。',
    },
    {
      number: 9,
      title: '協業を歓迎する',
      description: 'OEM/ODMや共同企画・共同開発を通じ、現場に価値が残る形で技術を届けます。',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'AIで事前整理（無料）',
    },
    {
      step: 2,
      title: '必要に応じて担当者が相談対応（オンライン/オフライン）',
    },
    {
      step: 3,
      title: '小さく導入（購入／レンタル）',
    },
    {
      step: 4,
      title: '1年間保証＋AIサポートで定着',
    },
  ];

  const guarantees = [
    '1年間の保証（契約条件に基づく）',
    '導入後の学習・運用支援（AI支援を含む）',
    '仕様・制約の説明責任',
  ];

  const nonGuarantees = [
    '売上や利益の断定',
    '現場条件に依存する成果の一律保証',
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
            ユニハロジー・チャーター
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            私たちは、AIとロボットを「売る」のではなく、現場で"使える力"に変えるための原則を定めます。このページは、その約束です。
          </p>
        </header>

        {/* Background / why this exists */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            なぜ、原則が必要なのか
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              日本の中小企業では、技術人材やノウハウの不足、ROIへの不安、導入コストへの懸念が重なり、テクノロジー導入が「良い／悪い」ではなく「進め方が分からない」状態になりやすい。私たちは、この不確実性を減らすために、行動原則を公開します。
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            ミッション
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              日本の中小企業が持つ強みを、AIとロボットで拡張する。小さく始めて、確実に定着させる。その積み上げで、持続的な成長を設計する。
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            私たちの約束
          </h2>
          <div className="max-w-[720px] space-y-8">
            {principles.map((principle) => (
              <div key={principle.number} className="flex gap-4">
                <span className="mt-1 shrink-0 text-lg font-medium text-zinc-500">
                  {principle.number}.
                </span>
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">
                    {principle.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* R&D stance */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            研究開発の姿勢
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              私たちは、AIとロボットが好きです。しかし、技術そのものの新しさよりも「現場で継続利用できること」を価値と定義します。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              実装、運用、保守、教育。現場の時間の流れに耐える技術だけを残します。
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            相談から導入まで
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
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
            返却条件やサポート範囲は契約形態により異なります。
          </p>
        </section>

        {/* Commitment boundaries */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            保証と非保証
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-4 text-base font-medium text-white break-words md:text-lg">
                保証すること
              </h3>
              <ul className="space-y-3">
                {guarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-zinc-500">•</span>
                    <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-4 text-base font-medium text-white break-words md:text-lg">
                保証できないこと
              </h3>
              <ul className="space-y-3">
                {nonGuarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-zinc-500">•</span>
                    <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
                {todayStr}：初版公開
              </li>
            </ul>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 md:p-12 break-words">
            <h2 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
              まずは、整理から。
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
              AIで導入可否を3分で整理します（無料）
            </p>
            {/* TODO: Link to the existing AI entry point used on top page */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
            >
              無料で相談する
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
      </div>
    </main>
  );
}

