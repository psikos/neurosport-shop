import React from "react"
import ContactInfo from "../contactInfo/ContactInfo"
import ContactForm from "../contactForm/ContactForm"

import './contactWrapper.css'
export default function ContactWrapper() {
  return (
    <div className="contact-wrapper">
        
      <ContactForm />
      <ContactInfo />
    </div>
  )
}
