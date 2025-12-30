import type { Service, Incident, Maintenance, ServiceStatus } from './types';

export const services: Service[] = [
  {
    id: 'ai-chat',
    name: 'AIチャット（事前整理）',
    description: '相談の事前整理・ヒアリング',
    status: 'operational',
  },
  {
    id: 'website',
    name: 'Webサイト',
    description: 'コーポレートサイト、LP、ドキュメント',
    status: 'operational',
  },
  {
    id: 'data-storage',
    name: 'データ保存・ログ',
    description: '相談内容・運用データの保存',
    status: 'operational',
  },
  {
    id: 'management',
    name: '管理・運用システム',
    description: '社内管理、運用支援',
    status: 'operational',
  },
];

export const incidents: Incident[] = [
  {
    id: 'incident-2025-01-10',
    title: 'Webサイトの一時的な応答遅延',
    status: 'resolved',
    impact: 'degraded',
    startedAt: '2025-01-10 14:30',
    updatedAt: '2025-01-10 15:45',
    summary: 'Webサイトの応答時間が一時的に増加しました。原因を特定し、対応を実施しました。',
    updates: [
      {
        at: '2025-01-10 14:30',
        text: 'Webサイトの応答遅延を確認。調査を開始しました。',
      },
      {
        at: '2025-01-10 15:00',
        text: '原因を特定。サーバーリソースの調整を実施しました。',
      },
      {
        at: '2025-01-10 15:45',
        text: '応答時間が正常に戻りました。解消を確認しました。',
      },
    ],
    affectedServiceIds: ['website'],
  },
];

export const maintenance: Maintenance[] = [];

export function getAllServices(): Service[] {
  return services;
}

export function getActiveIncidents(): Incident[] {
  return incidents.filter((incident) => incident.status !== 'resolved');
}

export function getResolvedIncidents(): Incident[] {
  return incidents
    .filter((incident) => incident.status === 'resolved')
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export function getUpcomingMaintenance(): Maintenance[] {
  const now = new Date();
  return maintenance
    .filter((m) => new Date(m.startsAt) > now)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}

export function getOverallStatus(): ServiceStatus {
  const statuses = services.map((s) => s.status);
  
  // Priority order: major_outage > maintenance > partial_outage > degraded > operational
  if (statuses.includes('major_outage')) return 'major_outage';
  if (statuses.includes('maintenance')) return 'maintenance';
  if (statuses.includes('partial_outage')) return 'partial_outage';
  if (statuses.includes('degraded')) return 'degraded';
  return 'operational';
}

export function getLatestUpdateTime(): string {
  const incidentTimes = incidents.map((i) => i.updatedAt);
  // Use endsAt for maintenance as it represents the most recent relevant timestamp
  const maintenanceTimes = maintenance.map((m) => m.endsAt);
  const allTimes = [...incidentTimes, ...maintenanceTimes];
  
  if (allTimes.length === 0) {
    // Return current time in YYYY-MM-DD HH:mm format
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
  return allTimes.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];
}

