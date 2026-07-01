export default function FaqSchema() {

  const schema = {

    "@context":"https://schema.org",

    "@type":"FAQPage",

    mainEntity:[

      {

        "@type":"Question",

        name:"What is AI Discovery?",

        acceptedAnswer:{

          "@type":"Answer",

          text:"AI Discovery refers to improving the technical clarity and machine readability of website information."

        }

      }

    ]

  }

  return (

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>

  )

}
