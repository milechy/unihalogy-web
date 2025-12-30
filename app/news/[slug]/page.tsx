import { notFound } from 'next/navigation';
import { getAllNews, getNewsBySlug } from '@/content/news/index';
import NewsShell from '@/components/news/NewsShell';
import Article from '@/components/news/Article';
import ReferencesSection from '@/components/article/ReferencesSection';
import RelatedPosts from '@/components/article/RelatedPosts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllNews();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = getAllNews();
  const post = getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find previous and next posts
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Get related posts (same category, exclude current)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      date: p.date,
      coverImage: p.coverImage,
    }));

  return (
    <NewsShell>
      <Article post={post} previousPost={previousPost} nextPost={nextPost} />
      <div className="mx-auto w-full max-w-[720px] px-5 md:px-8 pb-32">
        <ReferencesSection references={post.references} />
        <RelatedPosts posts={relatedPosts} contentType="news" currentCategory={post.category} />
      </div>
    </NewsShell>
  );
}

