import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRobotBySlug, getAllRobots } from '@/lib/robots';
import type { RobotData } from '@/lib/robots';
import RobotROICalculator from './roi-calculator';
import KPISection from './kpi-section';
import GiganteLP from './gigante-lp';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const robots = getAllRobots();
  return robots.map((robot) => ({
    slug: robot.slug,
  }));
}

export default async function RobotPage({ params }: PageProps) {
  const { slug } = await params;
  const robot = getRobotBySlug(slug);

  if (!robot) {
    notFound();
  }

  // Use Gigante-specific LP structure
  if (slug === 'gigante') {
    return <GiganteLP robot={robot} />;
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 md:px-6">
        {/* Hero Video */}
        <section className="mb-20">
          {robot.heroVideoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/30 shadow-2xl"
            >
              <source src={robot.heroVideoSrc} type="video/mp4" />
              お使いのブラウザは動画をサポートしていません。
            </video>
          ) : (
            <div className="aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center shadow-2xl">
              <p className="text-sm text-zinc-500">動画を準備中です</p>
            </div>
          )}
        </section>

        {/* Title Area */}
        <section className="mb-20">
          <h1 className="mb-5 text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
            {robot.name}
            <span className="ml-3 text-3xl font-normal text-zinc-400 md:text-4xl">({robot.nameJa})</span>
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-zinc-300 md:text-2xl">{robot.description}</p>
          <div className="flex flex-wrap gap-2">
            {(robot.category || ['その他']).map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3.5 py-1.5 text-xs font-medium text-zinc-400"
              >
                {cat}
              </span>
            ))}
            <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3.5 py-1.5 text-xs font-medium text-zinc-400">
              {robot.priceRange}
            </span>
          </div>
        </section>

        {/* KPI Section */}
        {robot.roiAssumptions && <KPISection robot={robot} />}

        {/* SME Bottlenecks Visualization */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
              SMEが直面する課題
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              やる気の問題ではなく <span className="font-medium text-zinc-300">「どうやって・何から」</span> が見えない構造です。
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">技術人材・ノウハウ不足</span>
                <span className="text-lg font-semibold text-zinc-200">34%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-900/50">
                <div className="h-full w-[34%] rounded-full bg-gradient-to-r from-zinc-600 to-zinc-500 transition-all" />
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">ROIへの不安</span>
                <span className="text-lg font-semibold text-zinc-200">31%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-900/50">
                <div className="h-full w-[31%] rounded-full bg-gradient-to-r from-zinc-600 to-zinc-500 transition-all" />
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">導入コストの高さ</span>
                <span className="text-lg font-semibold text-zinc-200">28%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-900/50">
                <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-zinc-600 to-zinc-500 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {robot.images && robot.images.length > 0 && (
          <section className="mb-20 border-t border-zinc-800/60 pt-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {robot.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30"
                >
                  <div className="h-full w-full bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specs Table */}
        {robot.specs && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <h2 className="mb-10 text-2xl font-medium tracking-tight text-white md:text-3xl">仕様</h2>
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                {Object.entries(robot.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between border-b border-zinc-800/40 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-zinc-400">{key}</span>
                    <span className="text-sm font-medium text-zinc-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ROI Calculator */}
        {robot.roiAssumptions && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <div className="mb-10">
              <h2 className="mb-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
                あなたの現場で試算
              </h2>
              <p className="text-sm text-zinc-400">
                実際の現場条件を入力して、期待できる効果を確認できます。
              </p>
            </div>
            <RobotROICalculator robot={robot} />
          </section>
        )}

        {/* このロボットで解決できること */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-10 text-2xl font-medium tracking-tight text-white md:text-3xl">
            このロボットで解決できること
          </h2>
          <ul className="space-y-5">
            {robot.solves.map((solve, index) => (
              <li key={index} className="flex items-start gap-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-sm">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400" />
                <span className="text-base leading-relaxed text-zinc-300">{solve}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 向いている現場 / 向いていない現場 */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-2xl font-medium tracking-tight text-white md:text-3xl">
            向いている現場 / 向いていない現場
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-zinc-400">向いている現場</h3>
              <ul className="space-y-3">
                {robot.suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-zinc-400">向いていない現場</h3>
              <ul className="space-y-3">
                {robot.notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 導入イメージ */}
        {robot.implementationSteps && robot.implementationSteps.length > 0 && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <h2 className="mb-12 text-2xl font-medium tracking-tight text-white md:text-3xl">導入イメージ</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {robot.implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 text-center backdrop-blur-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/60 text-xl font-semibold text-zinc-300">
                  {step.step || index + 1}
                </div>
                {step.title && <h3 className="mb-2 text-sm font-semibold text-zinc-200">{step.title}</h3>}
                {step.description && <p className="text-xs leading-relaxed text-zinc-400">{step.description}</p>}
                {step.before && step.after && (
                  <div className="mt-4 space-y-1">
                    <p className="text-xs text-zinc-500">導入前: {step.before}</p>
                    <p className="text-xs text-zinc-500">導入後: {step.after}</p>
                  </div>
                )}
              </div>
            ))}
            </div>
          </section>
        )}

        {/* 価格と契約形態について */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-2xl font-medium tracking-tight text-white md:text-3xl">価格と契約形態について</h2>
          <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="mb-4 text-sm font-medium text-zinc-200">保証について</p>
            <p className="text-sm text-zinc-400">
              すべての契約形態で<span className="font-medium text-zinc-300">1年間の保証</span>
              が付きます。製造上の欠陥や部品の不具合は無償で対応します。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-6 text-xl font-medium text-zinc-200">購入</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 text-zinc-500">価格</p>
                  <p className="text-lg font-medium text-zinc-200">{robot.purchase.priceRange}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">保証</p>
                  <p className="text-zinc-300">{robot.purchase.warranty}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">サポート</p>
                  <p className="text-zinc-300">{robot.purchase.support}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-6 text-xl font-medium text-zinc-200">レンタル</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 text-zinc-500">価格</p>
                  <p className="text-lg font-medium text-zinc-200">{robot.rental.priceRange}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">保証</p>
                  <p className="text-zinc-300">{robot.rental.warranty}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">サポート</p>
                  <p className="text-zinc-300">{robot.rental.support}</p>
                </div>
                {robot.rental.minimumMonths && (
                  <div>
                    <p className="mb-1 text-zinc-500">最低契約期間</p>
                    <p className="text-zinc-300">{robot.rental.minimumMonths}ヶ月</p>
                  </div>
                )}
                {robot.rental.returnable && (
                  <div>
                    <p className="mb-1 text-zinc-500">返却について</p>
                    <p className="text-zinc-300">
                      最低契約期間後は効果が見られない場合、条件により返却可能です。
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {robot.contract?.subsidyAvailable && (
            <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="mb-2 text-sm font-medium text-zinc-200">補助金・助成金について</p>
              <p className="text-sm text-zinc-400">
                診断を通じて、該当する可能性のある補助金・助成金をご案内します。ただし、確実な採択は保証できません。
              </p>
            </div>
          )}
        </section>

        {/* UniHalogy Principles */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-10 text-2xl font-medium tracking-tight text-white md:text-3xl">UniHalogyの考え方</h2>
          <div className="space-y-6 text-sm text-zinc-300">
            <div>
              <p className="mb-2 font-medium text-zinc-200">1. 無人化・省人化を目的にしません</p>
              <p className="text-zinc-400">
                私たちは「無人化」や「省人化」を売りません。小さなイノベーションを積み重ね、成長の可能性を設計します。
              </p>
            </div>
            <div>
              <p className="mb-2 font-medium text-zinc-200">2. 国の指針に沿ったR&D</p>
              <p className="text-zinc-400">
                研究開発は国の指針に沿って進めています。テクノロジーで成長の可能性を設計しますが、過度な期待はおかけしません。
              </p>
            </div>
            <div>
              <p className="mb-2 font-medium text-zinc-200">3. 設計効率によるコスト削減</p>
              <p className="text-zinc-400">
                大手ベンダーと比較して、設計効率により低コストを実現しています。安さではなく、無駄のない設計です。
              </p>
            </div>
            <div>
              <p className="mb-2 font-medium text-zinc-200">4. 導入後のサポート</p>
              <p className="text-zinc-400">
                導入後のトレーニング・サポート・マニュアルは、無料のAIサポートで提供します。
              </p>
            </div>
            <div>
              <p className="mb-2 font-medium text-zinc-200">5. 月額モデル</p>
              <p className="text-zinc-400">
                月額モデルは最低3ヶ月から。その後、効果が見られない場合は条件により返却可能です。
              </p>
            </div>
          </div>
        </section>

        {/* 導入までの流れ */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-2xl font-medium tracking-tight text-white md:text-3xl">導入までの流れ</h2>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-400">
                1
              </span>
              <div>
                <p className="mb-1 text-base font-medium text-zinc-200">AIによる事前ヒアリング（導入可否診断）</p>
                <p className="text-sm text-zinc-400">まずはAI診断で状況を整理します</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-400">
                2
              </span>
              <div>
                <p className="mb-1 text-base font-medium text-zinc-200">内容整理 → 人が確認</p>
                <p className="text-sm text-zinc-400">診断結果を人が確認し、次のステップを判断します</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-sm font-medium text-zinc-400">
                3
              </span>
              <div>
                <p className="mb-1 text-base font-medium text-zinc-200">必要な場合のみ直接相談</p>
                <p className="text-sm text-zinc-400">適切と判断された場合のみ、直接相談をご案内します</p>
              </div>
            </li>
          </ol>
        </section>

        {/* いつでも相談できる体制 */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-white md:text-3xl">
            いつでも相談できる体制（ただし入口は必ずAI）
          </h2>
          <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="mb-4 text-base font-medium text-zinc-200">
              保険の窓口スタイルの直接相談も可能ですが、すべてのお問い合わせはまずAIによる事前ヒアリング（導入可否診断）から始まります。
            </p>
            <p className="mb-4 text-sm text-zinc-400">これにより：</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                <span>無駄な打ち合わせを避け、期待できる効果が見込めるケースに焦点を当てます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                <span>売り込みは行いません。合わない場合は、その旨をお伝えします</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                <span>適切でないと判断した場合は「導入しない」ことをお勧めする場合もあります</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-2xl font-medium tracking-tight text-white md:text-3xl">よくある質問</h2>
          <div className="space-y-8">
            {robot.faq.map((item, index) => (
              <div key={index}>
                <h3 className="mb-3 text-base font-medium text-zinc-200">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-800/60 pt-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-2xl font-medium tracking-tight text-white md:text-3xl">
              このロボットがあなたの現場に合うか診断する
            </h2>
            <p className="mb-8 text-sm text-zinc-400">
              AIによる事前ヒアリング（導入可否診断）は無料です
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/30 px-10 py-4 text-base font-medium text-zinc-200 transition-all hover:border-zinc-600 hover:bg-zinc-900/50 hover:shadow-lg"
            >
              診断を開始する
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
