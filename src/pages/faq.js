import React from "react"
import FaqList from "../components/faqList/FaqList"
import Layout from "../components/layout"
import Container from "./../components/Container"

export default function Faq() {
  return (
    <Layout title="FAQ" description="Najczęściej zadawane pytania">
      <Container>
       <FaqList />
      </Container>
    </Layout>
  )
}
