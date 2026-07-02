import { BaseWorker } from "../base-worker";
import { Company } from "@/types/company";
import { Evidence } from "@/types/evidence";

export class WebsiteValidatorWorker extends BaseWorker {
  id = "website-validator";

  name = "Website Validator";

  version = "1.0.0";

  async execute(company: Company): Promise<Evidence[]> {

    const evidence: Evidence[] = [];

    try {

      new URL(company.website);

      evidence.push({

        id: crypto.randomUUID(),

        worker: this.id,

        companyId: company.id,

        category: "validation",

        title: "Website URL Valid",

        description: "URL format is valid.",

        severity: "info",

        confidence: 100,

        source: "system",

        timestamp: new Date()

      });

    } catch {

      evidence.push({

        id: crypto.randomUUID(),

        worker: this.id,

        companyId: company.id,

        category: "validation",

        title: "Invalid Website URL",

        description: "The submitted URL is invalid.",

        severity: "critical",

        confidence: 100,

        source: "system",

        timestamp: new Date()

      });

    }

    return evidence;

  }

}
