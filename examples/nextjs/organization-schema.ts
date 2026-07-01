/**
 * Organization Schema
 * AI Discovery Framework
 * Vista by Lara
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": "https://www.example.com/#organization",

  name: "Example Company",

  url: "https://www.example.com",

  logo: "https://www.example.com/logo.png",

  description:
    "Example organization implementing structured data using Schema.org.",

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "info@example.com"
  },

  sameAs: [],

  knowsAbout: [
    "Artificial Intelligence",
    "Structured Data",
    "Knowledge Graph",
    "Schema.org"
  ]
}
