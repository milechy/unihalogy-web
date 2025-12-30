import Link from 'next/link';

export default function TermsPage() {
  const serviceItems = [
    'コーポレートサイトおよび各種コンテンツの閲覧',
    'AIチャットによる事前整理・情報提供',
    'ロボット・AI導入に関する相談および提案',
    'ドキュメント・事例・研究情報の提供',
  ];

  const aiChatPoints = [
    'AIの回答には誤りや不完全性が含まれる可能性があります',
    '最終的な判断は利用者自身の責任で行ってください',
    '重要な意思決定は、必要に応じて専門家の助言もご検討ください',
  ];

  const prohibitedItems = [
    '虚偽または誤解を招く情報の入力',
    '不正アクセス、サービスの妨害',
    '第三者になりすます行為',
    '当社または第三者の権利を侵害する行為',
    '商用スパム、営業目的のみの大量利用',
    '法令または公序良俗に反する行為',
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
            利用規約
          </h1>
          <p className="mb-4 max-w-[720px] text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
            本利用規約は、ユニハロジーが提供するサービスの利用条件を定めるものです。サービスをご利用いただく前に、本規約をご確認ください。
          </p>
          <p className="text-sm text-zinc-500 break-words">
            最終更新日：{todayStr}
          </p>
        </header>

        {/* Scope */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            本規約について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              本規約は、ユニハロジーが提供するWebサイト、AIチャット、ロボット・AIに関する情報提供および相談サービスの利用に適用されます。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Services */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            提供するサービス
          </h2>
          <div className="max-w-[720px] space-y-4">
            <ul className="space-y-3">
              {serviceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-zinc-500">•</span>
                  <span className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-500 break-words">
              当社のサービスは、導入や成果を保証するものではありません。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* AI chat positioning */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AIチャットの利用について
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              AIチャットは、導入条件や課題を整理するための支援ツールです。提供される情報は一般的な助言を含むものであり、個別の契約・導入・成果を保証するものではありません。
            </p>
            <ul className="space-y-3">
              {aiChatPoints.map((point, index) => (
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

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Prohibited actions */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            禁止事項
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              利用者は、以下の行為を行ってはなりません。
            </p>
            <ul className="space-y-3">
              {prohibitedItems.map((item, index) => (
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

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Intellectual property */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            知的財産権
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              本サイトおよびサービスに掲載される文章、画像、設計、構成等の知的財産権は、当社または正当な権利者に帰属します。
            </p>
            <p className="text-sm text-zinc-500 break-words">
              私的利用の範囲を超える利用には、事前の許可が必要です。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Changes / suspension */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            サービスの変更・停止
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              当社は、必要に応じて、サービスの内容を変更または停止することがあります。可能な限り事前に告知しますが、緊急の場合はこの限りではありません。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Disclaimer */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            免責事項
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              当社は、サービスの正確性・完全性・有用性について保証するものではありません。本サービスの利用により生じた損害について、法令により責任が認められる場合を除き、責任を負いません。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Limitation of liability */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            損害賠償について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              当社が損害賠償責任を負う場合、その範囲は、当社の故意または重過失による場合を除き、合理的な範囲に限定されます。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Changes to terms */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            規約の変更
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              本規約は、必要に応じて改定されることがあります。改定後の規約は、本ページに掲載された時点で効力を生じます。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Governing law / jurisdiction */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            準拠法および管轄
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              本規約は、日本法を準拠法とします。本サービスに関連して生じた紛争については、当社所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </div>
        </section>

        <hr className="mt-16 border-0 border-t border-zinc-800/40" />

        {/* Contact */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            お問い合わせ
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              本規約に関するお問い合わせは、
              <Link
                href="/contact"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                お問い合わせページ
              </Link>
              よりご連絡ください。
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
                {todayStr}：利用規約制定
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

