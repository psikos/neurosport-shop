import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { FiMail } from "react-icons/fi"

import "./contactForm.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xqknkagb")
  if (state.succeeded) {
    return (
      <div className="contact-form-thanks-wrapper">
        <h2 className="contact-form-thanks">Dziękujemy za wiadomość!</h2>
        <p className="contact-form-thanks-under">
          Wrócimy do Ciebie z odpowiedzią
        </p>
      </div>
    )
  }
  return (
    <div className="contact-form-wrapper">
      <h1 className="contact-form-header">
        <span>Skontaktuj się z nami <i><FiMail /></i></span> 
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="contact-input"
          id="email"
          type="email"
          name="email"
          placeholder="Twój email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Wiadomość</label>
        <textarea
          className="contact-input contact-form-message"
          id="message"
          name="message"
          placeholder="W czym możemy pomóc?"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="contact-form-button"
        >
          Wyślij!
        </button>
      </form>
    </div>
  )
}

export default ContactForm
