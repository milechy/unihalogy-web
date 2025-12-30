import Link from 'next/link';
import {
  getAllServices,
  getActiveIncidents,
  getResolvedIncidents,
  getUpcomingMaintenance,
  getOverallStatus,
  getLatestUpdateTime,
} from '@/content/status/index';
import type { ServiceStatus, IncidentStatus } from '@/content/status/types';

function getStatusLabel(status: ServiceStatus): string {
  const labels: Record<ServiceStatus, string> = {
    operational: '正常',
    degraded: '遅延',
    partial_outage: '一部停止',
    major_outage: '障害',
    maintenance: 'メンテナンス',
  };
  return labels[status];
}

function getStatusColor(status: ServiceStatus): string {
  const colors: Record<ServiceStatus, string> = {
    operational: 'bg-green-500/20 text-green-400 border-green-500/30',
    degraded: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    partial_outage: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    major_outage: 'bg-red-500/20 text-red-400 border-red-500/30',
    maintenance: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  };
  return colors[status];
}

function getIncidentStatusLabel(status: IncidentStatus): string {
  const labels: Record<IncidentStatus, string> = {
    investigating: '調査中',
    identified: '原因特定',
    monitoring: '監視中',
    resolved: '解消',
  };
  return labels[status];
}

function formatDateTime(dateTimeStr: string): string {
  // Convert "YYYY-MM-DD HH:mm" to ISO format
  const isoStr = dateTimeStr.replace(' ', 'T') + ':00+09:00';
  const date = new Date(isoStr);
  return date.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Tokyo',
  }) + ' (JST)';
}

function getOverallStatusMessage(status: ServiceStatus): string {
  const messages: Record<ServiceStatus, string> = {
    operational: 'すべてのシステムは正常に稼働しています',
    degraded: '一部のサービスで影響が発生しています',
    partial_outage: '一部のサービスで影響が発生しています',
    major_outage: '現在、障害が発生しています',
    maintenance: 'メンテナンス中のサービスがあります',
  };
  return messages[status];
}

export default function StatusPage() {
  const services = getAllServices();
  const activeIncidents = getActiveIncidents();
  const resolvedIncidents = getResolvedIncidents();
  const upcomingMaintenance = getUpcomingMaintenance();
  const overallStatus = getOverallStatus();
  const latestUpdate = getLatestUpdateTime();

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-8 md:py-24">
        {/* Hero */}
        <header className="mb-16 pb-12 border-b border-zinc-800/40">
          <h1 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-5xl break-words">
            システムステータス
          </h1>
          
          {/* Status Banner */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-8 break-words">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl break-words">
              {getOverallStatusMessage(overallStatus)}
            </h2>
            <p className="text-sm text-zinc-500 break-words">
              最終更新：{formatDateTime(latestUpdate)}
            </p>
          </div>
        </header>

        {/* Services list */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            対象サービス
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-2 rounded-xl border border-zinc-800/60 bg-zinc-900/10 p-5 break-words md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="text-base font-medium text-white break-words md:text-lg">
                      {service.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(service.status)}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {getStatusLabel(service.status)}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 break-words">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current incidents */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            現在の事象
          </h2>
          {activeIncidents.length === 0 ? (
            <p className="text-sm text-zinc-500 break-words">
              現在、報告されている問題はありません。
            </p>
          ) : (
            <div className="space-y-6">
              {activeIncidents.map((incident) => (
                <div
                  key={incident.id}
                  className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-medium text-white break-words">
                        {incident.title}
                      </h3>
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                        <span>{getIncidentStatusLabel(incident.status)}</span>
                        <span>•</span>
                        <time>開始：{formatDateTime(incident.startedAt)}</time>
                        <span>•</span>
                        <time>最終更新：{formatDateTime(incident.updatedAt)}</time>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300 break-words">
                        {incident.summary}
                      </p>
                    </div>
                  </div>
                  {incident.updates.length > 0 && (
                    <div className="mt-4 space-y-3 border-t border-zinc-800/40 pt-4">
                      <h4 className="text-sm font-medium text-zinc-400 break-words">更新履歴</h4>
                      <div className="space-y-2">
                        {incident.updates
                          .sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime())
                          .map((update, index) => (
                            <div key={index} className="flex gap-3 text-sm break-words">
                              <time className="shrink-0 text-zinc-500">
                                {formatDateTime(update.at)}
                              </time>
                              <p className="text-zinc-300">{update.text}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Incident history */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            過去の事象
          </h2>
          {resolvedIncidents.length === 0 ? (
            <p className="text-sm text-zinc-500 break-words">
              過去の事象はありません。
            </p>
          ) : (
            <div className="space-y-3">
              {resolvedIncidents.map((incident) => (
                <div
                  key={incident.id}
                  className="flex flex-col gap-2 rounded-xl border border-zinc-800/60 bg-zinc-900/10 p-4 break-words md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-white break-words">
                      {incident.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <time>{formatDateTime(incident.updatedAt)}</time>
                    <span>•</span>
                    <span>解消済み</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="mt-6 text-sm text-zinc-500 break-words">
            すべての重大な事象は、このページで公開します。
          </p>
        </section>

        {/* Scheduled maintenance */}
        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            予定されているメンテナンス
          </h2>
          {upcomingMaintenance.length === 0 ? (
            <p className="text-sm text-zinc-500 break-words">
              現在、予定されているメンテナンスはありません。
            </p>
          ) : (
            <div className="space-y-4">
              {upcomingMaintenance.map((maint) => (
                <div
                  key={maint.id}
                  className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-6 break-words"
                >
                  <h3 className="mb-2 text-lg font-medium text-white break-words">{maint.title}</h3>
                  <div className="mb-3 text-sm text-zinc-400 break-words">
                    <time>{formatDateTime(maint.startsAt)}</time>
                    <span> ～ </span>
                    <time>{formatDateTime(maint.endsAt)}</time>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300 break-words">{maint.summary}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Update policy */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            ステータス更新について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ステータス情報は、自動監視と人による確認の両方で更新されます。障害や影響が確認された場合は、可能な限り迅速にこのページで共有します。
            </p>
          </div>
        </section>

        {/* Impact & response */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            影響と対応について
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              問題が発生した場合、影響範囲・暫定対応・恒久対応を順に整理し、共有します。
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            ステータスに関するお問い合わせ
          </h2>
          <div className="max-w-[720px]">
            <p className="text-[15px] leading-relaxed text-zinc-300 break-words md:text-[16px]">
              ステータスに関するご質問や、表示内容に関するご指摘がある場合は、
              <Link
                href="/contact"
                className="text-zinc-400 underline decoration-zinc-600/30 underline-offset-2 hover:text-zinc-300 hover:decoration-zinc-500/50 transition-colors break-words"
              >
                お問い合わせページ
              </Link>
              よりご連絡ください。
            </p>
          </div>
        </section>

        {/* Changelog */}
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-semibold text-white tracking-tight md:text-4xl break-words">
            更新履歴
          </h2>
          <div className="max-w-[720px]">
            <ul className="space-y-2">
              <li className="text-[15px] leading-relaxed text-zinc-400 break-words md:text-[16px]">
                {todayStr}：ステータスページ公開
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

