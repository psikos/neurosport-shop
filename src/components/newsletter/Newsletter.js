import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./newsletter.css"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const _handleSubmit = async (e, email) => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    // I recommend setting `result` to React state
    // but you can do whatever you want
    console.log(email + " " + result)
  }

  return (
    <div className="newsletter-wrapper">
      <form
        onSubmit={e => _handleSubmit(e, email)}
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="newsletter-form"
        target="_blank"
        novalidate
      >
        <div className="newsletter-form-content">
          <div className="form__group">
            
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              name="EMAIL"
              className="email form__field"
              id="mce-EMAIL"
              placeholder="Wprowadź adres email"
              required
            />
            <label className="form__label" for="mce-EMAIL">Zapisz się do newslettera!</label>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_c3e378d5e39709b979d4486a3_f95d8e5347"
                tabindex="-1"
                value=""
              />
            </div>
          </div>
          <div>
            <div className="newsletter-button-wrapper">
              <input
                type="submit"
                value="Zapisz mnie!"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="newsletter-button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
