import { getAllRobots } from '@/lib/robots';
import { getAllNews, getFeaturedNews } from '@/content/news/index';
import { getAllCases, getFeaturedCases } from '@/content/cases/index';
import PageClient from './page-client';

export default function Page() {
  const robots = getAllRobots();
  const allNews = getAllNews();
  // Get latest 6: sorted by date desc (newest first), no featured override
  const latestNews = allNews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const allCases = getAllCases();
  const featuredCases = getFeaturedCases();
  // Get latest 3: featured first, then latest by date
  const latestCases = [
    ...featuredCases.slice(0, 3),
    ...allCases
      .filter((post) => !post.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  ].slice(0, 3);

  return <PageClient initialRobots={robots} latestNews={latestNews} latestCases={latestCases} />;
}
