# Schema.org Implementation Guide

## Overview

Schema.org is a collaborative vocabulary used to describe web content in a structured, machine-readable format.

It enables website owners to define entities such as organizations, people, services, products, articles, events, and frequently asked questions using standardized terminology.

The AI Discovery Framework uses Schema.org as one component of a broader semantic architecture.

---

# Why Use Schema.org?

Schema.org provides consistent definitions for common web entities.

Benefits include:

- Standardized structured data
- Better semantic clarity
- Machine-readable content
- Improved interoperability
- Consistent entity representation
- Support for rich search features where applicable

Structured data should complement visible page content rather than replace it.

---

# Common Schema Types

Examples frequently used in business websites include:

| Schema Type | Purpose |
|-------------|---------|
| Organization | Business information |
| LocalBusiness | Physical business location |
| Person | Authors, founders, employees |
| Service | Service descriptions |
| Product | Products |
| Article | Blog posts and documentation |
| FAQPage | Frequently asked questions |
| BreadcrumbList | Navigation hierarchy |
| WebSite | Website information |
| ContactPoint | Contact details |

---

# Organization Example

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vista by Lara",
  "url": "https://www.vistabylara.com",
  "logo": "https://www.vistabylara.com/logo.png",
  "email": "solution@vistabylara.com"
}
```

---

# Service Example

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Discovery Framework",
  "provider": {
    "@type": "Organization",
    "name": "Vista by Lara"
  }
}
```

---

# FAQ Example

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI Discovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Discovery refers to designing websites that are easier for AI systems and search technologies to understand through structured, machine-readable information."
      }
    }
  ]
}
```

---

# Best Practices

- Use valid Schema.org vocabulary.
- Match structured data to visible page content.
- Keep information accurate and up to date.
- Avoid marking up content that does not exist on the page.
- Test structured data with appropriate validation tools.

---

# JSON-LD

JSON-LD is the preferred format for implementing Schema.org on most modern websites.

Advantages include:

- Easier maintenance
- Separation from HTML markup
- Readability
- Compatibility with modern frameworks

---

# Schema and Entity Relationships

Structured data becomes more useful when it reflects real relationships between entities.

Example:

Organization

↓

Service

↓

Article

↓

Author

↓

FAQ

↓

Contact Point

This consistency helps maintain a coherent information model.

---

# Validation

After implementation, validate structured data to confirm that:

- Required properties are present.
- JSON syntax is correct.
- Schema types are appropriate.
- URLs are valid.
- Entities are represented consistently.

---

# Summary

Schema.org provides a standardized vocabulary for describing entities on the web.

Within the AI Discovery Framework, it serves as one element of a broader semantic architecture that combines structured data, entity relationships, machine-readable resources, and clear information organization.
