import Link from 'next/link';

export default function SecurityPage() {
  const dataHandlingPoints = [
    '相談内容・チャットログは、運用改善とサポート品質向上のために利用します',
    '本人の同意なく、第三者に販売・提供することはありません',
    '不要となったデータは、一定期間後に適切に削除します',
  ];

  const infrastructurePoints = [
    '通信の暗号化（HTTPS / TLS）',
    '権限管理によるアクセス制御（最小権限）',
    'ログの管理と監視',
    '障害・不正検知時の対応フロー',
  ];

  const safetyDesignPoints = [
    'AIは補助的な判断支援として利用',
    '重要な意思決定は人が最終確認',
    'ロボットはフェイルセーフ設計を前提',
    '異常時は自動停止／手動介入が可能',
  ];

  const compliancePoints = [
    '国内のAI・ロボット関連ガイドラインを参照',
    '個人情報保護法を前提とした運用',
    '外部・海外製ハードウェアも国内基準で評価',
  ];

  const incidentResponsePoints = [
    '初動対応と影響範囲の確認',
    '原因調査と暫定措置',
    '再発防止策の実装',
    '必要に応じた利用者への通知',
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
            セキュリティと信頼性について
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ユニハロジーは、AIとロボットを扱う企業として、セキュリティと信頼性を設計の前提条件としています。このページでは、その考え方と取り組みを公開します。
          </p>
        </header>

        {/* Philosophy */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            セキュリティに対する基本姿勢
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              セキュリティは、後付けの機能ではありません。設計・開発・運用のすべての段階で考慮されるべき前提条件です。ユニハロジーは、利便性・効率性と同時に、データの安全性、説明責任、運用時の安心感を重視します。
            </p>
          </div>
        </section>

        {/* Data handling */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            データの取り扱いについて
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              取得するデータは、目的達成に必要な最小限に限定します。
            </p>
            <ul className="space-y-3">
              {dataHandlingPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <p className="text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
                AIによる事前整理（ヒアリング）は、「売り込み」ではなく「無駄な導入を防ぐ」ための仕組みです。
              </p>
            </div>
          </div>
        </section>

        {/* System & infrastructure security */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            システムとインフラの安全性
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              インフラは、信頼性と可用性を重視したクラウド環境上で運用されます。アクセス権限の最小化、通信の暗号化、ログ管理を基本としています。
            </p>
            <ul className="space-y-3">
              {infrastructurePoints.map((point, index) => (
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

        {/* AI & robot safety design */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AI・ロボットの安全設計
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ユニハロジーのAIとロボットは、人の判断を置き換えるものではなく、支援するための存在です。
            </p>
            <ul className="space-y-3">
              {safetyDesignPoints.map((point, index) => (
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

        {/* Guidelines & legal compliance */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            ガイドラインと法令への対応
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              国のガイドラインや法令は、技術を止めるためではなく、安全に使うための共通言語だと考えています。
            </p>
            <ul className="space-y-3">
              {compliancePoints.map((point, index) => (
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

        {/* Incident response */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            問題発生時の対応
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              問題を隠さず、改善につなげることを最優先します。
            </p>
            <ul className="space-y-3">
              {incidentResponsePoints.map((point, index) => (
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

        {/* Limits */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            セキュリティの限界
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              いかなるシステムにおいても、リスクを完全にゼロにすることはできません。私たちは、リスクを正しく認識し、低減し続けることに責任を持ちます。
            </p>
          </div>
        </section>

        {/* Contact / reporting */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            お問い合わせ・報告窓口
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              セキュリティに関するご質問や懸念がある場合は、専用窓口よりご連絡ください。
            </p>
            {/* TODO: Link to dedicated contact route if available */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/60 bg-zinc-900/20 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900/30 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-950 break-words"
            >
              問い合わせる
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <p className="text-sm text-zinc-500 break-words">
              脆弱性のご報告は、同じ窓口で受け付けます。
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
                {todayStr}：初版公開
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

