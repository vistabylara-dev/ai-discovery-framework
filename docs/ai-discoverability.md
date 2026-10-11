# AI discoverability and SEO implementation guide

Use this guide when adapting the reference files in `public/` to a real site. Search ranking, indexing, inclusion in generated answers, and citations are controlled by third parties and cannot be guaranteed.

## Publish and verify the resources

Deploy the contents of `public/` at the root of the verified canonical domain. This repository does not configure or deploy the live `vistabylara.com` website. Before publishing:

- Confirm that `https://www.vistabylara.com/` is the canonical host and that all listed sitemap URLs resolve to indexable pages or resources. Remove or correct routes that do not exist.
- Update `lastmod` values only when the corresponding page materially changes. Keep the sitemap limited to canonical, indexable URLs and submit it to Google Search Console and Bing Webmaster Tools.
- Check that robots exclusions apply only to private or non-indexable paths. `robots.txt` is a crawl hint, not access control; protect private content with authentication.
- Verify that the organization phone number and logo URL in structured data are current. Add a street address, opening hours, review aggregate, service prices, awards, or credentials only when they are public, accurate, and supportable.
- Replace the contact in `security.txt` if security reports use a different monitored mailbox. Publish the privacy notice and terms only after completing the templates against actual site practices and obtaining appropriate legal review.
- Confirm the social image URL resolves to a crawlable image with suitable dimensions, and that each page's canonical and metadata match its visible content.

## Page metadata

Set unique, descriptive titles and concise descriptions for each indexable page. This repository's Next.js example demonstrates the framework metadata API:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vistabylara.com"),
  title: "AI Discovery Framework | Vista by Lara",
  description:
    "The AI Discovery Framework by Vista by Lara explains practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  keywords: ["AI Discovery", "technical SEO", "structured data", "GEO", "AEO"],
  authors: [{ name: "Lara Farbactian" }],
  creator: "Vista by Lara",
  openGraph: {
    type: "website",
    title: "AI Discovery Framework | Vista by Lara",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
    siteName: "Vista by Lara",
    images: [{ url: "/logo.png", alt: "Vista by Lara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Discovery Framework | Vista by Lara",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
    images: ["/logo.png"],
  },
}
```

Set canonical URLs and Open Graph URLs in each page's metadata, not in a shared root layout where a fixed homepage URL could be inherited by child pages. For example, a documentation page should declare its own path:

```tsx
export const metadata: Metadata = {
  alternates: { canonical: "/docs/ai-search/" },
  openGraph: {
    type: "article",
    url: "/docs/ai-search/",
    title: "AI Search Architecture",
    description: "A page-specific, accurate summary of this guide.",
  },
}
```

Use a real, preferably 1200 × 630 social preview image and a verified Twitter handle if available. Add `article:author`, `article:published_time`, and `article:modified_time` only to article pages, using the article's actual author and publication/update dates. Do not invent alternate-language links; add `hreflang` only for real equivalent translations. The document must declare UTF-8, a responsive viewport, and `<html lang="en">`; preload only verified critical assets that materially improve rendering.

## Structured data and knowledge relationships

Use JSON-LD whose claims are also visible on the page. Choose the most specific truthful Schema.org type, keep `@id` values stable, and link related entities consistently. Validate JSON syntax and test markup with Schema.org's validator and the appropriate search-engine rich-result test. Structured data does not guarantee a rich result.

`schema/organization.json` identifies the organization, founder, and Dubai location. `schema/services.json` describes the listed services and geographic service area. Pricing, business hours, exact street address, awards, and review ratings are omitted because this repository does not establish verified values. Add these only after confirmation; never fabricate aggregate ratings or credentials.

Article markup should be generated per published article, for example:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The page's visible headline",
  "description": "An accurate summary of the article.",
  "author": {
    "@type": "Person",
    "name": "The verified author",
    "url": "The author's public profile"
  },
  "datePublished": "The actual ISO 8601 publication date",
  "dateModified": "The actual ISO 8601 modification date",
  "timeRequired": "PT5M",
  "keywords": ["Topic actually covered"]
}
```

Replace every illustrative value with verified page-specific data before emitting JSON-LD. Reading time should be based on the article's actual length.

## Writing content for people and answer systems

- Lead with a direct answer in one to three concise sentences, followed by evidence, context, and caveats.
- Define entities and acronyms on first use. State who or what an entity is and link to a stable, authoritative source where useful.
- Use descriptive headings and question-and-answer sections only when they reflect genuine user questions. Keep the answers visible on the page.
- Summarize key points with factual bullets, use an inverted-pyramid structure, and link related pages using descriptive anchor text.
- Keep claims attributable and current. Distinguish documented facts, examples, and opinions; cite original sources and dates where relevant.

## Accessibility and performance

Write useful alt text that conveys the purpose of informative images; use `alt=""` for decorative images and avoid repeating nearby text. Use semantic landmarks, a logical heading hierarchy (one descriptive `h1`, then nested headings), visible keyboard focus, and sufficient contrast. Serve responsive images in efficient formats with dimensions to limit layout shifts, reserve preload for critical fonts/images, and measure Core Web Vitals on actual pages across mobile and desktop.

## Privacy, consent, and trust

The included privacy notice and terms are incomplete templates, not legal policies. Document actual data collection, processors, purposes, retention, transfers, user rights, and contact paths; have qualified counsel review them for applicable jurisdictions. Inventory cookies and tracking, block non-essential technologies until consent where required, and provide a working consent and withdrawal mechanism. The compliance JSON intentionally makes no unverified privacy certification or AI-training opt-out claim.

Add independently verifiable citations for press, speaking, research, or case-study claims before publishing them. Keep author biographies limited to confirmed expertise and credentials. Maintain consistent organization name, contact, location, and profile links across the site and public profiles.
