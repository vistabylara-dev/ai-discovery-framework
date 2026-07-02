export type JobStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed";

export interface Job {
  id: string;

  companyId: string;

  worker: string;

  status: JobStatus;

  createdAt: Date;

  startedAt?: Date;

  completedAt?: Date;
}
