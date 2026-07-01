/**
 * Service Schema
 * AI Discovery Framework
 * Generic implementation example
 */

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id": "https://www.example.com/services/ai-discovery#service",

  name: "AI Discovery Framework",

  description:
    "Example implementation of a Service schema using Schema.org and JSON-LD.",

  serviceType: "AI Discovery",

  provider: {
    "@type": "Organization",

    "@id": "https://www.example.com/#organization",

    name: "Example Company",

    url: "https://www.example.com"
  },

  areaServed: {
    "@type": "Country",

    name: "United Arab Emirates"
  },

  audience: {
    "@type": "Audience",

    audienceType: "Businesses"
  },

  offers: {
    "@type": "Offer",

    availability: "https://schema.org/InStock"
  }
}
