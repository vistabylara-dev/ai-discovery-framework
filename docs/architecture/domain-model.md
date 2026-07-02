# Vista AI Discovery Engine - Domain Model

## Core Entities

Company
│
├── has many → Public Signals
├── has many → AI Workers Results
├── has many → Opportunities
├── has many → Reports
└── has one → AI Visibility Profile

---

Opportunity

Represents a potential business opportunity generated from public evidence.

---

Worker

Represents one AI worker responsible for a single analysis.

Examples:

- SEO Worker
- GEO Worker
- Hiring Worker
- Funding Worker
- Technology Worker

---

Signal

A publicly observed event.

Examples:

- Hiring Shopify Developer
- New Website Launch
- Funding Announcement
- Press Release
- Poor Core Web Vitals

---

Report

Generated after every scan.

Contains:

- Scores
- Findings
- Recommendations

---

Visibility Profile

Stores all AI Visibility metrics for one company.

Contains:

- GEO Score
- AEO Score
- Technical SEO
- Entity Score
- Trust Score
