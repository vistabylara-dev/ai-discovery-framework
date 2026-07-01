/**
 * AI Discovery Framework
 * Organization Schema Component
 *
 * Example implementation for Next.js
 */

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://www.example.com/#organization",

    name: "Example Company",

    url: "https://www.example.com",

    logo: "https://www.example.com/logo.png",

    description:
      "Example organization implementing AI Discovery Framework.",

    email: "info@example.com",

    telephone: "+971500000000",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Dubai",

      addressCountry: "AE"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
