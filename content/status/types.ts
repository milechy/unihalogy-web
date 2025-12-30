export type ServiceStatus = 'operational' | 'degraded' | 'partial_outage' | 'major_outage' | 'maintenance';

export type IncidentStatus = 'investigating' | 'identified' | 'monitoring' | 'resolved';

export interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
}

export interface IncidentUpdate {
  at: string; // YYYY-MM-DD HH:mm
  text: string;
}

export interface Incident {
  id: string;
  title: string;
  status: IncidentStatus;
  impact: ServiceStatus; // degraded | partial_outage | major_outage
  startedAt: string; // YYYY-MM-DD HH:mm
  updatedAt: string; // YYYY-MM-DD HH:mm
  summary: string;
  updates: IncidentUpdate[];
  affectedServiceIds: string[];
}

export interface Maintenance {
  id: string;
  title: string;
  startsAt: string; // YYYY-MM-DD HH:mm
  endsAt: string; // YYYY-MM-DD HH:mm
  summary: string;
  affectedServiceIds: string[];
}

