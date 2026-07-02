export type EvidenceSeverity =
  | "info"
  | "low"
  | "medium"
  | "high"
  | "critical";

export interface Evidence {
  id: string;

  worker: string;

  companyId: string;

  category: string;

  title: string;

  description: string;

  severity: EvidenceSeverity;

  confidence: number;

  source: string;

  timestamp: Date;

  metadata?: Record<string, unknown>;
}
