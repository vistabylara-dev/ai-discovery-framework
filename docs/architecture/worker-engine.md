# Worker Engine

## Philosophy

Every worker must perform exactly ONE responsibility.

Workers never communicate directly.

Workers never modify another worker's output.

Workers only produce evidence.

---

## Flow

Company

↓

Dispatcher

↓

Worker

↓

Evidence

↓

Scoring Engine

↓

Opportunity Engine

↓

Report Generator

---

## Rules

Workers are independent.

Workers can run in parallel.

Workers must be stateless.

Workers must return structured JSON.

Workers never calculate final scores.

Workers never generate reports.

Workers never contact customers.

---

## Worker Lifecycle

Receive Job

↓

Validate Input

↓

Collect Public Data

↓

Analyze

↓

Generate Evidence

↓

Return JSON

↓

Finish

---

## Examples

Technology Worker

↓

Detects

Shopify

WordPress

Next.js

Cloudflare

Laravel

etc.

Returns

Technology Evidence

---

Hiring Worker

↓

Checks public hiring signals.

Returns

Hiring Evidence

---

SEO Worker

↓

Returns

SEO Evidence

---

Funding Worker

↓

Returns

Funding Evidence
