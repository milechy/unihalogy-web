import type { CasePost, CaseCategory, Block } from './types';

export const casePosts: CasePost[] = [
  {
    slug: 'cafe-chain-tokyo',
    title: '東京のカフェチェーンでのバリスタロボット導入',
    excerpt: 'ピーク時間帯の対応力向上とスタッフの負担軽減を実現',
    category: '飲食・カフェ',
    date: '2025-12-15',
    coverImage: {
      src: '/cases/cafe-chain.jpg',
      alt: 'カフェチェーンでのバリスタロボット',
    },
    featured: true,
    content: [
      {
        type: 'paragraph',
        content:
          '本事例では、東京都内に5店舗を展開するカフェチェーンでのバリスタロボット導入について、導入背景から運用フロー、期待できる効果までを整理します。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入背景',
      },
      {
        type: 'paragraph',
        content:
          '同チェーンでは、午前7時から10時、午後2時から5時のピーク時間帯に注文が集中し、スタッフの対応が追いつかない状況が続いていました。特に、コーヒー抽出とミルクフォーム作業に時間がかかり、待ち時間が平均5分を超えることが多かったとのことです。',
      },
      {
        type: 'callout',
        title: '課題',
        body: 'ピーク時間帯の注文対応が追いつかず、顧客満足度の低下とスタッフの負担増大が課題となっていました。',
      },
      {
        type: 'heading',
        level: 2,
        text: '現場の制約（設置・電源・動線）',
      },
      {
        type: 'paragraph',
        content:
          '既存店舗での導入にあたり、以下の制約条件を確認しました。',
      },
      {
        type: 'bullet_list',
        items: [
          '設置スペース：幅120cm × 奥行き80cm × 高さ180cm以内',
          '電源：単相200V、15A以上（既存設備で対応可能）',
          '給排水：既存のシンクから5m以内',
          '動線：カウンター内の作業スペースを確保しつつ、スタッフの動線を阻害しない配置',
          '騒音：営業時間中の動作音が会話に支障をきたさないレベル',
        ],
      },
      {
        type: 'figure',
        image: {
          src: '/cases/cafe-layout.jpg',
          alt: '店舗レイアウト図',
        },
        caption: '導入店舗のレイアウト図（ロボット設置位置を赤枠で表示）',
      },
      {
        type: 'heading',
        level: 2,
        text: '運用フロー',
      },
      {
        type: 'paragraph',
        content:
          '導入後の運用フローは以下の通りです。スタッフは注文を受けた後、タブレット端末からロボットに指示を送信します。',
      },
      {
        type: 'table',
        headers: ['時間', '作業内容', '担当'],
        rows: [
          ['7:00', 'ロボット起動・初期設定', 'オープン担当'],
          ['7:00-10:00', 'ピーク時間帯の注文対応', 'ロボット + スタッフ'],
          ['10:00-14:00', '通常時間帯の運用', 'ロボット + スタッフ'],
          ['14:00-17:00', 'ピーク時間帯の注文対応', 'ロボット + スタッフ'],
          ['17:00-閉店', '通常時間帯の運用', 'ロボット + スタッフ'],
          ['閉店後', '清掃・メンテナンス', 'クロージング担当'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '期待できる効果（※試算/前提を明記）',
      },
      {
        type: 'paragraph',
        content:
          '以下の効果は、導入店舗での3ヶ月間の運用データに基づく試算です。前提条件として、1日あたりの注文数が平均150杯、ピーク時間帯が全体の60%を占めることを想定しています。',
      },
      {
        type: 'stats',
        value: '2.5分',
        label: '平均待ち時間',
        note: '導入前：5.2分 → 導入後：2.5分（52%削減）',
      },
      {
        type: 'chart_bars',
        chartTitle: '月間削減時間の内訳（時間）',
        series: [
          { label: 'コーヒー抽出作業', value: 45 },
          { label: 'ミルクフォーム作業', value: 28 },
          { label: 'サーブ作業', value: 15 },
          { label: '清掃・メンテナンス', value: 12 },
        ],
      },
      {
        type: 'paragraph',
        content:
          '省力化により、スタッフは接客や清掃、在庫管理などの業務に集中できるようになりました。また、コーヒー抽出の品質が標準化され、時間帯や担当者によるばらつきが減少しています。',
      },
      {
        type: 'heading',
        level: 3,
        text: '教育時間の短縮',
      },
      {
        type: 'paragraph',
        content:
          '新規スタッフの教育時間についても、従来はコーヒー抽出技術の習得に2週間程度を要していましたが、ロボット導入後は基本的な操作の習得に3日程度で済むようになりました。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'リスクと対策',
      },
      {
        type: 'paragraph',
        content:
          '導入にあたり、以下のリスクを想定し、対策を講じました。',
      },
      {
        type: 'table',
        headers: ['リスク', '対策', '状況'],
        rows: [
          [
            '機械故障による営業停止',
            '定期メンテナンス（月1回）と緊急対応体制の確立',
            '導入後3ヶ月間、故障による停止は発生せず',
          ],
          [
            'スタッフの操作ミス',
            '操作マニュアルの整備と初期トレーニング（3時間）',
            '操作ミスは月1-2件程度で、影響は軽微',
          ],
          [
            '顧客の反応',
            '導入前の説明と段階的な導入',
            '顧客からの問い合わせは少なく、概ね好評',
          ],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '導入後の学習・サポート（AI含む）',
      },
      {
        type: 'paragraph',
        content:
          'ロボットにはAI機能が搭載されており、注文パターンや時間帯に応じた最適化を自動的に学習します。導入後1ヶ月程度で、ピーク時間帯の動作速度が約15%向上しました。',
      },
      {
        type: 'bullet_list',
        items: [
          'リモートモニタリング：本社から各店舗の稼働状況を確認可能',
          '自動レポート：日次・週次・月次の運用レポートを自動生成',
          'サポート体制：平日9時-18時、緊急時は24時間対応',
        ],
      },
      {
        type: 'quote',
        quote:
          'ロボット導入により、スタッフはお客様とのコミュニケーションに集中できるようになりました。単純作業から解放され、仕事の質が向上したと感じています。',
        author: '店舗マネージャー',
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content:
          '本事例は、ロボット導入が単なる省力化ではなく、業務の標準化とスタッフの働きがい向上につながる可能性を示しています。',
      },
    ] as Block[],
    references: [
      {
        label: 'カフェチェーン導入事例レポート2025',
        note: 'パイロット店舗での3ヶ月間の運用データに基づく',
      },
      {
        label: 'バリスタロボット運用マニュアル',
        url: 'https://example.com/manual',
        note: '内部資料',
      },
    ],
  },
  {
    slug: 'event-venue-osaka',
    title: '大阪のイベント会場でのコーヒーサービス自動化',
    excerpt: '大規模イベントでの効率的な飲料提供を実現',
    category: 'イベント',
    date: '2025-12-14',
    coverImage: {
      src: '/cases/event-venue.jpg',
      alt: 'イベント会場でのロボット',
    },
    featured: true,
    content: [
      {
        type: 'paragraph',
        content:
          '本事例では、大阪市内の大型イベント会場（収容人数：5,000人）でのコーヒーサービス自動化について、導入背景から運用のポイントまでを整理します。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入背景',
      },
      {
        type: 'paragraph',
        content:
          '同会場では、大規模イベント開催時に来場者への飲料提供が課題となっていました。従来は複数のスタッフを配置していましたが、イベントの規模や時間帯によって需要が大きく変動し、適切な人員配置が困難でした。',
      },
      {
        type: 'heading',
        level: 2,
        text: '現場の制約（設置・電源・動線）',
      },
      {
        type: 'bullet_list',
        items: [
          '設置場所：会場内の複数箇所（メインエントランス、休憩エリア、2階ロビー）',
          '電源：各設置場所から10m以内にコンセントが必要',
          '給排水：給水タンク方式（1回の給水で200杯分対応）',
          '動線：来場者の流れを阻害しない配置',
          '搬入：イベント前日の搬入・設置が可能',
        ],
      },
      {
        type: 'figure',
        image: {
          src: '/cases/event-setup.jpg',
          alt: 'イベント会場での設置状況',
        },
        caption: 'イベント会場でのロボット設置状況（メインエントランス）',
      },
      {
        type: 'heading',
        level: 2,
        text: '運用フロー',
      },
      {
        type: 'paragraph',
        content:
          'イベント当日の運用フローは以下の通りです。来場者はタブレット端末から注文し、ロボットが自動的にコーヒーを抽出・提供します。',
      },
      {
        type: 'table',
        headers: ['時間', '作業内容', '担当'],
        rows: [
          ['イベント前日', 'ロボット搬入・設置・動作確認', '運営スタッフ'],
          ['当日 開場1時間前', '給水・初期設定・最終確認', '運営スタッフ'],
          ['開場中', '自動運用（来場者の注文に対応）', 'ロボット + 監視スタッフ1名'],
          ['休憩時間', '給水・清掃', '運営スタッフ'],
          ['イベント終了後', '清掃・撤収', '運営スタッフ'],
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: '期待できる効果（※試算/前提を明記）',
      },
      {
        type: 'paragraph',
        content:
          '以下の効果は、過去3回の大規模イベント（平均来場者数：4,500人）での運用データに基づく試算です。',
      },
      {
        type: 'stats',
        value: '180杯/時間',
        label: '最大提供能力',
        note: '1台あたりの最大提供能力（連続運用時）',
      },
      {
        type: 'chart_bars',
        chartTitle: 'イベント1日あたりの提供杯数（3台運用時）',
        series: [
          { label: '開場直後（1時間目）', value: 320 },
          { label: '午前中（2-3時間目）', value: 280 },
          { label: '昼休憩（4時間目）', value: 450 },
          { label: '午後（5-6時間目）', value: 380 },
          { label: '閉場前（7時間目）', value: 220 },
        ],
      },
      {
        type: 'paragraph',
        content:
          '従来のスタッフ配置では、ピーク時間帯に5名のスタッフが必要でしたが、ロボット導入後は監視スタッフ1名で対応可能となりました。また、提供速度の向上により、来場者の待ち時間が平均3分から1.5分に短縮されました。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'リスクと対策',
      },
      {
        type: 'callout',
        title: '主なリスク',
        body: 'イベント会場での運用では、電源確保や給水のタイミングが重要です。また、来場者の操作に不慣れな場合があるため、簡易的な操作説明の掲示が必要です。',
      },
      {
        type: 'heading',
        level: 2,
        text: '導入後の学習・サポート（AI含む）',
      },
      {
        type: 'paragraph',
        content:
          'ロボットは、イベントの時間帯や来場者の注文パターンを学習し、事前に準備するコーヒーの種類や数量を最適化します。また、リモートモニタリングにより、本社から各会場の稼働状況を確認できます。',
      },
    ] as Block[],
    references: [
      {
        label: 'イベント会場導入事例レポート2025',
        note: '過去3回の大規模イベントでの運用データ',
      },
    ],
  },
  {
    slug: 'office-building-nagoya',
    title: '名古屋のオフィスビルでの自動コーヒーサービス',
    excerpt: '従業員の満足度向上と業務効率化を両立',
    category: 'オフィス',
    date: '2025-12-13',
    coverImage: {
      src: '/cases/office-building.jpg',
      alt: 'オフィスビルでのコーヒーサービス',
    },
    featured: true,
  },
  {
    slug: 'shopping-mall-fukuoka',
    title: '福岡のショッピングモールでのロボット導入',
    excerpt: '来店客への新たな体験価値を提供',
    category: '商業施設',
    date: '2025-12-12',
    coverImage: {
      src: '/cases/shopping-mall.jpg',
      alt: 'ショッピングモールでのロボット',
    },
    featured: false,
  },
  {
    slug: 'train-station-yokohama',
    title: '横浜の駅構内での自動コーヒーサービス',
    excerpt: '通勤客への利便性向上と収益性の両立',
    category: '交通・公共',
    date: '2025-12-11',
    coverImage: {
      src: '/cases/train-station.jpg',
      alt: '駅構内でのコーヒーサービス',
    },
    featured: false,
  },
  {
    slug: 'warehouse-saitama',
    title: '埼玉の倉庫での物流支援ロボット導入',
    excerpt: 'ピッキング作業の効率化と人的ミスの削減',
    category: '製造・物流',
    date: '2025-12-10',
    coverImage: {
      src: '/cases/warehouse.jpg',
      alt: '倉庫での物流支援ロボット',
    },
    featured: false,
  },
  {
    slug: 'nursing-home-kyoto',
    title: '京都の介護施設でのサービスロボット導入',
    excerpt: 'スタッフの負担軽減と利用者への新たなサービス提供',
    category: '医療・介護',
    date: '2025-12-09',
    coverImage: {
      src: '/cases/nursing-home.jpg',
      alt: '介護施設でのサービスロボット',
    },
    featured: false,
  },
  {
    slug: 'hotel-sapporo',
    title: '札幌のホテルでのロボット導入事例',
    excerpt: 'ゲストサービスの向上と24時間対応の実現',
    category: 'その他',
    date: '2025-12-08',
    coverImage: {
      src: '/cases/hotel.jpg',
      alt: 'ホテルでのロボット',
    },
    featured: false,
  },
];

export function getAllCases(): CasePost[] {
  return casePosts;
}

export function getCaseBySlug(slug: string): CasePost | undefined {
  return casePosts.find((post) => post.slug === slug);
}

export function getCasesByCategory(category: CaseCategory | 'すべて'): CasePost[] {
  if (category === 'すべて') {
    return casePosts;
  }
  return casePosts.filter((post) => post.category === category);
}

export function getFeaturedCases(): CasePost[] {
  return casePosts.filter((post) => post.featured);
}

