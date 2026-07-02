import { Company } from "@/types/company";
import { Evidence } from "@/types/evidence";
import { Worker } from "./worker";

export abstract class BaseWorker implements Worker {

  abstract id: string;

  abstract name: string;

  abstract version: string;

  abstract execute(
    company: Company
  ): Promise<Evidence[]>;

}
