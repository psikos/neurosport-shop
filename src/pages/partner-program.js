
import React from "react"
import Container from "../components/Container"
import Layout from "../components/layout"
import PartnerProgramWrapper from "../components/partnerProgramWrapper/PartnerProgramWrapper"

export default function PartnerProgram() {
  return (
    <Layout title="Program partnerki" description="Zarabiaj promując wiedzę">
      <Container>
        <PartnerProgramWrapper />
      </Container>
    </Layout>
  )
}
