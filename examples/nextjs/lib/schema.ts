export function generateOrganization(name: string) {
  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name
  }
}
