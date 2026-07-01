# llms.txt Implementation Guide

## Overview

The `llms.txt` file is a proposed convention for publishing machine-readable information about a website for large language models (LLMs) and AI assistants.

It is conceptually similar to other well-known web resources, such as `robots.txt` or `sitemap.xml`, in that it provides structured information intended for automated systems.

As with any emerging convention, support varies across AI systems, and there is no guarantee that a particular model will use or interpret the file.

---

# Purpose

A well-maintained `llms.txt` file can help document:

- Website identity
- Primary organization
- Core services
- Documentation
- APIs
- Contact information
- Important resources

It should be viewed as complementary documentation rather than a replacement for structured data or other web standards.

---

# Example Structure

```
User-Agent: *

Organization: Vista by Lara

Website: https://www.vistabylara.com

Documentation:
https://www.vistabylara.com/docs

Blog:
https://www.vistabylara.com/blog

Newsroom:
https://vistanewswire.com

Contact:
solution@vistabylara.com
```

---

# Recommended Sections

A complete file may include:

- Organization
- Website
- Documentation
- Services
- APIs
- Blog
- Contact
- Support
- Newsroom

Keep the content concise, accurate, and up to date.

---

# Relationship to Other Standards

`llms.txt` does not replace:

- robots.txt
- sitemap.xml
- Schema.org
- JSON-LD
- OpenAPI

Instead, it can complement these resources as part of a broader AI-ready documentation strategy.

---

# Example Website Architecture

```
robots.txt
        │
        ▼

sitemap.xml
        │
        ▼

Schema.org
        │
        ▼

JSON-LD
        │
        ▼

llms.txt
        │
        ▼

Documentation
        │
        ▼

REST APIs
```

Each component contributes different information and serves a different purpose.

---

# Best Practices

- Keep the file human-readable.
- Avoid promotional language.
- Link only to stable resources.
- Update the file when website structure changes.
- Use HTTPS URLs.
- Maintain consistency with your structured data.

---

# Common Mistakes

Avoid:

- Keyword stuffing
- Unsupported claims
- Outdated links
- Duplicate information
- Excessive detail

The goal is clarity rather than volume.

---

# Validation Checklist

Before publishing:

- Organization name is correct
- URLs are valid
- Contact information is current
- Documentation links work
- HTTPS is used throughout
- File is publicly accessible

---

# Summary

The `llms.txt` file is an emerging documentation convention intended to make key website information easier to publish in a simple, machine-readable format.

It should be used alongside established web standards such as structured data, semantic HTML, XML sitemaps, and clear information architecture.

As adoption evolves, maintaining accurate and well-organized documentation remains a sound technical practice regardless of how individual AI systems choose to process it.
