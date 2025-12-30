import fs from 'fs';
import path from 'path';

export interface RobotData {
  slug: string;
  name: string;
  nameJa: string;
  description: string;
  category?: string[];
  priceRange: string;
  heroVideoSrc: string;
  heroOverlay?: {
    headline: string;
    subheadline: string;
  };
  featured?: boolean;
  images?: { src: string; alt: string }[];
  specs?: Record<string, string>;
  capacityRange?: {
    min: number;
    max: number;
    minPerDay?: number;
    maxPerDay?: number;
    recommendedMin?: number;
    recommendedMax?: number;
    unit: string;
    explanation?: string;
  };
  defaults?: {
    cupsPerDay?: number;
    pagesPerDay?: number;
    peakHoursPerDay?: number;
    hourlyWageDefault?: number;
  };
  assumptions?: {
    secondsSavedPerCup?: number;
    timeSavedPerPage?: number;
    disclaimer?: string;
  };
  roiAssumptions?: {
    cupsPerDay?: number;
    pagesPerDay?: number;
    hourlyWage: number;
    peakHours: number;
    timeSavedPerPage?: number;
  };
  solves: string[];
  capabilities?: Array<{
    title: string;
    description: string;
  }>;
  installationConstraints?: {
    space?: string;
    power?: string;
    environment?: string;
  };
  suitableFor: string[];
  notSuitableFor: string[];
  implementationSteps?: {
    step?: number;
    title?: string;
    description?: string;
    before?: string;
    after?: string;
  }[];
  purchase: {
    priceRange?: string;
    priceLabel?: string;
    warranty: string;
    support: string;
    supportLevel?: string;
  };
  rental: {
    priceRange?: string;
    priceLabel?: string;
    warranty: string;
    support: string;
    supportLevel?: string;
    minimumMonths?: number;
    minMonths?: number;
    returnable?: boolean;
    returnPolicyLabel?: string;
  };
  videos?: Array<{
    youtubeId: string;
    title: string;
    featured: boolean;
  }>;
  contract?: {
    warrantyOneYear: boolean;
    subsidyAvailable: boolean;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export function getAllRobots(): RobotData[] {
  const robotsDir = path.join(process.cwd(), 'content', 'robots');
  
  if (!fs.existsSync(robotsDir)) {
    return [];
  }

  const files = fs.readdirSync(robotsDir);
  const robots: Array<RobotData & { fileModifiedTime?: number }> = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      try {
        const filePath = path.join(robotsDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const robot = JSON.parse(fileContents) as RobotData;
        // カテゴリがない場合は「その他」を設定
        if (!robot.category || robot.category.length === 0) {
          robot.category = ['その他'];
        }
        // ファイルの更新日時を取得（新しいLPを左上に表示するため）
        const stats = fs.statSync(filePath);
        robots.push({ ...robot, fileModifiedTime: stats.mtimeMs });
      } catch (error) {
        console.error(`Error loading robot from ${file}:`, error);
      }
    }
  }

  // 新しいLPを左上に表示: 更新日時が新しい順（降順）でソート
  robots.sort((a, b) => {
    // Featured robots first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    // Then by file modification time (newest first)
    const timeA = a.fileModifiedTime || 0;
    const timeB = b.fileModifiedTime || 0;
    return timeB - timeA;
  });

  // fileModifiedTimeを削除して返す
  return robots.map(({ fileModifiedTime, ...robot }) => robot);
}

export function getRobotBySlug(slug: string): RobotData | null {
  const robotsDir = path.join(process.cwd(), 'content', 'robots');
  const filePath = path.join(robotsDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as RobotData;
  } catch (error) {
    console.error(`Error loading robot ${slug}:`, error);
    return null;
  }
}

