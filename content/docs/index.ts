import type { DocCategory, DocItem } from './types';

export const docCategories: DocCategory[] = [
  {
    id: 'adoption',
    title: '導入ガイド',
    description: 'AI・ロボット導入を検討する際に、最初に知っておくべき考え方と流れ。',
  },
  {
    id: 'ops',
    title: 'ロボット運用・管理',
    description: '導入後に「使われ続ける」ための、運用・管理・トラブル対応の考え方。',
  },
  {
    id: 'aichat',
    title: 'AIチャット・相談の使い方',
    description: 'AIによる事前整理を、どう使うと効果的か。',
  },
  {
    id: 'safety',
    title: '安全性・リスク管理',
    description: '事故を防ぐための考え方と、現場での安全設計。',
  },
  {
    id: 'security',
    title: 'セキュリティ・データ管理',
    description: 'データとシステムをどう守っているか。',
  },
  {
    id: 'subsidy',
    title: '補助金・制度ガイド',
    description: 'ロボット・AI導入に使える補助金・制度の考え方。',
  },
];

export const docItems: DocItem[] = [
  {
    slug: 'getting-started',
    title: '導入前に整理すべき5つのこと',
    excerpt: '目的・制約・運用体制を先に言語化すると、失敗確率が下がります。',
    categoryId: 'adoption',
    updatedAt: '2025-01-15',
    readingMinutes: 6,
    featured: true,
  },
  {
    slug: 'poc-playbook',
    title: '小さく始めるPoCの作り方',
    excerpt: '短期間で検証し、現場で回る形に落とし込みます。',
    categoryId: 'adoption',
    updatedAt: '2025-01-10',
    readingMinutes: 8,
    featured: true,
  },
  {
    slug: 'ops-daily-checklist',
    title: '日常点検と清掃のチェックリスト',
    excerpt: '運用が回るかどうかは、毎日の20分で決まります。',
    categoryId: 'ops',
    updatedAt: '2025-01-12',
    readingMinutes: 5,
    featured: false,
  },
  {
    slug: 'ai-chat-howto',
    title: 'AIチャットで相談するときに用意する情報',
    excerpt: '入力量が増えるほど、提案の精度が上がります。',
    categoryId: 'aichat',
    updatedAt: '2025-01-14',
    readingMinutes: 4,
    featured: true,
  },
  {
    slug: 'safety-basics',
    title: '安全設計の基本：フェイルセーフと人の介入',
    excerpt: '異常時の挙動を先に設計することが、現場の安心につながります。',
    categoryId: 'safety',
    updatedAt: '2025-01-11',
    readingMinutes: 7,
    featured: false,
  },
  {
    slug: 'subsidy-basics',
    title: '補助金・助成金の考え方（導入検討の入口）',
    excerpt: '制度は目的に沿って選ぶ。書類は"現場の言語化"です。',
    categoryId: 'subsidy',
    updatedAt: '2025-01-13',
    readingMinutes: 6,
    featured: false,
  },
];

export function getAllDocs(): DocItem[] {
  return docItems;
}

export function getDocsByCategory(categoryId: string): DocItem[] {
  return docItems.filter((doc) => doc.categoryId === categoryId);
}

export function getFeaturedDocs(): DocItem[] {
  return docItems.filter((doc) => doc.featured === true);
}

export function getDocBySlug(slug: string): DocItem | undefined {
  return docItems.find((doc) => doc.slug === slug);
}

export function getCategoryById(id: string): DocCategory | undefined {
  return docCategories.find((cat) => cat.id === id);
}

