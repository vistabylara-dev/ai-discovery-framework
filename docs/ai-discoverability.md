# AI discoverability and SEO implementation guide

Use this guide when adapting the examples in this repository to a real site. Search ranking, indexing, inclusion in generated answers, and citations are controlled by third parties and cannot be guaranteed. This repository is not the production Vista website and intentionally does not provide deployable crawler files, a production sitemap, or legal policy pages.

## Verify before production deployment

Do not deploy this repository's examples over existing production resources. Confirm the correct website repository, hosting project, canonical host, and currently served files before making site changes. Before publishing:

- Preserve existing production `robots.txt` and `llms.txt` unless an individual change is verified, justified, and reviewed in the website repository.
- Build or update a sitemap from canonical, indexable page routes verified in the deployed site. Exclude guessed routes, repository source files, and raw schema/JSON resources; do not supersede a working sitemap with an unverified inventory.
- Validate every intended URL on the live host and confirm canonical metadata and page content agree.
- Verify all organization, contact, address, logo, service-area, and author claims against current production information. Add prices, hours, ratings, awards, or credentials only when independently confirmed.
- Publish privacy and terms pages only after completing them against actual site practices and obtaining appropriate legal review.
- Confirm the production hosting project and successful deployment before submitting a sitemap to Google Search Console or Bing Webmaster Tools.

## Page metadata

Set unique, descriptive titles and concise descriptions for each indexable page. This repository's Next.js example demonstrates the framework metadata API:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "AI Discovery Framework Example",
  description:
    "Example metadata for a site documenting AI-readable websites, structured data, semantic architecture, and technical SEO.",
  keywords: ["AI Discovery", "technical SEO", "structured data", "GEO", "AEO"],
  openGraph: {
    type: "website",
    title: "AI Discovery Framework Example",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  },
  twitter: {
    card: "summary",
    title: "AI Discovery Framework Example",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
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

The existing [`schemas/organization.json`](../schemas/organization.json) is a repository example, not verified production data. Confirm every organization field against the deployed site before using it. Do not publish schema JSON files as if they were indexable pages; embed accurate JSON-LD on the corresponding visible page.

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

Before publishing legal notices, document actual data collection, processors, purposes, retention, transfers, user rights, and contact paths; have qualified counsel review them for applicable jurisdictions. Inventory cookies and tracking, block non-essential technologies until consent where required, and provide a working consent and withdrawal mechanism.

Add independently verifiable citations for press, speaking, research, or case-study claims before publishing them. Keep author biographies limited to confirmed expertise and credentials. Maintain consistent organization name, contact, location, and profile links across the site and public profiles.
