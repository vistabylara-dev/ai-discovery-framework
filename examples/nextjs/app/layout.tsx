import OrganizationSchema from "../components/OrganizationSchema"

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
