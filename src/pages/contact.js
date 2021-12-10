import React from "react"
import ContactWrapper from "../components/contactWrapper/ContactWrapper"

import Container from "../components/Container"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout title="Kontakt" description="Napisz do nas!">
      {/* <Container> */}
        <ContactWrapper />
      {/* </Container> */}
    </Layout>
  )
}
