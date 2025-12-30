import type { CasePost } from '@/content/cases/types';
import CaseCard from './CaseCard';

interface FeaturedRowProps {
  featured: CasePost[];
}

export default function FeaturedRow({ featured }: FeaturedRowProps) {
  const mainFeatured = featured[0];
  const sideFeatured = featured.slice(1, 4);

  if (!mainFeatured) return null;

  return (
    <div className="mb-16 grid gap-6 md:grid-cols-3">
      {/* Large featured card */}
      <div className="md:col-span-2">
        <CaseCard post={mainFeatured} variant="large" />
      </div>

      {/* Stacked smaller cards */}
      {sideFeatured.length > 0 ? (
        <div className="flex flex-col gap-4">
          {sideFeatured.map((post) => (
            <CaseCard key={post.slug} post={post} variant="compact" />
          ))}
        </div>
      ) : (
        <div className="hidden md:block" />
      )}
    </div>
  );
}

