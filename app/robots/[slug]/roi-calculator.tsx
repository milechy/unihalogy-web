'use client';

import { useState, useMemo } from 'react';
import type { RobotData } from '@/lib/robots';

interface RobotROICalculatorProps {
  robot: RobotData;
}

export default function RobotROICalculator({ robot }: RobotROICalculatorProps) {
  const assumptions = robot.roiAssumptions;
  if (!assumptions) return null;

  const isTipo = robot.slug === 'tipo';
  const [cupsPerDay, setCupsPerDay] = useState(assumptions.cupsPerDay || 100);
  const [pagesPerDay, setPagesPerDay] = useState(assumptions.pagesPerDay || 500);
  const [hourlyWage, setHourlyWage] = useState(assumptions.hourlyWage || 1200);
  const [peakHours, setPeakHours] = useState(assumptions.peakHours || 3);

  const calculations = useMemo(() => {
    if (isTipo) {
      // Tipo: コーヒー1杯あたり3分の作業時間を削減
      const timeSavedPerCup = 3; // 分
      const totalMinutesSaved = cupsPerDay * timeSavedPerCup;
      const hoursSavedPerDay = totalMinutesSaved / 60;
      const hoursSavedPerMonth = hoursSavedPerDay * 30;
      const costSavedPerMonth = hoursSavedPerMonth * hourlyWage;
      
      // Capacity calculation
      const maxCapacityPerDay = 60 * peakHours; // 60 cups/hour max
      const minCapacityPerDay = Math.round(maxCapacityPerDay * 0.6);
      
      return { 
        hoursSavedPerMonth, 
        costSavedPerMonth,
        capacityRange: { min: minCapacityPerDay, max: maxCapacityPerDay },
      };
    } else {
      // Gigante: 印刷1ページあたりの作業時間を削減
      const timeSavedPerPage = (assumptions as any).timeSavedPerPage || 0.3; // 分
      const totalMinutesSaved = pagesPerDay * timeSavedPerPage;
      const hoursSavedPerDay = totalMinutesSaved / 60;
      const hoursSavedPerMonth = hoursSavedPerDay * 30;
      const costSavedPerMonth = hoursSavedPerMonth * hourlyWage;
      
      // Capacity calculation: use capacityRange from data if available, otherwise calculate
      const robotData = robot as any;
      let capacityRange;
      if (robotData.capacityRange) {
        capacityRange = robotData.capacityRange;
      } else {
        // Fallback calculation based on peak hours
        const maxCapacityPerDay = 200 * peakHours; // 200 pages/hour max
        const minCapacityPerDay = Math.round(maxCapacityPerDay * 0.7);
        capacityRange = { min: minCapacityPerDay, max: maxCapacityPerDay, unit: 'ページ/日' };
      }
      
      return { 
        hoursSavedPerMonth, 
        costSavedPerMonth,
        capacityRange: { 
          min: capacityRange.min, 
          max: capacityRange.max,
          unit: capacityRange.unit || 'ページ/日'
        },
      };
    }
  }, [isTipo, cupsPerDay, pagesPerDay, hourlyWage, peakHours, robot, assumptions]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
        <h3 className="mb-6 text-lg font-medium text-zinc-200">あなたの現場で試算</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {isTipo ? (
            <>
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
              <div>
                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  ピーク時間（時間）
                </label>
                <input
                  type="number"
                  value={peakHours}
                  onChange={(e) => setPeakHours(Number(e.target.value))}
                  min="1"
                  max="12"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 transition-colors focus:border-zinc-600 focus:bg-zinc-900/70 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  1日の印刷ページ数
                </label>
                <input
                  type="number"
                  value={pagesPerDay}
                  onChange={(e) => setPagesPerDay(Number(e.target.value))}
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
                  value={peakHours}
                  onChange={(e) => setPeakHours(Number(e.target.value))}
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
                  min="1000"
                  step="100"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 transition-colors focus:border-zinc-600 focus:bg-zinc-900/70 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Hours Saved */}
        <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
              <svg
                className="h-5 w-5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-sm font-medium text-zinc-400">月間削減時間</h4>
          </div>
          <div className="mb-3">
            <span className="text-3xl font-semibold tracking-tight text-white">
              {Math.round(calculations.hoursSavedPerMonth)}
            </span>
            <span className="ml-2 text-lg text-zinc-400">時間</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900/50">
            <div
              className="h-full bg-zinc-500 transition-all duration-500"
              style={{ 
                width: `${Math.min((calculations.hoursSavedPerMonth / 200) * 100, 100)}%` 
              }}
            />
          </div>
        </div>

        {/* Cost Saved */}
        <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
              <svg
                className="h-5 w-5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-sm font-medium text-zinc-400">月間削減コスト</h4>
          </div>
          <div className="mb-3">
            <span className="text-3xl font-semibold tracking-tight text-white">
              {Math.round(calculations.costSavedPerMonth).toLocaleString()}
            </span>
            <span className="ml-2 text-lg text-zinc-400">円</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900/50">
            <div
              className="h-full bg-zinc-500 transition-all duration-500"
              style={{ 
                width: `${Math.min((calculations.costSavedPerMonth / 1000000) * 100, 100)}%` 
              }}
            />
          </div>
        </div>

        {/* Capacity Range */}
        <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
              <svg
                className="h-5 w-5 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h4 className="text-sm font-medium text-zinc-400">安定処理能力</h4>
          </div>
          <div className="mb-3">
            <span className="text-3xl font-semibold tracking-tight text-white">
              {calculations.capacityRange.min}
            </span>
            <span className="mx-1 text-lg text-zinc-500">〜</span>
            <span className="text-3xl font-semibold tracking-tight text-white">
              {calculations.capacityRange.max}
            </span>
            <span className="ml-2 text-lg text-zinc-400">
              {calculations.capacityRange.unit || (isTipo ? '杯/日' : 'ページ/日')}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-900/50">
            <div
              className="h-full bg-zinc-500 transition-all duration-500"
              style={{ 
                width: `${((calculations.capacityRange.max - calculations.capacityRange.min) / calculations.capacityRange.max) * 100 + (calculations.capacityRange.min / calculations.capacityRange.max) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/20 p-4">
        <p className="text-xs leading-relaxed text-zinc-500">
          <span className="font-medium text-zinc-400">※ 目安値です。</span>
          実際の効果は現場条件（作業フロー、既存設備、人員配置など）により変動します。
          より正確な試算は、AI診断で精査します。
        </p>
      </div>
    </div>
  );
}
