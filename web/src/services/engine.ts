import { Company } from "@/types/company";
import { Job } from "@/types/job";
import { WorkerDispatcher } from "@/workers";
import { EvidenceService } from "./evidence-service";
import { JobService } from "./job-service";

export class DiscoveryEngine {
  constructor(
    private readonly dispatcher: WorkerDispatcher,
    private readonly jobs: JobService,
    private readonly evidence: EvidenceService
  ) {}

  async execute(job: Job, company: Company) {
    job.status = "running";
    job.startedAt = new Date();
    this.jobs.update(job);

    const findings = await this.dispatcher.run(company);

    this.evidence.add(company.id, findings);

    job.status = "completed";
    job.completedAt = new Date();
    this.jobs.update(job);

    return findings;
  }
}
