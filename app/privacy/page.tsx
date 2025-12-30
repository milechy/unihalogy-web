import Link from 'next/link';

export default function PrivacyPage() {
  const summaryPoints = [
    '取得する情報は、提案とサポートに必要な最小限に限定します',
    'AIチャットの入力内容は、回答生成・サポート品質向上・運用改善のために利用する場合があります',
    '本人の同意なく、個人情報を第三者に販売・提供しません',
    '保管期間と削除方針を定め、不要になったデータは削除します',
  ];

  const purposePoints = [
    '相談・問い合わせへの対応、提案、連絡のため',
    'AIチャットの回答生成・品質向上のため',
    '導入後サポート（学習・マニュアル・運用支援）の提供のため',
    'サービスの改善、統計分析（個人を特定しない形）のため',
    '不正利用の防止、セキュリティ確保のため',
    '法令・規約への対応のため',
  ];

  const aiChatPoints = [
    'ログは当社の運用改善目的で保存される場合があります',
    '保存期間は当社が定める合理的な期間とします',
    '削除を希望される場合はお問い合わせください',
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
            プライバシーポリシー
          </h1>
          <p className="mb-4 max-w-[720px] text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
            ユニハロジーは、個人情報を最小限に取り扱い、目的を明確にし、適切に管理します。本ページでは、当社の個人情報の取扱い方針を説明します。
          </p>
          <p className="text-sm text-zinc-500 break-words">
            最終更新日：{todayStr}
          </p>
        </header>

        {/* Summary */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            要約
          </h2>
          <div className="max-w-[720px] rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words">
            <ul className="space-y-3">
              {summaryPoints.map((point, index) => (
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

        {/* Information we collect */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            取得する情報
          </h2>
          <div className="max-w-[720px] space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium text-white break-words">
                お問い合わせ・相談時の情報
              </h3>
              <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                氏名、会社名、役職、メールアドレス、電話番号、相談内容 等
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-white break-words">
                AIチャット（事前整理）で入力される情報
              </h3>
              <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                業種、規模、課題、導入目的、運用体制、予算感、制約条件 等、入力された範囲
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-white break-words">
                利用状況情報
              </h3>
              <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                IPアドレス、閲覧履歴、端末情報、Cookie 等 ※利用する場合
              </p>
            </div>
            <p className="text-sm text-zinc-500 break-words">
              入力内容に個人情報が含まれる場合は、本ポリシーに基づき取り扱います。
            </p>
          </div>
        </section>

        {/* Purpose of use */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            利用目的
          </h2>
          <div className="max-w-[720px]">
            <ul className="space-y-3">
              {purposePoints.map((point, index) => (
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

        {/* AI chat handling */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            AIチャットに関する取り扱い
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              AIチャットは、導入可否や前提条件を整理するための仕組みです。入力内容は、回答生成・運用改善・サポート品質向上のために利用する場合があります。ただし、本人の同意なく、個人情報を第三者に販売・提供することはありません。
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

        {/* Third-party provision / outsourcing */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            第三者提供・委託について
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供することはありません。
            </p>
            <div className="mt-4">
              <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                AIチャットの回答生成のために、外部サービス（LLM/API）を利用する場合があります。その際は、必要最小限の情報に限定し、適切な契約・安全管理措置のもとで取り扱います。
              </p>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            Cookie等の利用について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              利便性向上や利用状況把握のため、Cookie等を利用する場合があります。Cookieはブラウザ設定により無効化できます。
            </p>
          </div>
        </section>

        {/* Security measures */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            安全管理措置
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              当社は、個人情報への不正アクセス、漏えい、改ざん等を防止するための安全管理措置を講じます。
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              詳細は
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

        {/* User rights */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            開示・訂正・削除等の請求
          </h2>
          <div className="max-w-[720px] space-y-4">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ご本人からの個人情報の開示、訂正、利用停止、削除等の請求については、法令に基づき適切に対応します。
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ご希望の場合は、
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

        {/* Compliance and updates */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            法令遵守と改定
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              当社は、個人情報保護法その他関連法令を遵守します。本ポリシーは、必要に応じて改定されます。
            </p>
          </div>
        </section>

        {/* Company information */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            事業者情報
          </h2>
          <div className="max-w-[720px]">
            <ul className="space-y-2">
              <li className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                事業者名：ユニハロジー
              </li>
              <li className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                所在地：別途定める
              </li>
              <li className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
                連絡先：
                <Link
                  href="/contact"
                  className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
                >
                  お問い合わせページ
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

