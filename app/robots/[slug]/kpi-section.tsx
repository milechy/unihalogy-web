'use client';

import { useMemo } from 'react';
import type { RobotData } from '@/lib/robots';

interface KPISectionProps {
  robot: RobotData;
}

export default function KPISection({ robot }: KPISectionProps) {
  const assumptions = robot.roiAssumptions;
  if (!assumptions) return null;

  const isTipo = robot.slug === 'tipo';
  
  // Calculate default KPIs
  const kpis = useMemo(() => {
    if (isTipo) {
      const cupsPerDay = assumptions.cupsPerDay || 100;
      const timeSavedPerCup = 3; // minutes
      const hoursSavedPerDay = (cupsPerDay * timeSavedPerCup) / 60;
      const hoursSavedPerMonth = hoursSavedPerDay * 30;
      const costSavedPerMonth = hoursSavedPerMonth * (assumptions.hourlyWage || 1200);
      
      // Capacity range: based on specs (max 60 cups/hour) and typical usage
      const maxCapacityPerDay = 60 * (assumptions.peakHours || 3);
      const minCapacityPerDay = Math.round(maxCapacityPerDay * 0.6); // 60% of peak as stable minimum
      
      return {
        hoursSavedPerMonth: Math.round(hoursSavedPerMonth),
        costSavedPerMonth: Math.round(costSavedPerMonth),
        capacityRange: { min: minCapacityPerDay, max: maxCapacityPerDay },
        unit: '杯/日',
      };
    } else {
      // Gigante: use capacityRange from data if available, otherwise calculate
      const pagesPerDay = assumptions.pagesPerDay || 500;
      const timeSavedPerPage = (assumptions as any).timeSavedPerPage || 0.3; // minutes
      const hoursSavedPerDay = (pagesPerDay * timeSavedPerPage) / 60;
      const hoursSavedPerMonth = hoursSavedPerDay * 30;
      const costSavedPerMonth = hoursSavedPerMonth * (assumptions.hourlyWage || 1500);
      
      // Use capacityRange from robot data if available
      const robotData = robot as any;
      let capacityRange;
      if (robotData.capacityRange) {
        capacityRange = robotData.capacityRange;
      } else {
        // Fallback calculation
        const maxCapacityPerDay = 200 * (assumptions.peakHours || 4);
        const minCapacityPerDay = Math.round(maxCapacityPerDay * 0.7);
        capacityRange = { min: minCapacityPerDay, max: maxCapacityPerDay, unit: 'ページ/日' };
      }
      
      return {
        hoursSavedPerMonth: Math.round(hoursSavedPerMonth),
        costSavedPerMonth: Math.round(costSavedPerMonth),
        capacityRange: { 
          min: capacityRange.min, 
          max: capacityRange.max,
          unit: capacityRange.unit || 'ページ/日'
        },
      };
    }
  }, [isTipo, assumptions, robot]);

  return (
    <section className="mb-20 border-t border-zinc-800/60 pt-16">
      <div className="mb-12">
        <h2 className="mb-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
          期待できる効果
        </h2>
        <p className="text-xs text-zinc-500">
          目安。条件により変動します。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* KPI 1: Saved Hours */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50">
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
            <h3 className="text-sm font-medium text-zinc-400">削減時間</h3>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {kpis.hoursSavedPerMonth}
            </span>
            <span className="ml-2 text-lg text-zinc-400">時間/月</span>
          </div>
          <p className="text-xs text-zinc-500">
            月間で削減できる作業時間の目安
          </p>
        </div>

        {/* KPI 2: Cost Saved */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50">
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
            <h3 className="text-sm font-medium text-zinc-400">削減コスト</h3>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {kpis.costSavedPerMonth.toLocaleString()}
            </span>
            <span className="ml-2 text-lg text-zinc-400">円/月</span>
          </div>
          <p className="text-xs text-zinc-500">
            人件費換算での月間削減額
          </p>
        </div>

        {/* KPI 3: Daily Capacity */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50">
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
            <h3 className="text-sm font-medium text-zinc-400">安定処理能力</h3>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {kpis.capacityRange.min}
            </span>
            <span className="mx-1 text-lg text-zinc-500">〜</span>
            <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {kpis.capacityRange.max}
            </span>
            <span className="ml-2 text-lg text-zinc-400">{kpis.unit}</span>
          </div>
          <p className="text-xs text-zinc-500">
            安定して処理できる日次能力の範囲
          </p>
        </div>
      </div>
    </section>
  );
}

