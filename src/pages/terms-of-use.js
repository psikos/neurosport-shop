import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TermsOfUseUtil from "../components/termsOfUse/TermsOfUse"

export default function TermsOfUse({ data: { termsOfUse } }) {
  return (
    <Layout title={"Regulamin"} description="Regulamin serwisu NEUROSPORT">
      <TermsOfUseUtil termsOfUse={termsOfUse} />
    </Layout>
  )
}

export const query = graphql`
  {
    termsOfUse: contentfulTermsOfUse {
      body {
        raw
      }
    }
  }
`
