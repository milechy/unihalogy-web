import { notFound } from 'next/navigation';
import { getAllCases, getCaseBySlug } from '@/content/cases/index';
import CasesShell from '@/components/cases/CasesShell';
import CaseArticle from '@/components/cases/CaseArticle';
import References from '@/components/cases/References';
import RelatedCases from '@/components/cases/RelatedCases';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllCases();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function CasePostPage({ params }: PageProps) {
  const { slug } = await params;
  const allCases = getAllCases();
  const post = getCaseBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find previous and next posts
  const currentIndex = allCases.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allCases[currentIndex - 1] : null;
  const nextPost = currentIndex < allCases.length - 1 ? allCases[currentIndex + 1] : null;

  return (
    <CasesShell>
      <CaseArticle post={post} previousPost={previousPost} nextPost={nextPost} />
      <div className="mx-auto w-full max-w-[720px] px-5 md:px-8 pb-32">
        <References references={post.references} />
        <RelatedCases currentPost={post} />
      </div>
    </CasesShell>
  );
}

