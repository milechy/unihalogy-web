import type { NewsPost, Block, NewsCategory } from './types';

export const newsPosts: NewsPost[] = [
  {
    slug: 'ai-support-program',
    title: '中小企業向けAI導入支援プログラム開始',
    excerpt: '中小企業のAI・ロボット導入を支援する新プログラムを開始しました。',
    category: 'お知らせ',
    date: '2025-12-18',
    coverImage: {
      src: '/news/ai-support.jpg',
      alt: 'AI導入支援プログラム',
    },
    featured: true,
  },
  {
    slug: 'manufacturing-guidelines',
    title: '製造業向けロボット導入ガイドライン公開',
    subtitle: '中小製造業におけるロボット導入の実践的な指針をまとめました',
    excerpt: '製造業におけるロボット導入のベストプラクティスをまとめたガイドラインを公開しました。',
    category: '研究',
    date: '2025-12-18',
    coverImage: {
      src: '/news/manufacturing.jpg',
      alt: '製造業向けロボット導入ガイドライン',
    },
    featured: true,
    content: [
      {
        type: 'paragraph',
        content:
          '中小製造業におけるロボット導入は、人手不足の解消と生産性向上の重要な手段となっています。しかし、適切な導入計画なくしては、期待した効果が得られないことも少なくありません。本ガイドラインでは、実際の導入事例と調査データに基づき、成功するための実践的な指針をまとめました。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入前の現状分析',
      },
      {
        type: 'paragraph',
        content:
          'ロボット導入を検討する際は、まず現状の業務プロセスを詳細に分析することが重要です。特に以下の点を確認してください。',
      },
      {
        type: 'bullet_list',
        items: [
          '現在の作業フローの可視化',
          'ボトルネックの特定',
          '人的リソースの配置状況',
          '既存設備との整合性',
          '品質管理プロセスの明確化',
        ],
      },
      {
        type: 'callout',
        title: '重要なポイント',
        body: 'ロボット導入は「無人化」を目的にするのではなく、業務の安定化と品質向上を目指すべきです。小さな改善の積み重ねが、長期的な成功につながります。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入効果の測定',
      },
      {
        type: 'paragraph',
        content:
          '導入効果を適切に測定するためには、導入前後の数値を比較することが不可欠です。以下の指標を記録することを推奨します。',
      },
      {
        type: 'stats',
        value: '34%',
        label: '削減時間',
        note: '月間で削減できる作業時間の平均値（導入事例より）',
      },
      {
        type: 'chart_bars',
        chartTitle: '導入効果の内訳（複数事例の平均）',
        series: [
          { label: '作業時間削減', value: 34 },
          { label: '品質向上', value: 28 },
          { label: 'コスト削減', value: 22 },
          { label: 'その他', value: 16 },
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: '測定すべき主要指標',
      },
      {
        type: 'table',
        headers: ['指標', '測定方法', '目標値'],
        rows: [
          ['月間削減時間', '導入前後の作業時間を記録', '20時間以上'],
          ['品質不良率', '検査データの比較', '30%削減'],
          ['人件費換算', '削減時間 × 時給', '月間10万円以上'],
        ],
      },
      {
        type: 'figure',
        image: {
          src: '/news/manufacturing-process.jpg',
          alt: '製造プロセスの可視化',
        },
        caption: 'ロボット導入前後の作業フロー比較図',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入プロセスのベストプラクティス',
      },
      {
        type: 'paragraph',
        content:
          '成功する導入プロセスには、段階的なアプローチが有効です。いきなり大規模な導入を行うのではなく、小さな範囲から始めて、効果を確認しながら拡大していくことを推奨します。',
      },
      {
        type: 'quote',
        quote:
          'ロボット導入は技術的な課題だけでなく、組織の変化への対応が重要です。スタッフの理解と協力を得ることが成功の鍵となります。',
        author: '製造業ロボット導入コンサルタント',
      },
      {
        type: 'divider',
      },
      {
        type: 'heading',
        level: 2,
        text: 'まとめ',
      },
      {
        type: 'paragraph',
        content:
          'ロボット導入は、適切な計画と段階的なアプローチにより、中小製造業でも十分に成功可能です。本ガイドラインが、皆様の導入検討の一助となれば幸いです。',
      },
      {
        type: 'footnotes',
        footnotes: [
          {
            id: '1',
            text: '本ガイドラインは、2024年度の中小製造業100社への調査結果に基づいています。',
          },
          {
            id: '2',
            text: '効果測定は最低3ヶ月間のデータ収集を推奨します。',
          },
        ],
      },
    ] as Block[],
    references: [
      {
        label: '中小製造業ロボット導入実態調査2024',
        url: 'https://example.com/survey2024',
        note: '100社へのアンケート調査結果',
      },
      {
        label: '製造業における自動化のベストプラクティス',
        url: 'https://example.com/best-practices',
      },
      {
        label: 'ロボット導入効果測定ガイドライン',
        note: '内部資料',
      },
    ],
  },
  {
    slug: 'subsidy-seminar',
    title: '補助金活用セミナー開催のお知らせ',
    excerpt: 'AI・ロボット導入に活用できる補助金について解説するセミナーを開催します。',
    category: 'お知らせ',
    date: '2025-12-17',
    coverImage: {
      src: '/news/subsidy.jpg',
      alt: '補助金活用セミナー',
    },
    featured: true,
  },
  {
    slug: 'new-robot-lineup',
    title: '新規ロボット製品ラインナップ発表',
    excerpt: '2026年度の新規ロボット製品ラインナップを発表しました。',
    category: '製品',
    date: '2025-12-16',
    coverImage: {
      src: '/news/robot-lineup.jpg',
      alt: '新規ロボット製品',
    },
    featured: false,
  },
  {
    slug: 'case-studies',
    title: 'AI・ロボット導入事例集を公開',
    excerpt: '実際の導入事例をまとめた事例集を公開しました。',
    category: '導入事例',
    date: '2025-12-15',
    coverImage: {
      src: '/news/case-studies.jpg',
      alt: '導入事例集',
    },
    featured: false,
  },
  {
    slug: 'free-consultation',
    title: '無料相談会の開催について',
    excerpt: 'AI・ロボット導入に関する無料相談会を定期的に開催しています。',
    category: 'お知らせ',
    date: '2025-12-14',
    coverImage: {
      src: '/news/consultation.jpg',
      alt: '無料相談会',
    },
    featured: false,
  },
  {
    slug: 'gigante-launch',
    title: 'Gigante（ジガンテ）バリスタロボット正式リリース',
    excerpt: '品質と運用を安定させるバリスタロボット「Gigante」の正式リリースを発表しました。',
    category: '製品',
    date: '2025-12-13',
    coverImage: {
      src: '/news/gigante.jpg',
      alt: 'Giganteバリスタロボット',
    },
    featured: false,
  },
  {
    slug: 'tipo-launch',
    title: 'Tipo（ティーポ）コーヒー抽出ロボット正式リリース',
    excerpt: 'コーヒー抽出とサーブを自動化するロボット「Tipo」の正式リリースを発表しました。',
    category: '製品',
    date: '2025-12-12',
    coverImage: {
      src: '/news/tipo.jpg',
      alt: 'Tipoコーヒー抽出ロボット',
    },
    featured: false,
  },
  {
    slug: 'safety-research',
    title: 'AI・ロボットの安全性に関する研究発表',
    excerpt: 'AI・ロボットの安全性向上に関する最新の研究成果を発表しました。',
    category: '研究',
    date: '2025-12-11',
    coverImage: {
      src: '/news/safety.jpg',
      alt: '安全性研究',
    },
    featured: false,
  },
  {
    slug: 'cafe-case-study',
    title: 'カフェチェーンでのロボット導入事例',
    subtitle: '大手カフェチェーンでのバリスタロボット導入による業務改善の実例',
    excerpt: '大手カフェチェーンでのバリスタロボット導入事例を紹介します。',
    category: '導入事例',
    date: '2025-12-10',
    coverImage: {
      src: '/news/cafe-case.jpg',
      alt: 'カフェチェーン導入事例',
    },
    featured: false,
    content: [
      {
        type: 'paragraph',
        content:
          '本記事では、全国に50店舗以上を展開するカフェチェーンでのバリスタロボット導入事例を紹介します。導入から3ヶ月が経過し、具体的な効果が数値として確認できたため、その内容を共有します。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入の背景',
      },
      {
        type: 'paragraph',
        content:
          '同社では、慢性的な人手不足とスタッフの教育コストの増大が課題となっていました。特にピーク時間帯の対応力不足が顕著で、顧客満足度の低下も懸念されていました。',
      },
      {
        type: 'callout',
        title: '課題',
        body: 'ピーク時間帯（午前7時〜10時、午後2時〜5時）の注文対応が追いつかず、待ち時間が平均5分を超えることが多かった。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入プロセス',
      },
      {
        type: 'paragraph',
        content:
          '導入は段階的に進められました。まず1店舗で3ヶ月間のパイロット導入を行い、効果を確認した上で、順次他店舗へ展開していきました。',
      },
      {
        type: 'bullet_list',
        items: [
          '2025年1月：パイロット店舗での導入開始',
          '2025年2月：効果測定とスタッフへのヒアリング',
          '2025年3月：導入効果の確認とレポート作成',
          '2025年4月：他店舗への展開開始',
        ],
      },
      {
        type: 'figure',
        image: {
          src: '/news/cafe-robot.jpg',
          alt: 'カフェでのバリスタロボット',
        },
        caption: '店舗に設置されたバリスタロボットの様子',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入効果',
      },
      {
        type: 'paragraph',
        content:
          '3ヶ月間の導入により、以下の効果が確認されました。特にピーク時間帯の対応力向上が顕著でした。',
      },
      {
        type: 'stats',
        value: '2.5分',
        label: '平均待ち時間',
        note: '導入前：5.2分 → 導入後：2.5分（52%削減）',
      },
      {
        type: 'chart_bars',
        chartTitle: '月間削減時間の内訳',
        series: [
          { label: 'コーヒー抽出作業', value: 45 },
          { label: 'ミルクフォーム作業', value: 28 },
          { label: 'サーブ作業', value: 15 },
          { label: '清掃・メンテナンス', value: 12 },
        ],
      },
      {
        type: 'table',
        headers: ['指標', '導入前', '導入後', '改善率'],
        rows: [
          ['平均待ち時間', '5.2分', '2.5分', '52%削減'],
          ['月間削減時間', '-', '100時間', '-'],
          ['顧客満足度', '3.2/5.0', '4.1/5.0', '28%向上'],
          ['スタッフの負担', '高', '中', '改善'],
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'スタッフの反応',
      },
      {
        type: 'quote',
        quote:
          'ロボット導入により、単純作業から解放され、お客様とのコミュニケーションに集中できるようになりました。仕事の質が向上したと感じています。',
        author: '店舗マネージャー',
      },
      {
        type: 'heading',
        level: 2,
        text: '今後の展開',
      },
      {
        type: 'paragraph',
        content:
          'パイロット導入の成功を受け、2025年度中に全店舗への展開を予定しています。また、他の業務プロセスへのロボット導入も検討中です。',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content:
          '本事例は、ロボット導入が単なる「無人化」ではなく、業務の質を向上させ、スタッフの働きがいを高める可能性を示しています。',
      },
      {
        type: 'footnotes',
        footnotes: [
          {
            id: '1',
            text: '本データはパイロット店舗での3ヶ月間の測定結果に基づきます。',
          },
          {
            id: '2',
            text: '顧客満足度はアンケート調査により測定（回答数：500件）。',
          },
        ],
      },
    ] as Block[],
    references: [
      {
        label: 'カフェチェーン導入事例レポート2025',
        note: 'パイロット店舗での3ヶ月間の測定結果',
      },
      {
        label: '顧客満足度調査結果',
        url: 'https://example.com/satisfaction-survey',
        note: '回答数：500件',
      },
    ],
  },
];

export function getAllNews(): NewsPost[] {
  return newsPosts;
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}

export function getNewsByCategory(category: NewsCategory | 'すべて'): NewsPost[] {
  if (category === 'すべて') {
    return newsPosts;
  }
  return newsPosts.filter((post) => post.category === category);
}

export function getFeaturedNews(): NewsPost[] {
  return newsPosts.filter((post) => post.featured);
}

