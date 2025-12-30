import Link from 'next/link';

export default function ContactPage() {
  const processSteps = [
    {
      step: 1,
      title: 'AIで条件を整理（無料・約3分）',
      description: '業種・規模・目的などをAIがヒアリングします。',
    },
    {
      step: 2,
      title: '内容を社内で確認',
      description: '無理な提案や不適切な導入は行いません。',
    },
    {
      step: 3,
      title: '必要な場合のみ、人が対応',
      description: '本気度・実現性が高い場合に、オフライン相談をご案内します。',
    },
  ];

  const welcomeItems = [
    'ロボット・AI導入が自社に合うか分からない',
    '人手不足・業務効率化に悩んでいる',
    '補助金を使えるか知りたい',
    '導入後の運用・教育が不安',
    '他社事例を踏まえて検討したい',
  ];

  const notAcceptedItems = [
    '情報収集のみを目的とした大量問い合わせ',
    '具体的な検討意思のない営業・売り込み',
    '技術的根拠のない価格比較のみの相談',
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
            お問い合わせ
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ユニハロジーでは、より良い提案を行うために、すべての相談をAIによる事前整理から始めています。
          </p>
        </header>

        {/* Why AI first */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            なぜ、AIによる事前整理が必要なのか
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ロボットやAIの導入は、製品の問題ではなく「条件整理の問題」で失敗することが多くあります。AIによる事前整理は、
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">・</span>
                <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  導入が本当に適しているか
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">・</span>
                <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  どこがボトルネックになりやすいか
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">・</span>
                <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  人が介入すべきポイントはどこか
                </span>
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              を短時間で可視化するためのものです。
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            相談の流れ
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-300">
                    {step.step}
                  </span>
                  <h3 className="text-base font-medium text-white break-words md:text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500 break-words">
            いきなり営業電話や売り込みは行いません。
          </p>
        </section>

        {/* Offline consultation policy */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            直接相談について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              オフラインでの無料相談は、実際に導入の可能性がある企業様に限定しています。これは、双方にとって有意義な時間にするためです。まずはAIによる事前整理をご利用ください。
            </p>
          </div>
        </section>

        {/* What we welcome */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            こんな相談を歓迎しています
          </h2>
          <div className="max-w-[720px]">
            <ul className="space-y-3">
              {welcomeItems.map((item, index) => (
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

        {/* What we may not accept */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            お受けできない相談について
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              以下のような内容については、対応できない場合があります。
            </p>
            <ul className="space-y-3">
              {notAcceptedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 break-words">
              ご了承ください。
            </p>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/30 p-8 md:p-12 break-words">
            <h2 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
              まずは、AIで整理する
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
              約3分で、貴社にとってAI・ロボット導入が現実的かどうかを整理します。
            </p>
            {/* TODO: Link to the existing AI entry point used on top page */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-800/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-950 break-words"
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
        </section>

        {/* Privacy / Security note */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            個人情報の取り扱いについて
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              入力された情報は、提案とサポートの目的にのみ使用されます。詳細は
              <Link
                href="/security"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                セキュリティページ
              </Link>
              をご確認ください。
            </p>
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
                {todayStr}：お問い合わせページ公開
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

