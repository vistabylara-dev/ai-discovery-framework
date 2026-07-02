import { Evidence } from "@/types/evidence";

export class EvidenceService {
  private readonly evidence = new Map<string, Evidence[]>();

  add(companyId: string, items: Evidence[]): void {
    const existing = this.evidence.get(companyId) ?? [];
    this.evidence.set(companyId, [...existing, ...items]);
  }

  get(companyId: string): Evidence[] {
    return this.evidence.get(companyId) ?? [];
  }

  clear(companyId: string): void {
    this.evidence.delete(companyId);
  }
}
