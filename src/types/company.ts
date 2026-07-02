export interface Company {
  id: string;

  name: string;

  website: string;

  industry: string;

  country: string;

  city: string;

  opportunityScore: number;

  aiVisibilityScore: number;

  technicalScore: number;

  trustScore: number;

  websiteQualityScore: number;

  publicSignals: string[];

  recommendedServices: string[];

  lastScanned: Date;

  createdAt: Date;

  updatedAt: Date;
}
