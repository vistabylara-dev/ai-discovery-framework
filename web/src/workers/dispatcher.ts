import { Company } from "@/types/company";
import { Evidence } from "@/types/evidence";
import { Worker } from "./worker";

export class WorkerDispatcher {
  private readonly workers = new Map<string, Worker>();

  register(worker: Worker): void {
    this.workers.set(worker.id, worker);
  }

  getWorkers(): Worker[] {
    return [...this.workers.values()];
  }

  async run(company: Company): Promise<Evidence[]> {
    const evidence: Evidence[] = [];

    for (const worker of this.workers.values()) {
      const result = await worker.execute(company);
      evidence.push(...result);
    }

    return evidence;
  }
}
