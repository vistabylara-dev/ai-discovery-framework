import OrganizationSchema from "../components/OrganizationSchema"

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vistabylara.com"),
  title: "AI Discovery Framework | Vista by Lara",
  description:
    "The AI Discovery Framework by Vista by Lara explains practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
  keywords: ["AI Discovery", "technical SEO", "structured data", "GEO", "AEO"],
  authors: [{ name: "Lara Farbactian" }],
  creator: "Vista by Lara",
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
  twitter: {
    card: "summary_large_image",
    title: "AI Discovery Framework | Vista by Lara",
    description:
      "Practical methods for AI-readable websites, structured data, semantic architecture, and technical SEO.",
    images: ["/logo.png"],
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

        <OrganizationSchema />

        {children}

      </body>
    </html>
  )
}
