import Link from 'next/link';
import BarChart from '@/components/company/BarChart';

export default function CompanyPage() {
  const bottlenecks = [
    { label: '技術人材・ノウハウの不足', value: 34 },
    { label: 'ROIへの不安', value: 31 },
    { label: '導入コストの高さ', value: 28 },
  ];

  const steps = [
    {
      title: '無料ヒアリング（売り込みなし）',
      description: 'まずは現状の課題と制約を丁寧に伺います。',
    },
    {
      title: 'AIによる事前整理（課題・制約・本気度の整理）',
      description: 'ヒアリング内容をAIで構造化し、導入可能性を客観的に評価します。',
    },
    {
      title: '最適解の提案（導入しない、も含めた提案）',
      description: '導入が適切でない場合は、そうお伝えします。適切な場合は、具体的な提案を行います。',
    },
    {
      title: '導入後サポート（学習・マニュアル・AI支援）',
      description: '導入後も、スタッフの学習と定着を支援します。',
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        {/* Hero */}
        <header className="mb-16 pb-12 border-b border-zinc-800/60">
          <div className="mb-4 flex items-center gap-3 text-xs text-zinc-500">
            <span>Company overview</span>
            <span>•</span>
            <time>Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-white md:text-7xl break-words">
            小さなイノベーションを、確実に現場へ。
          </h1>
          <p className="mt-6 max-w-[840px] text-[16px] leading-relaxed text-zinc-300 md:text-[18px] break-words">
            ユニハロジーは、日本の中小企業がテクノロジーを"使える力"に変えるための、AI・ロボット研究開発と導入支援を行っています。
          </p>
        </header>

        {/* Reality / Bottlenecks */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            なぜ、テクノロジー導入は進まないのか
          </h2>
          <div className="mt-4 max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
              多くの企業にとって問題は「やる気」ではありません。「何から、どう始めればいいか分からない」構造的な不透明さが壁になります。
            </p>
          </div>
          <div className="mt-10 max-w-[720px]">
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 md:p-8">
              <BarChart data={bottlenecks} />
            </div>
            <p className="mt-4 text-xs text-zinc-500 break-words">
              数値は一般的な傾向の例示です（調査条件により変動します）
            </p>
          </div>
        </section>

        {/* Our stance */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            私たちは「無人化」を売りません
          </h2>
          <div className="mt-4 max-w-[720px]">
            <ul className="space-y-4 text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">•</span>
                <span>現場の強みを前提に、テクノロジーを組み合わせます</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">•</span>
                <span>国のガイドラインに沿ったAI・ロボットの研究開発</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-zinc-500">•</span>
                <span>導入後の学習・定着までを設計に含めます</span>
              </li>
            </ul>
          </div>
          <hr className="mt-12 border-0 border-t border-zinc-800/40" />
        </section>

        {/* How we work */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            進め方
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-300">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-medium text-zinc-100 md:text-lg break-words">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 break-words">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost / risk design */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            費用とリスクの設計
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-3 text-base font-medium text-zinc-100 break-words">
                月額導入（サブスクリプション/リース/レンタル）
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 break-words">
                初期投資を抑え、月額での導入が可能です。必要に応じて購入への切り替えも検討できます。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-3 text-base font-medium text-zinc-100 break-words">
                最低3ヶ月、以降は返却可（効果が出なければ撤退できる）
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 break-words">
                導入後、最低3ヶ月の運用期間を経て、効果が見られない場合は返却可能です。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-3 text-base font-medium text-zinc-100 break-words">
                補助金・助成金の活用提案（要件整理・書類準備も支援可能）
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 break-words">
                適用可能な補助金・助成金の要件整理から、申請書類の準備まで支援します。
              </p>
            </div>
          </div>
        </section>

        {/* Growth philosophy */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            強みを、テクノロジーで3倍に
          </h2>
          <div className="mt-4 max-w-[720px] space-y-6">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              私たちは「置き換え」ではなく「拡張」を目指します。既存の現場の強みを前提に、テクノロジーを組み合わせることで、業務の質を向上させます。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              小さく導入し、確実に積み上げる。現場で回ることを最優先に、段階的な改善を進めます。
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-400">
                原則
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-zinc-300 break-words">
                <li className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span>小さく始める</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span>定着を優先する</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span>説明責任を守る</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Company facts */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            会社情報
          </h2>
          <div className="mt-10 max-w-[720px] overflow-x-auto">
            <table className="w-full border-collapse break-words">
              <tbody>
                <tr className="border-b border-zinc-800/40">
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">会社名</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">ユニハロジー（Unihology）</td>
                </tr>
                <tr className="border-b border-zinc-800/40">
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">事業内容</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">
                    AI・ロボット導入支援 / 研究開発 / ハードウェア取り扱い 等
                  </td>
                </tr>
                <tr className="border-b border-zinc-800/40">
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">所在地</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">（準備中）</td>
                </tr>
                <tr className="border-b border-zinc-800/40">
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">代表</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">（準備中）</td>
                </tr>
                <tr className="border-b border-zinc-800/40">
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">設立</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">（準備中）</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 text-sm font-medium text-zinc-300">連絡先</td>
                  <td className="py-4 text-sm text-zinc-300 break-words">
                    <Link href="/" className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words">
                      お問い合わせフォームへ
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="mt-16 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 md:p-12 break-words">
          <h2 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
            まずは、整理から始めませんか
          </h2>
          <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            すべての相談はAIによる事前整理から始まります。合わない場合は、そうお伝えします。
          </p>
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
        </section>
      </div>
    </main>
  );
}

