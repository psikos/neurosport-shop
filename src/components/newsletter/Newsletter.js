import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./newsletter.css"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")
  const [msg, setMsg] = useState("")


  const _handleSubmit = async (e, email) => {
    e.preventDefault()
    const { result, msg } = await addToMailchimp(email)
    setResult(result)
    if (result === 'error') {
      setMsg(msg)
    }
  }

  return (
    <div className="newsletter-wrapper">
      <h3 className="newsletter-title">Chcesz wiedzieć więcej?</h3>
      <form
        onSubmit={e => _handleSubmit(e, email)}
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="newsletter-form"
        target="_blank"
        noValidate
      >
        <div className="newsletter-form-content">
          <div className="form__group">
            <input
              type="email"
              onChange={e => {
                setEmail(e.target.value)
                if (e.target.value === "") {
                  setResult("")
                  setMsg("")
                }
              }}
              value={email}
              name="EMAIL"
              className="email form__field"
              id="mce-EMAIL"
              placeholder="Wprowadź adres email"
              required
            />
            <label className="form__label" htmlFor="mce-EMAIL">
              Wprowadź swój adres email
            </label>
            <p
              className={
                result === "error" && email
                  ? "newsletter-error visible"
                  : "newsletter-error"
              }
            >
              {msg}
            </p>
            <p
              className={
                email
                  ? "newsletter-private-policy active"
                  : "newsletter-private-policy"
              }
            >
              Wprowadzenie adresu email jest wyrażeniem zgody na otrzymywanie
              informacji o nowościach na stronie oraz zgodą na przetwarzanie
              danych osobowych do tych celów niezbędnych - zgodnie z polityką
              prywatności na stronie www.neurosport.pl
            </p>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_c3e378d5e39709b979d4486a3_f95d8e5347"
                tabIndex="-1"
                value=""
                readOnly
              />
            </div>
          </div>
          <div>
            <div className="newsletter-button-wrapper">
              <input
                type="submit"
                value="CHCĘ"
                readOnly
                name="subscribe"
                id="mc-embedded-subscribe"
                className="newsletter-button"
              />
              <span
                className={
                  result === "success"
                    ? "newsletter-thanks visible"
                    : "newsletter-thanks"
                }
              >
                Będziesz na bieżąco!
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
