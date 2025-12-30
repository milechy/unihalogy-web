'use client';

import { useState, useMemo } from 'react';
import type { RobotData } from '@/lib/robots';

interface GiganteEstimatorProps {
  robot: RobotData;
}

export default function GiganteEstimator({ robot }: GiganteEstimatorProps) {
  const defaults = (robot as any).defaults || { cupsPerDay: 50, peakHoursPerDay: 3, hourlyWageDefault: 1200 };
  const assumptions = (robot as any).assumptions || { secondsSavedPerCup: 180 };
  
  const [cupsPerDay, setCupsPerDay] = useState(defaults.cupsPerDay || 50);
  const [peakHoursPerDay, setPeakHoursPerDay] = useState(defaults.peakHoursPerDay || 3);
  const [hourlyWage, setHourlyWage] = useState(defaults.hourlyWageDefault || 1200);

  const calculations = useMemo(() => {
    const secondsSavedPerCup = assumptions.secondsSavedPerCup || 180; // 3 minutes = 180 seconds
    const totalSecondsSaved = cupsPerDay * secondsSavedPerCup;
    const hoursSavedPerDay = totalSecondsSaved / 3600;
    const hoursSavedPerMonth = hoursSavedPerDay * 30;
    const laborCostEquivalentPerMonth = hoursSavedPerMonth * hourlyWage;

    // Capacity range calculation based on peak hours
    const capacityRange = (robot as any).capacityRange || {};
    const minPerDay = capacityRange.minPerDay || capacityRange.min || 30;
    const maxPerDay = capacityRange.maxPerDay || capacityRange.max || 100;
    const recommendedMin = capacityRange.recommendedMin || Math.round(minPerDay * 1.3);
    const recommendedMax = capacityRange.recommendedMax || Math.round(maxPerDay * 0.8);

    return {
      savedHoursPerMonth: Math.round(hoursSavedPerMonth * 10) / 10,
      laborCostEquivalentPerMonth: Math.round(laborCostEquivalentPerMonth),
      capacityRange: {
        min: minPerDay,
        max: maxPerDay,
        recommendedMin,
        recommendedMax,
        unit: capacityRange.unit || '杯/日',
      },
    };
  }, [cupsPerDay, peakHoursPerDay, hourlyWage, robot, assumptions]);

  const disclaimer = assumptions.disclaimer || '目安。現場条件で変動。診断で精査。';

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium text-zinc-200">あなたの現場で試算</h3>
          <p className="text-sm text-zinc-400">実際の現場条件を入力してください</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs font-medium text-zinc-400">
              1日のコーヒー杯数
            </label>
            <input
              type="number"
              value={cupsPerDay}
              onChange={(e) => setCupsPerDay(Number(e.target.value))}
              min="1"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 transition-colors focus:border-zinc-600 focus:bg-zinc-900/70 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-medium text-zinc-400">
              ピーク時間（時間/日）
            </label>
            <input
              type="number"
              value={peakHoursPerDay}
              onChange={(e) => setPeakHoursPerDay(Number(e.target.value))}
              min="1"
              max="12"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 transition-colors focus:border-zinc-600 focus:bg-zinc-900/70 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-medium text-zinc-400">
              時給（円）
            </label>
            <input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(Number(e.target.value))}
              min="800"
              step="100"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 transition-colors focus:border-zinc-600 focus:bg-zinc-900/70 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />
          </div>
        </div>
      </div>

      {/* Results Section - A+B+C */}
      <div className="space-y-8 border-t border-zinc-800/60 pt-8">
        {/* A: Saved Hours */}
        <div>
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-xs text-zinc-500">A</span>
            <span className="text-sm text-zinc-400">月間削減時間（目安）</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {calculations.savedHoursPerMonth}
            </span>
            <span className="text-lg text-zinc-500">時間</span>
          </div>
        </div>

        {/* B: Labor Cost Equivalent */}
        <div>
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-xs text-zinc-500">B</span>
            <span className="text-sm text-zinc-400">人件費換算（目安）</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {calculations.laborCostEquivalentPerMonth.toLocaleString()}
            </span>
            <span className="text-lg text-zinc-500">円/月</span>
          </div>
        </div>

        {/* C: Capacity Stability Range */}
        <div>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-xs text-zinc-500">C</span>
            <span className="text-sm text-zinc-400">安定処理能力の範囲</span>
          </div>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {calculations.capacityRange.min}
            </span>
            <span className="mx-1 text-lg text-zinc-500">〜</span>
            <span className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {calculations.capacityRange.max}
            </span>
            <span className="ml-2 text-lg text-zinc-500">{calculations.capacityRange.unit}</span>
          </div>
          
          {/* Stability Gauge */}
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-900/50">
            {/* Full range background */}
            <div className="absolute inset-0 bg-zinc-800/30" />
            {/* Recommended band */}
            <div
              className="absolute h-full bg-zinc-600/50 transition-all duration-500"
              style={{
                left: `${(calculations.capacityRange.recommendedMin / calculations.capacityRange.max) * 100}%`,
                width: `${((calculations.capacityRange.recommendedMax - calculations.capacityRange.recommendedMin) / calculations.capacityRange.max) * 100}%`,
              }}
            />
            {/* Min-Max range indicator */}
            <div
              className="absolute h-full border-l border-r border-zinc-400/30 bg-zinc-500/30 transition-all duration-500"
              style={{
                left: `${(calculations.capacityRange.min / calculations.capacityRange.max) * 100}%`,
                width: `${((calculations.capacityRange.max - calculations.capacityRange.min) / calculations.capacityRange.max) * 100}%`,
              }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            推奨運用範囲: {calculations.capacityRange.recommendedMin}〜{calculations.capacityRange.recommendedMax}{calculations.capacityRange.unit}
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-zinc-800/60 pt-6">
        <p className="text-xs text-zinc-500">{disclaimer}</p>
      </div>
    </div>
  );
}

