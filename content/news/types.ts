export type NewsCategory = '製品' | '研究' | '導入事例' | 'お知らせ';

export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'bullet_list'
  | 'callout'
  | 'quote'
  | 'figure'
  | 'divider'
  | 'stats'
  | 'chart_bars'
  | 'table'
  | 'footnotes';

export interface Block {
  type: BlockType;
  // heading
  level?: 2 | 3;
  text?: string;
  // paragraph
  content?: string;
  // bullet_list
  items?: string[];
  // callout
  title?: string;
  body?: string;
  // quote
  quote?: string;
  author?: string;
  // figure
  image?: {
    src: string;
    alt: string;
  };
  caption?: string;
  // stats
  value?: string | number;
  label?: string;
  note?: string;
  // chart_bars
  chartTitle?: string;
  series?: Array<{
    label: string;
    value: number;
  }>;
  // table
  headers?: string[];
  rows?: string[][];
  // footnotes
  footnotes?: Array<{
    id: string;
    text: string;
  }>;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt?: string;
  subtitle?: string;
  category: NewsCategory;
  date: string; // YYYY-MM-DD
  coverImage: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  content?: Block[];
  references?: {
    label: string;
    url?: string;
    note?: string;
  }[];
}

