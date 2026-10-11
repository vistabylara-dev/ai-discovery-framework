import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "AI Discovery Framework Example",
  description:
    "Example metadata for a site documenting AI-readable websites, structured data, semantic architecture, and technical SEO.",
  keywords: ["AI Discovery", "technical SEO", "structured data", "GEO", "AEO"],
  openGraph: {
    type: "website",
    title: "AI Discovery Framework Example",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  },
  twitter: {
    card: "summary",
    title: "AI Discovery Framework Example",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
