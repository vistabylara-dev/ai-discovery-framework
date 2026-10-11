import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Discovery Framework | Vista by Lara",
  description:
    "The AI Discovery Framework by Vista by Lara explains practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "AI Discovery Framework | Vista by Lara",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
    siteName: "Vista by Lara",
    images: [{ url: "/logo.png", alt: "Vista by Lara" }],
  },
}

export default function HomePage() {
  return (
    <main>
      <h1>AI Discovery Framework</h1>
      <p>
        Practical methods for AI-readable websites, structured data, semantic
        architecture, and technical SEO.
      </p>
    </main>
  )
}
