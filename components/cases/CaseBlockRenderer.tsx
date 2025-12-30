import Image from 'next/image';
import type { Block } from '@/content/cases/types';

interface BlockRendererProps {
  blocks: Block[];
}

export default function CaseBlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <BlockComponent key={index} block={block} />
      ))}
    </div>
  );
}

function BlockComponent({ block }: { block: Block }) {
  switch (block.type) {
    case 'heading':
      const HeadingTag = block.level === 3 ? 'h3' : 'h2';
      return (
        <HeadingTag
          className={`font-medium tracking-tight text-white ${
            block.level === 3 ? 'mt-12 mb-4 text-xl' : 'mt-16 mb-6 text-2xl'
          }`}
        >
          {block.text}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p className="leading-relaxed text-zinc-300 text-[15px] md:text-[16px]">
          {block.content}
        </p>
      );

    case 'bullet_list':
      if (!block.items || block.items.length === 0) return null;
      return (
        <ul className="space-y-3 pl-6">
          {block.items.map((item, idx) => (
            <li key={idx} className="relative leading-relaxed text-zinc-300 text-[15px] md:text-[16px]">
              <span className="absolute -left-4 text-zinc-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      );

    case 'callout':
      return (
        <div className="relative rounded-lg border-l-2 border-zinc-700/50 border-t border-r border-b border-zinc-800/60 bg-zinc-900/30 p-5">
          {block.title && (
            <h4 className="mb-2 text-sm font-medium text-zinc-200">{block.title}</h4>
          )}
          {block.body && (
            <p className="leading-relaxed text-zinc-300 text-sm">{block.body}</p>
          )}
        </div>
      );

    case 'quote':
      return (
        <blockquote className="border-l-2 border-zinc-700/50 pl-6">
          <p className="mb-3 italic leading-relaxed text-zinc-300 text-[15px] md:text-[16px]">
            {block.quote}
          </p>
          {block.author && (
            <cite className="text-sm text-zinc-500 not-italic">— {block.author}</cite>
          )}
        </blockquote>
      );

    case 'figure':
      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-800/50">
            {block.image && block.image.src ? (
              <Image
                src={block.image.src}
                alt={block.image.alt || '画像'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800/50 to-zinc-800/30">
                <span className="text-xs text-zinc-600">{block.image?.alt || '画像'}</span>
              </div>
            )}
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'divider':
      return <hr className="my-12 border-0 border-t border-zinc-800/40" />;

    case 'stats':
      return (
        <div className="my-8 rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-6">
          <div className="mb-2">
            <span className="text-4xl font-light tracking-tight text-white">
              {typeof block.value === 'number' ? block.value.toLocaleString() : block.value}
            </span>
          </div>
          {block.label && (
            <div className="mb-1 text-sm font-medium text-zinc-300">{block.label}</div>
          )}
          {block.note && <div className="text-xs text-zinc-500">{block.note}</div>}
        </div>
      );

    case 'chart_bars':
      if (!block.series || block.series.length === 0) return null;
      const maxValue = Math.max(...block.series.map((s) => s.value));
      return (
        <div className="my-8 rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-6">
          {block.chartTitle && (
            <h4 className="mb-6 text-sm font-medium text-zinc-200">{block.chartTitle}</h4>
          )}
          <div className="space-y-4">
            {block.series.map((item, idx) => (
              <div key={idx}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-zinc-300">{item.label}</span>
                  <span className="font-medium text-zinc-200">{item.value.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900/50">
                  <div
                    className="h-full bg-zinc-600 transition-all"
                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'table':
      if (!block.headers || !block.rows) return null;
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {block.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="border-b border-zinc-800/60 px-4 py-3 text-left text-sm font-medium text-zinc-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-zinc-800/40">
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-4 py-3 text-sm text-zinc-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'footnotes':
      if (!block.footnotes || block.footnotes.length === 0) return null;
      return (
        <div className="mt-16 border-t border-zinc-800/60 pt-8">
          <h4 className="mb-6 text-sm font-medium uppercase tracking-wide text-zinc-500">
            脚注
          </h4>
          <ol className="space-y-3">
            {block.footnotes.map((note) => (
              <li key={note.id} className="text-sm leading-relaxed text-zinc-400">
                <span className="mr-2 font-medium text-zinc-500">{note.id}.</span>
                {note.text}
              </li>
            ))}
          </ol>
        </div>
      );

    default:
      return null;
  }
}

