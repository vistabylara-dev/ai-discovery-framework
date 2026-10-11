export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Example Company",
    url: "https://www.example.com",
    description: "Example organization implementing the AI Discovery Framework.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c")
      }}
    />
  )
}
