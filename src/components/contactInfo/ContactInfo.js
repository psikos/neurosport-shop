import React from "react"

import "./contactInfo.css"

export default function ContactInfo() {
  const toClipboard = "kontakt.neurosport@gmail.com"

  return (
    <div className="contact-info-wrapper">
      <div className="brain-wheel-background"></div>
      <h3 className="contact-info-title">Napisz do nas korzystając z formluarza</h3>
      <p className="contact-info-header-subtitle">
        Lub skopiuj email klikając{" "}
        <span
          onClick={() => {
            navigator.clipboard.writeText(toClipboard)
          }}
          className="mail"
        >
          tutaj
        </span>
      </p>

      <h3 className="contact-info-title">Dane kontaktowe</h3>
      <p>
        Martyna Hursowicz <br />
        os. Stare Żegrze 177/1 <br />
        61-249 Poznań <br />
        NIP: 7822885577
      </p>
    </div>
  )
}
