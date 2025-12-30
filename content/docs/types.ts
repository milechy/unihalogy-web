export interface DocCategory {
  id: string;
  title: string;
  description: string;
}

export interface DocItem {
  slug: string;
  title: string;
  excerpt: string;
  categoryId: string;
  updatedAt: string; // YYYY-MM-DD
  readingMinutes?: number;
  featured?: boolean;
}

