import type { CasePost } from '@/content/cases/types';

interface ReferencesProps {
  references: CasePost['references'];
}

export default function References({ references }: ReferencesProps) {
  // Fix: Use Array.isArray to properly check if references exists and is an array
  if (!Array.isArray(references) || references.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-medium tracking-tight text-zinc-200">引用文献</h2>
      <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 md:p-8">
        <ul className="space-y-4">
          {references.map((ref, index) => (
            <li key={index} className="text-sm leading-relaxed">
              <div className="text-zinc-200">
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-600/30 underline-offset-2 transition-colors hover:decoration-zinc-500/50 hover:text-zinc-100"
                  >
                    {ref.label}
                  </a>
                ) : (
                  <span>{ref.label}</span>
                )}
              </div>
              {ref.note && (
                <div className="mt-1 text-zinc-500">{ref.note}</div>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-zinc-500">外部資料は参考情報です。</p>
      </div>
    </section>
  );
}

