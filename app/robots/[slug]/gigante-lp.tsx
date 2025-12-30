import Link from 'next/link';
import type { RobotData } from '@/lib/robots';
import GiganteEstimator from './gigante-estimator';

interface GiganteLPProps {
  robot: RobotData;
}

export default function GiganteLP({ robot }: GiganteLPProps) {
  const robotData = robot as any;
  const capacityRange = robotData.capacityRange || {};
  const defaults = robotData.defaults || {};
  const capabilities = robotData.capabilities || [];
  const installationConstraints = robotData.installationConstraints || {};
  const videos = robotData.videos || [];
  const featuredVideos = videos.filter((v: any) => v.featured);
  const otherVideos = videos.filter((v: any) => !v.featured);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* 1. Hero Video */}
      <section className="relative w-full">
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
          {robot.heroVideoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src={robot.heroVideoSrc} type="video/mp4" />
              お使いのブラウザは動画をサポートしていません。
            </video>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900/50">
              <p className="text-sm text-zinc-500">動画を準備中です</p>
            </div>
          )}
          {robot.heroOverlay && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/40 backdrop-blur-[1px]">
              <h1 className="mb-3 text-center text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {robot.heroOverlay.headline}
              </h1>
              <p className="text-center text-lg text-zinc-300 md:text-xl">
                {robot.heroOverlay.subheadline}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 py-12 md:px-6">
        {/* 2. What it solves (SME pain points) */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">
            Giganteが解決すること
          </h2>
          <div className="space-y-6">
            {robot.solves.map((solve, index) => (
              <div key={index} className="border-b border-zinc-800/60 pb-6 last:border-0">
                <p className="text-base leading-relaxed text-zinc-300">{solve}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. KPI Snapshot (A+B+C only) */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
            期待できる効果
          </h2>
          <p className="mb-12 text-xs text-zinc-500">目安。条件により変動します。</p>
          
          <div className="space-y-12">
            {/* A: Saved Hours */}
            <div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-xs text-zinc-500">A</span>
                <span className="text-sm text-zinc-400">月間削減時間（目安）</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light tracking-tight text-white md:text-6xl">
                  {Math.round((defaults.cupsPerDay || 50) * 3 * 30 / 60)}
                </span>
                <span className="text-xl text-zinc-500">時間</span>
              </div>
            </div>

            {/* B: Labor Cost Equivalent */}
            <div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-xs text-zinc-500">B</span>
                <span className="text-sm text-zinc-400">人件費換算（目安）</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light tracking-tight text-white md:text-6xl">
                  {Math.round((defaults.cupsPerDay || 50) * 3 * 30 / 60 * (defaults.hourlyWageDefault || 1200)).toLocaleString()}
                </span>
                <span className="text-xl text-zinc-500">円/月</span>
              </div>
            </div>

            {/* C: Stable Daily Capacity Range */}
            <div>
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-xs text-zinc-500">C</span>
                <span className="text-sm text-zinc-400">安定処理能力の範囲</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light tracking-tight text-white md:text-6xl">
                  {capacityRange.minPerDay || capacityRange.min || 30}
                </span>
                <span className="mx-2 text-xl text-zinc-500">〜</span>
                <span className="text-5xl font-light tracking-tight text-white md:text-6xl">
                  {capacityRange.maxPerDay || capacityRange.max || 100}
                </span>
                <span className="ml-2 text-xl text-zinc-500">{capacityRange.unit || '杯/日'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Estimation Module */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <GiganteEstimator robot={robot} />
        </section>

        {/* 5. Capabilities */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-3xl font-light tracking-tight text-white md:text-4xl">
            Giganteの機能
          </h2>
          <div className="space-y-8">
            {capabilities.map((cap: any, index: number) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-medium text-zinc-200">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{cap.description}</p>
              </div>
            ))}
          </div>
          
          {/* Installation Constraints */}
          {(installationConstraints.space || installationConstraints.power || installationConstraints.environment) && (
            <div className="mt-12 space-y-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-6">
              <h3 className="text-sm font-medium text-zinc-300">設置条件</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                {installationConstraints.space && (
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>{installationConstraints.space}</span>
                  </li>
                )}
                {installationConstraints.power && (
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>{installationConstraints.power}</span>
                  </li>
                )}
                {installationConstraints.environment && (
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>{installationConstraints.environment}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </section>

        {/* 6. Operation & Stability */}
        {capacityRange.explanation && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <h2 className="mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">
              処理能力の安定性について
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
              <p>
                Giganteの処理能力は、最大値ではなく範囲で表示しています。これは、実際の運用において安定して処理できる能力を示すためです。
              </p>
              <div>
                <h3 className="mb-4 text-base font-medium text-zinc-200">
                  処理能力に影響する要因
                </h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>メニュー数：提供するドリンクの種類が多いほど、設定変更の時間が増えます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>ピーク集中度：注文が集中する時間帯の長さと強度</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                    <span>補充タイミング：豆やミルクの補充が必要なタイミング</span>
                  </li>
                </ul>
              </div>
              <p className="text-zinc-400">{capacityRange.explanation}</p>
            </div>
          </section>
        )}

        {/* 7. Purchase vs Rental */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-3xl font-light tracking-tight text-white md:text-4xl">
            価格と契約形態
          </h2>
          
          <div className="mb-8 space-y-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-6">
            <p className="text-sm font-medium text-zinc-200">保証について</p>
            <p className="text-sm leading-relaxed text-zinc-400">
              すべての契約形態で<span className="font-medium text-zinc-300">1年間の保証</span>
              が付きます。製造上の欠陥や部品の不具合は無償で対応します。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Purchase */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-zinc-200">購入</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 text-zinc-500">価格</p>
                  <p className="text-lg font-medium text-zinc-200">
                    {robotData.purchase?.priceLabel || robot.purchase.priceRange}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">保証</p>
                  <p className="text-zinc-300">{robot.purchase.warranty}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">サポート</p>
                  <p className="text-zinc-300">
                    {robotData.purchase?.supportLevel || robot.purchase.support}
                  </p>
                </div>
              </div>
            </div>

            {/* Rental */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-zinc-200">レンタル</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 text-zinc-500">価格</p>
                  <p className="text-lg font-medium text-zinc-200">
                    {robotData.rental?.priceLabel || robot.rental.priceRange}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">保証</p>
                  <p className="text-zinc-300">{robot.rental.warranty}</p>
                </div>
                <div>
                  <p className="mb-1 text-zinc-500">サポート</p>
                  <p className="text-zinc-300">
                    {robotData.rental?.supportLevel || robot.rental.support}
                  </p>
                </div>
                {(robotData.rental?.minMonths || robot.rental.minimumMonths) && (
                  <div>
                    <p className="mb-1 text-zinc-500">最低契約期間</p>
                    <p className="text-zinc-300">
                      {robotData.rental?.minMonths || robot.rental.minimumMonths}ヶ月
                    </p>
                  </div>
                )}
                {robotData.rental?.returnPolicyLabel && (
                  <div>
                    <p className="mb-1 text-zinc-500">返却について</p>
                    <p className="text-zinc-300 leading-relaxed">
                      {robotData.rental.returnPolicyLabel}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {robotData.contract?.subsidyAvailable && (
            <div className="mt-8 rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-6">
              <p className="mb-2 text-sm font-medium text-zinc-200">補助金・助成金について</p>
              <p className="text-sm leading-relaxed text-zinc-400">
                診断を通じて、該当する可能性のある補助金・助成金をご案内します。ただし、確実な採択は保証できません。
              </p>
            </div>
          )}
        </section>

        {/* 8. AI-first Inquiry Policy */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">
            AIによる事前診断について
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
            <p>
              保険の窓口スタイルの直接相談も可能ですが、すべてのお問い合わせはまずAIによる事前ヒアリング（導入可否診断）から始まります。
            </p>
            <div>
              <h3 className="mb-4 text-base font-medium text-zinc-200">AI診断の目的</h3>
              <ul className="space-y-3 text-zinc-400">
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
            <div className="rounded border border-zinc-800/50 bg-zinc-900/30 p-4">
              <p className="text-xs leading-relaxed text-zinc-500">
                <span className="font-medium text-zinc-400">注意：</span>
                すべてのお問い合わせは、まずAIによる事前ヒアリング（導入可否診断）から始まります。
                直接の人間による相談は、AI診断の結果を確認した後、適切と判断された場合のみご案内します。
              </p>
            </div>
          </div>
        </section>

        {/* 9. Videos */}
        {featuredVideos.length > 0 && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <h2 className="mb-12 text-3xl font-light tracking-tight text-white md:text-4xl">
              動作動画
            </h2>
            <div className="space-y-8">
              {featuredVideos.map((video: any, index: number) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-sm font-medium text-zinc-300">{video.title}</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30">
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-sm text-zinc-500">
                        YouTube動画: {video.youtubeId} (準備中)
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {otherVideos.length > 0 && (
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-zinc-400 hover:text-zinc-300">
                    もっと見る
                  </summary>
                  <div className="mt-4 space-y-8">
                    {otherVideos.map((video: any, index: number) => (
                      <div key={index} className="space-y-3">
                        <h3 className="text-sm font-medium text-zinc-300">{video.title}</h3>
                        <div className="aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30">
                          <div className="flex h-full w-full items-center justify-center">
                            <p className="text-sm text-zinc-500">
                              YouTube動画: {video.youtubeId} (準備中)
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </section>
        )}

        {/* 10. Specs Table */}
        {robot.specs && (
          <section className="mb-24 border-t border-zinc-800/60 pt-20">
            <h2 className="mb-10 text-3xl font-light tracking-tight text-white md:text-4xl">
              仕様
            </h2>
            <div className="space-y-4">
              {Object.entries(robot.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between border-b border-zinc-800/40 pb-4 last:border-0"
                >
                  <span className="text-sm text-zinc-400">{key}</span>
                  <span className="text-sm font-medium text-zinc-200">{value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 11. FAQ */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-12 text-3xl font-light tracking-tight text-white md:text-4xl">
            よくある質問
          </h2>
          <div className="space-y-8">
            {robot.faq.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base font-medium text-zinc-200">{item.question}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. UniHalogy Principles */}
        <section className="mb-24 border-t border-zinc-800/60 pt-20">
          <h2 className="mb-10 text-3xl font-light tracking-tight text-white md:text-4xl">
            UniHalogyの考え方
          </h2>
          <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
            <div>
              <p className="mb-2 font-medium text-zinc-200">
                1. 無人化・省人化を目的にしません
              </p>
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
            <div>
              <p className="mb-2 font-medium text-zinc-200">6. 補助金・助成金のサポート</p>
              <p className="text-zinc-400">
                診断を通じて、該当する可能性のある補助金・助成金をご案内します。ただし、確実な採択は保証できません。
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-zinc-800/60 pt-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
              Giganteがあなたの現場に合うか診断する
            </h2>
            <p className="mb-8 text-sm text-zinc-400">
              AIで導入可否を整理する（無料）
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/30 px-10 py-4 text-base font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900/50"
            >
              AI診断を開始する
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
