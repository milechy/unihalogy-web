import type { BlogPost, BlogCategory, Block } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'small-start-big-impact',
    title: '小さく始める、確実に積み上げる',
    excerpt: 'AI・ロボット導入は、いきなり大規模に始める必要はありません。小さな範囲から始めて、効果を確認しながら拡大していく実践的なアプローチを解説します。',
    category: '考え方',
    date: '2025-12-20',
    coverImage: {
      src: '/blog/small-start.jpg',
      alt: '小さく始める導入アプローチ',
    },
    featured: true,
    author: 'ユニハロジー編集部',
    readingTime: '5分',
  },
  {
    slug: 'roi-calculation-guide',
    title: 'ROI計算の実践的な考え方',
    excerpt: '「投資対効果が分からない」という声に応えて、実際の現場で使えるROI計算の考え方と、よくある落とし穴を整理します。',
    category: '導入ノウハウ',
    date: '2025-12-19',
    coverImage: {
      src: '/blog/roi-guide.jpg',
      alt: 'ROI計算ガイド',
    },
    featured: true,
    author: 'ユニハロジー編集部',
    readingTime: '7分',
    references: [
      {
        label: '中小企業向けROI計算ガイドライン2024',
        url: 'https://example.com/roi-guideline',
        note: '経済産業省発行のガイドライン',
      },
      {
        label: '製造業における投資対効果の測定方法',
        url: 'https://example.com/manufacturing-roi',
      },
      {
        label: 'ROI計算の実践事例集',
        note: '内部資料',
      },
    ],
  },
  {
    slug: 'ai-preparation-checklist',
    title: 'AI導入前に確認すべき10のチェックリスト',
    excerpt: 'AI導入を検討する際に、事前に確認しておくべきポイントを実践的なチェックリスト形式でまとめました。',
    category: '導入ノウハウ',
    date: '2025-12-18',
    coverImage: {
      src: '/blog/checklist.jpg',
      alt: 'AI導入チェックリスト',
    },
    featured: true,
    author: 'ユニハロジー編集部',
    readingTime: '6分',
  },
  {
    slug: 'robot-maintenance-basics',
    title: 'ロボット導入後のメンテナンス基礎',
    excerpt: 'ロボット導入後、安定稼働を維持するためのメンテナンスの基礎知識と、よくあるトラブルへの対処法を解説します。',
    category: '技術解説',
    date: '2025-12-17',
    coverImage: {
      src: '/blog/maintenance.jpg',
      alt: 'ロボットメンテナンス',
    },
    featured: false,
    author: 'ユニハロジー編集部',
    readingTime: '8分',
  },
  {
    slug: 'cafe-automation-case',
    title: 'カフェでの自動化：現場から見た導入の実際',
    excerpt: '実際にカフェでロボット導入を進めた現場スタッフの視点から、導入前後の変化と学びをレポートします。',
    category: '現場レポート',
    date: '2025-12-16',
    coverImage: {
      src: '/blog/cafe-case.jpg',
      alt: 'カフェ導入事例',
    },
    featured: false,
    author: 'ユニハロジー編集部',
    readingTime: '10分',
  },
  {
    slug: 'subsidy-application-tips',
    title: '補助金申請で失敗しないための5つのポイント',
    excerpt: '補助金・助成金の申請でよくある失敗パターンと、成功するための実践的なポイントをまとめました。',
    category: '導入ノウハウ',
    date: '2025-12-15',
    coverImage: {
      src: '/blog/subsidy.jpg',
      alt: '補助金申請',
    },
    featured: false,
    author: 'ユニハロジー編集部',
    readingTime: '6分',
  },
  {
    slug: 'ai-human-collaboration',
    title: 'AIと人の協働：置き換えではなく拡張',
    excerpt: 'AI導入の目的は「無人化」ではなく「拡張」です。現場の強みを活かしながら、AIと人が協働するための考え方を整理します。',
    category: '考え方',
    date: '2025-12-14',
    coverImage: {
      src: '/blog/collaboration.jpg',
      alt: 'AIと人の協働',
    },
    featured: false,
    author: 'ユニハロジー編集部',
    readingTime: '7分',
  },
  {
    slug: 'safety-guidelines-overview',
    title: 'AI・ロボットの安全性ガイドライン概説',
    excerpt: '国のガイドラインに沿ったAI・ロボットの安全性確保について、実務的な観点から解説します。',
    category: '技術解説',
    date: '2025-12-13',
    coverImage: {
      src: '/blog/safety.jpg',
      alt: '安全性ガイドライン',
    },
    featured: false,
    author: 'ユニハロジー編集部',
    readingTime: '9分',
  },
];

export function getAllBlogs(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogsByCategory(category: BlogCategory | 'すべて'): BlogPost[] {
  if (category === 'すべて') {
    return getAllBlogs();
  }
  return getAllBlogs().filter((post) => post.category === category);
}

export function getFeaturedBlogs(): BlogPost[] {
  return getAllBlogs().filter((post) => post.featured);
}

