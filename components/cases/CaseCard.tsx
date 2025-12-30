import Link from 'next/link';
import type { CasePost } from '@/content/cases/types';

interface CaseCardProps {
  post: CasePost;
  variant?: 'default' | 'compact' | 'large';
}

export default function CaseCard({ post, variant = 'default' }: CaseCardProps) {
  const isLarge = variant === 'large';
  const isCompact = variant === 'compact';

  return (
    <Link
      href={`/cases/${post.slug}`}
      className="group block rounded-lg border border-zinc-800/60 bg-zinc-900/30 overflow-hidden transition-all hover:border-zinc-700 hover:bg-zinc-900/40"
    >
      <div
        className={`relative overflow-hidden bg-zinc-800/50 ${
          isLarge ? 'aspect-video' : isCompact ? 'aspect-square' : 'aspect-[16/10]'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-800/30" />
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-zinc-600">{post.coverImage.alt}</span>
        </div>
      </div>
      <div className={`p-4 ${isLarge ? 'p-6' : ''}`}>
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-400">
            {post.category}
          </span>
        </div>
        <h3
          className={`font-medium text-zinc-200 group-hover:text-zinc-100 ${
            isLarge ? 'text-xl mb-2' : isCompact ? 'text-sm line-clamp-2' : 'text-base line-clamp-2'
          }`}
        >
          {post.title}
        </h3>
        {isLarge && post.excerpt && (
          <p className="mb-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">{post.excerpt}</p>
        )}
        <p className={`text-xs text-zinc-500 ${isLarge ? 'mt-4' : 'mt-2'}`}>
          {new Date(post.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </Link>
  );
}

