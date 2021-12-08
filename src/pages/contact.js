import React from "react"
import ContactForm from "../components/contactForm/ContactForm"
import ContactInfo from "../components/contactInfo/ContactInfo"
import Container from "../components/Container"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout title="Kontakt" description="Napisz do nas!">
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </Layout>
  )
}
