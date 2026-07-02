import { DiscoveryEngine } from "@/services/engine";
import { EvidenceService } from "@/services/evidence-service";
import { JobService } from "@/services/job-service";
import { WorkerDispatcher } from "@/workers";
import { HealthWorker } from "@/workers";
import { WebsiteValidatorWorker } from "@/workers/system/website-validator-worker";

const dispatcher = new WorkerDispatcher();

// Register all workers
dispatcher.register(new HealthWorker());
dispatcher.register(new WebsiteValidatorWorker());

export const discoveryEngine = new DiscoveryEngine(
  dispatcher,
  new JobService(),
  new EvidenceService()
);
