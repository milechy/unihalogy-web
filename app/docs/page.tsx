import { Suspense } from 'react';
import DocsClient from './DocsClient';

function DocsLoadingFallback() {
  return (
    <>
      <header className="mb-16 pb-12 border-b border-zinc-800/40">
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
          ドキュメント
        </h1>
        <p className="max-w-[720px] text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
          ユニハロジーのドキュメントは、専門家でなくても理解できることを前提に設計されています。導入前・導入後の判断や運用に役立つ情報をまとめています。
        </p>
      </header>
      <div className="mt-16">
        <p className="text-sm text-zinc-500 break-words">読み込み中...</p>
      </div>
    </>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        <Suspense fallback={<DocsLoadingFallback />}>
          <DocsClient />
        </Suspense>
      </div>
    </main>
  );
}
