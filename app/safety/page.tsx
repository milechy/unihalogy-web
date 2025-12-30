import Link from 'next/link';

export default function SafetyPage() {
  const riskCategories = [
    {
      category: '物理的リスク',
      items: '接触、挟み込み、転倒、やけど、感電、衛生',
    },
    {
      category: '運用リスク',
      items: '手順逸脱、引き継ぎ不足、メンテ不足、清掃不足',
    },
    {
      category: '判断リスク',
      items: 'AIの誤案内、誤推奨、期待値の過大化',
    },
    {
      category: '心理的リスク',
      items: '現場の不安、拒否感、スタッフの負担増',
    },
    {
      category: '制度・説明責任',
      items: 'ガイドライン不適合、説明不足',
    },
  ];

  const safetyPrinciples = [
    {
      number: 1,
      title: 'フェイルセーフを前提にする',
      description: '正常時よりも、異常時の挙動を先に設計します。',
    },
    {
      number: 2,
      title: '人が介入できる余地を残す',
      description: '重要な判断や停止は、人がいつでも介入できる状態にします。',
    },
    {
      number: 3,
      title: '安全は運用の一部',
      description: '機能だけでなく、清掃・補充・点検・教育までを安全設計に含めます。',
    },
    {
      number: 4,
      title: '誤用されにくい導線をつくる',
      description: 'UI/マニュアル/チェックリストで、現場のミスを減らします。',
    },
  ];

  const aiSafetyPoints = [
    'AIの出力は「提案」であり、最終判断は人',
    '不確かな場合は「不確か」と伝える',
    '導入を勧めない判断も出す（"導入しない"提案）',
    '説明可能性（なぜその提案か）を重視',
  ];

  const robotSafetyPoints = [
    '異常検知時の停止・縮退動作',
    '手動停止・緊急停止の導線',
    '設置条件（動線、クリアランス、床、電源）の明確化',
    '定期点検・消耗品交換の手順化',
  ];

  const trainingSupportItems = [
    '現場向けチェックリスト',
    'トレーニング動画',
    '無償のAIサポート（マニュアル／質問対応）',
    '必要に応じた運用レビュー',
  ];

  const validationSteps = [
    '小さく導入し、観測する（PoC）',
    'ヒヤリハットを記録し、設計へ反映',
    '変更点はドキュメント化する',
  ];

  const guarantees = [
    '安全設計と運用手順の提示',
    '導入時の教育と定着支援（AI含む）',
    '異常時の対応フロー整備（契約条件に基づく）',
  ];

  const nonGuarantees = [
    '事故リスクの完全なゼロ',
    '現場ルール逸脱時の結果の一律保証',
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
            安全性について
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ユニハロジーは、AIとロボットを「動かす」企業として、安全性を仕様の一部として設計します。このページでは、安全に対する考え方と運用の原則を公開します。
          </p>
        </header>

        {/* Risk model */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            私たちが想定するリスク
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              安全性は「事故が起きない」ことだけではありません。現場の負荷、誤作動時の影響、運用の乱れ、説明不足による誤用まで含めて設計します。
            </p>
            <ul className="space-y-3">
              {riskCategories.map((risk, index) => (
                <li key={index} className="flex flex-col gap-1 break-words">
                  <span className="text-[15px] font-medium text-zinc-200 break-words md:text-[16px]">
                    {risk.category}：
                  </span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {risk.items}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Safety by design principles */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            安全設計の原則
          </h2>
          <div className="max-w-[720px] space-y-8">
            {safetyPrinciples.map((principle) => (
              <div key={principle.number} className="flex gap-4">
                <span className="mt-1 shrink-0 text-lg font-medium text-zinc-500">
                  {principle.number}.
                </span>
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-medium text-white break-words md:text-lg">
                    {principle.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI safety */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AIの安全性
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ユニハロジーのAIは、現場の判断を置き換えるものではなく、目的・制約・手順を整理するための支援として設計します。
            </p>
            <ul className="space-y-3">
              {aiSafetyPoints.map((point, index) => (
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

        {/* Robot safety */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            ロボットの安全性
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ロボットは、現場で止められることが前提です。
            </p>
            <ul className="space-y-3">
              {robotSafetyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-500 break-words">
              製品固有の安全仕様は各製品ページに記載します。
            </p>
          </div>
        </section>

        {/* Operations, training, and adoption */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            導入後の安全は、教育で決まります
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ロボット導入の失敗は、機械の性能よりも「運用が回らないこと」から始まる場合が多い。私たちは、教育・手順・問い合わせ導線をセットで提供します。
            </p>
            <ul className="space-y-3">
              {trainingSupportItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Validation & improvement */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            検証と改善
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              安全性は"宣言"ではなく、運用で維持するものです。
            </p>
            <ul className="space-y-3">
              {validationSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guarantee boundaries */}
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

        {/* AI-first inquiry */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            相談はAIによる事前整理から始まります
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              安全に導入するためには、現場条件の整理が不可欠です。そのため、すべての相談はAIによる事前整理から始まります。
            </p>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 md:p-12 break-words">
              <h3 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
                まずは、整理から。
              </h3>
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
      </div>
    </main>
  );
}

