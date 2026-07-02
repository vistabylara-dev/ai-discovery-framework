import { NextResponse } from "next/server";
import { discoveryEngine } from "@/lib/discovery-engine";
import { Company } from "@/types/company";
import { Job } from "@/types/job";

export async function POST() {
  const company: Company = {
    id: crypto.randomUUID(),
    name: "Vista Test Company",
    website: "https://example.com",
    industry: "Technology",
    country: "UAE",
    city: "Dubai",
    opportunityScore: 0,
    aiVisibilityScore: 0,
    technicalScore: 0,
    trustScore: 0,
    websiteQualityScore: 0,
    publicSignals: [],
    recommendedServices: [],
    lastScanned: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const job: Job = {
    id: crypto.randomUUID(),
    companyId: company.id,
    worker: "health-worker",
    status: "queued",
    createdAt: new Date(),
  };

  const evidence = await discoveryEngine.execute(job, company);

  return NextResponse.json({
    success: true,
    evidence,
  });
}
