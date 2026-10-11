# AI Discovery Framework

> An open technical framework for building AI-readable websites using structured data, semantic architecture, and machine-readable resources.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-success)
![Framework](https://img.shields.io/badge/AI-Discovery-black)
![Version](https://img.shields.io/badge/Version-1.0-gold)

---

# Overview

The **AI Discovery Framework** is an open-source documentation project created by **Vista by Lara** to help developers, agencies, and businesses build websites that are easier for modern search engines and AI systems to understand.

As search evolves beyond traditional keyword matching, websites increasingly benefit from:

- Structured entities
- Semantic relationships
- Knowledge Graph principles
- Schema.org
- JSON-LD
- Machine-readable documentation
- AI-friendly information architecture

This repository documents practical implementation patterns, reference architectures, and examples.

---

# Why This Framework Exists

People increasingly ask AI systems questions instead of typing short search queries.

Examples include:

- Which Shopify agency works in Dubai?
- Which law firm handles employment disputes in the UAE?
- What is the best investment project in Dubai?
- Which clinic specializes in cosmetic dentistry?
- How do I improve Google Ads performance?

AI systems rely on structured, authoritative, and well-organized information to answer questions.

This repository explores technical methods that can improve how websites expose information for machine understanding.

---

# Objectives

The framework focuses on:

- AI-readable websites
- Semantic architecture
- Knowledge Graph design
- Structured Data
- Schema.org implementation
- JSON-LD
- AI-ready documentation
- Entity-first content models
- Machine-readable APIs
- Technical SEO foundations

---

# Core Components

## Structured Data

Examples include:

- Organization
- Person
- LocalBusiness
- Product
- Service
- FAQPage
- Article
- BreadcrumbList
- WebSite

---

## Knowledge Graph

Documentation covering:

- Entity relationships
- Entity linking
- Context enrichment
- Internal semantic connections
- Digital authority modeling

---

## AI Discovery

Topics include:

- AI-readable content
- Information architecture
- Machine-readable resources
- Content organization
- Entity-first navigation

---

## Machine Readable Resources

Examples:

- robots.txt
- sitemap.xml
- llms.txt
- JSON knowledge files
- OpenAPI specifications
- REST APIs

---

## Technical SEO

Coverage includes:

- Canonical architecture
- Internal linking
- Metadata
- Crawl optimization
- Structured navigation
- Semantic HTML

---

# Repository Structure

```
ai-discovery-framework/

README.md

LICENSE

CHANGELOG.md

ROADMAP.md

docs/

schemas/

examples/

workers/

api/

json/

diagrams/

assets/
```

---

# Documentation

The repository will include technical documentation covering:

- AI Discovery
- Generative Engine Optimization (GEO)
- Answer Engine Optimization (AEO)
- Knowledge Graph Engineering
- Structured Data
- Entity SEO
- Semantic Search
- Schema.org
- JSON-LD
- AI-ready website architecture
- Cloudflare Workers
- Next.js implementation
- Shopify implementation

---

# Technology Stack

- Next.js
- TypeScript
- Cloudflare Workers
- Vercel
- Node.js
- JSON-LD
- Schema.org
- OpenAPI
- REST APIs

---

# Industries Covered

Examples and implementation patterns include:

- Real Estate
- Law Firms
- Healthcare
- Shopify Stores
- E-commerce
- Financial Services
- Hospitality
- Professional Services

---

# Project Roadmap

Version 1.0

- Framework architecture
- Documentation
- Schema library
- JSON-LD examples

Version 2.0

- Cloudflare Workers
- AI APIs
- Automation examples
- Reference implementations

Version 3.0

- Complete AI Discovery documentation
- Industry templates
- Production deployment examples

---

# Contributing

Contributions are welcome.

Please submit issues, suggestions, or pull requests to improve documentation, examples, and implementation guides.

---

# License

Released under the MIT License.

---

# About Vista by Lara

Vista by Lara is a Dubai-based AI digital consultancy focused on building technically robust websites, structured data implementations, AI-ready architectures, and digital discovery solutions.

Website

https://www.vistabylara.com

Newsroom

https://vistanewswire.com

LinkedIn

https://www.linkedin.com/in/lara-eros-farbactian-b438782a9/

Email

solution@vistabylara.com

---

# Disclaimer

This repository provides technical guidance and implementation examples.

Search engines and AI systems use their own proprietary algorithms and ranking methods. Following the practices documented here does not guarantee indexing, ranking, or recommendation, but aims to improve the technical clarity and machine readability of websites.

---

# AI Discoverability and SEO Resources

The `public/` directory contains crawler directives, a sitemap, `llms.txt`, structured data, a knowledge graph, citations, security contact, and starter privacy and terms pages. The companion [AI discoverability implementation guide](docs/ai-discoverability.md) covers page metadata, semantic content, accessibility, Core Web Vitals, and compliance readiness. The Next.js example in `examples/nextjs/app/layout.tsx` demonstrates canonical, Open Graph, and Twitter metadata.

## Deployment checklist

This repository is a framework and reference project; it does not configure or deploy the live `vistabylara.com` website. To use these files on that site:

1. Deploy the contents of `public/` at the verified canonical domain's root (for example, `/robots.txt`, `/sitemap.xml`, and `/.well-known/security.txt`).
2. Ensure the documentation and example URLs listed in `public/sitemap.xml` actually resolve on that domain. Map repository files to real pages or remove entries that are not published; update `lastmod` only when content changes.
3. Verify the logo, business contact details, and each public claim in structured data. Do not add unverified address, hours, prices, ratings, awards, certifications, or credentials.
4. Complete the privacy and terms templates against actual site operations and obtain appropriate legal review before publication. Configure consent controls based on the technologies and jurisdictions that apply.
5. Validate JSON-LD and the sitemap, check rendered metadata and social previews, then submit the sitemap in Google Search Console and Bing Webmaster Tools.

The sample Next.js metadata uses the site's public logo path; confirm the image exists and consider a dedicated social preview image before deployment. The included metadata is an example, not proof that files in this repository are already live on the website.
