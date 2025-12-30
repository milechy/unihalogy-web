import Link from 'next/link';

export default function ModelGuardPage() {
  const aiDoesItems = [
    '課題・目的・制約のヒアリング（約3分）',
    '導入検討の論点整理（現場条件、運用体制、リスク）',
    '不足情報の提示（次に何を確認すべきか）',
    '相談ルートの提案（ドキュメント／人の相談／見送り）',
  ];

  const aiDoesNotItems = [
    '収益・売上・利益の断定（保証）',
    '現場確認なしでの最終判断（導入の断定）',
    '安全性に関わる手順の省略提案',
    '法令・制度の適用可否の断定（最終は専門家確認）',
    '個人情報や機密の収集を目的とした質問',
  ];

  const feasibilityChecks = [
    {
      number: 1,
      text: '目的が明確か（何を改善したいか）',
    },
    {
      number: 2,
      text: '現場条件が把握されているか（動線、電源、衛生、営業時間など）',
    },
    {
      number: 3,
      text: '運用責任者がいるか（清掃・補充・一次対応）',
    },
    {
      number: 4,
      text: '予算・導入形態の希望があるか（購入／レンタル）',
    },
    {
      number: 5,
      text: '意思決定の道筋があるか（いつ・誰が決めるか）',
    },
  ];

  const safetyGuardrails = [
    '危険な運用を助長する提案はしません',
    '不確実な場合は「不確か」と返します',
    '手順・点検・教育を前提にします',
  ];

  const humanEscalationItems = [
    '現場条件が特殊で、追加確認が必要',
    '安全・法令・補助金など、専門的確認が必要',
    '既存設備や業務フローとの統合が必要（POS/モバイルオーダー等）',
    '複数拠点・複数台の計画',
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
            Model Guard（AIガードレール）
          </h1>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
            ユニハロジーのAIチャットは、導入可否を"決める"ためではなく、相談を安全に、正確に、早く前に進めるためのガードレールです。このページでは、AIができること／できないこと、守る原則を公開します。
          </p>
        </header>

        {/* Why Model Guard */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            なぜ Model Guard が必要なのか
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ロボットやAIの導入は、技術そのものよりも「前提条件の整理」で結果が分かれます。しかし現場では、情報が揃わないまま意思決定が進み、導入後に運用が崩れることがあります。Model Guard は、こうした失敗を減らすために、AIの振る舞いを制限し、品質を担保します。
            </p>
          </div>
        </section>

        {/* Do/Don't split */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AIの役割
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* What AI does */}
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-4 text-lg font-medium text-white break-words">できること</h3>
              <ul className="space-y-3">
                {aiDoesItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-zinc-500">•</span>
                    <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What AI does NOT do */}
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
              <h3 className="mb-4 text-lg font-medium text-white break-words">できないこと</h3>
              <ul className="space-y-3">
                {aiDoesNotItems.map((item, index) => (
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

        {/* "本気度審査" explanation */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            本気度審査は、選別ではなく"事故防止"です
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              オフライン無料相談は、双方にとって時間コストが大きい。そのためユニハロジーでは、AIによる事前整理を必須にしています。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ここでいう「本気度」とは、熱意ではなく導入の実現性です。目的、現場条件、運用体制、意思決定プロセスが揃っているかを確認します。
            </p>
            <div className="mt-6 space-y-3">
              {feasibilityChecks.map((check) => (
                <div key={check.number} className="flex gap-4">
                  <span className="mt-1 shrink-0 text-lg font-medium text-zinc-500">
                    {check.number}.
                  </span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {check.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fairness & transparency */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            公平性と透明性
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              AIの判断は、特定の企業規模・業種・国籍・思想を理由に不利に扱うためのものではありません。必要な情報が揃っているか、導入リスクが高すぎないかを見ています。もし判断に違和感がある場合は、人が確認します。
            </p>
            <p className="text-sm text-zinc-500 break-words">
              <Link
                href="/contact"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                お問い合わせ
              </Link>
            </p>
          </div>
        </section>

        {/* Data handling */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            相談データとログについて
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              相談内容は、回答生成・品質向上・運用改善のために保存される場合があります。個人情報の取扱いは
              <Link
                href="/privacy"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                プライバシーポリシー
              </Link>
              に基づきます。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              詳細は
              <Link
                href="/security"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                セキュリティ
              </Link>
              ページをご確認ください。
            </p>
          </div>
        </section>

        {/* Safety guardrails */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            安全のために、AIの自由度を制限します
          </h2>
          <div className="max-w-[720px] space-y-4">
            <ul className="space-y-3">
              {safetyGuardrails.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 break-words">
              詳細は
              <Link
                href="/safety"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                安全性
              </Link>
              ページをご確認ください。
            </p>
          </div>
        </section>

        {/* Escalation to humans */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            人が対応する条件
          </h2>
          <div className="max-w-[720px]">
            <ul className="space-y-3">
              {humanEscalationItems.map((item, index) => (
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

        {/* Soft CTA */}
        <section className="mt-16">
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 md:p-12 break-words">
            <h2 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl break-words">
              まずは、AIで整理する
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
              導入の可否や前提条件を、約3分で整理します（無料）。
            </p>
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

