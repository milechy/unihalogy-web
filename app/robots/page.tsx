import { Suspense } from 'react';
import { getAllRobots } from '@/lib/robots';
import RobotsContent from './robots-content';
import type { RobotData } from '@/lib/robots';

export default function RobotsPage() {
  const robots = getAllRobots();

  return (
    <Suspense fallback={
      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <h1 className="mb-12 text-3xl font-semibold text-white">ロボット一覧</h1>
          <p className="text-sm text-zinc-400">読み込み中...</p>
        </div>
      </main>
    }>
      <RobotsContent initialRobots={robots} />
    </Suspense>
  );
}
