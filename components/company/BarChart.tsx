interface BarChartProps {
  data: Array<{
    label: string;
    value: number;
  }>;
}

export default function BarChart({ data }: BarChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index}>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-zinc-300">{item.label}</span>
            <span className="font-medium text-zinc-200">{item.value}%</span>
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
  );
}

