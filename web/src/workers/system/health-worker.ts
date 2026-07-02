import { BaseWorker } from "../base-worker";
import { Company } from "@/types/company";
import { Evidence } from "@/types/evidence";

export class HealthWorker extends BaseWorker {
  id = "health-worker";
  name = "Health Worker";
  version = "1.0.0";

  async execute(company: Company): Promise<Evidence[]> {
    return [
      {
        id: crypto.randomUUID(),
        worker: this.id,
        companyId: company.id,
        category: "system",
        title: "Worker Executed",
        description: `Health check completed for ${company.name}`,
        severity: "info",
        confidence: 100,
        source: "system",
        timestamp: new Date(),
      },
    ];
  }
}
