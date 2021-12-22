import { Link } from "gatsby"
import React from "react"
import Container from "../components/Container"
import Layout from "../components/layout"

export default function PartnerProgram() {
  return (
    <Layout title="Program partnerki" description="Zarabiaj promując wiedzę">
      <Container>
        <h1>Współpraca</h1>
        <p>Chcesz zarabiać szerząc wiedzę?</p>
        <p>Chcesz sprzedać swojego ebooka?</p>
        <p>
          Napisz do nas korzystając z{" "}
          <Link to="/contact">formularza kontaktowego</Link>
        </p>
      </Container>
    </Layout>
  )
}
