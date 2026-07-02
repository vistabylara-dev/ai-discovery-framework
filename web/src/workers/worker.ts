import { Company } from "@/types/company";
import { Evidence } from "@/types/evidence";

export interface Worker {

  readonly id: string;

  readonly name: string;

  readonly version: string;

  execute(
    company: Company
  ): Promise<Evidence[]>;

}
