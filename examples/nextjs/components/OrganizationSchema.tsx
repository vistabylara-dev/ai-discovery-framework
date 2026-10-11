import organizationSchema from "../../../public/schema/organization.json"

export default function OrganizationSchema() {
  const serializedSchema = JSON.stringify(organizationSchema).replace(/</g, "\\u003c")

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializedSchema
      }}
    />
  )
}
