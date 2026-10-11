import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Discovery Framework Example",
  description:
    "Example metadata for a site documenting AI-readable websites, structured data, semantic architecture, and technical SEO.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI Discovery Framework Example",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  },
}

export default function HomePage() {
  return (
    <main>
      <h1>AI Discovery Framework Example</h1>
      <p>
        Practical methods for AI-readable websites, structured data, semantic
        architecture, and technical SEO.
      </p>
    </main>
  )
}
