import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Container from "../Container"

import './termsOfUse.css'

export default function TermsOfUse({ termsOfUse }) {
  return (
    <Container>
      <div className="private-policy-wrapper">
        <h1>
          Regulamin sklepu internetowego <span>neurosport.pl</span>
        </h1>
        <div className="terms-of-use-renderer">{renderRichText(termsOfUse.body)}</div>
      </div>
    </Container>
  )
}
