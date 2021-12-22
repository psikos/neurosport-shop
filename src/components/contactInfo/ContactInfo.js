import React, { useState } from "react"

import { AiFillPhone } from "react-icons/ai"
import { FiCopy } from "react-icons/fi"

import "./contactInfo.css"

export default function ContactInfo() {
  const [showTooltip, setShowTooltip] = useState(false)

  const toClipboard = "kontakt.neurosport@gmail.com"

  const tooltip = () => {
    setShowTooltip(true)
    const timeout = setTimeout(() => setShowTooltip(false), 2500)
  }

  return (
    <div className="contact-info-wrapper">
      <div className="brain-wheel-background"></div>
      <h3 className="contact-info-title">
        Napisz do nas korzystając z formluarza
      </h3>
      <p className="contact-info-header-subtitle">
        Lub skopiuj email klikając{" "}
        <span
          onClick={() => {
            navigator.clipboard.writeText(toClipboard)
            tooltip()
          }}
          onKeyDown={() => {
            navigator.clipboard.writeText(toClipboard)
            tooltip()
          }}
          role="button"
          className="mail"
        >
          tutaj{" "}
          <i>
            <FiCopy />
          </i>
        </span>
        <div className={showTooltip ? "tooltip tooltip-visible" : "tooltip"}>
          Adres email skopiowany do schowka!
        </div>
      </p>

      <h3 className="contact-info-title">Dane kontaktowe</h3>
      <p>
        Martyna Hursowicz <br />
        os. Stare Żegrze 177/1 <br />
        61-249 Poznań <br />
        NIP: 7822885577
      </p>
      <h3 className="contact-info-title">
        <span>
          Kontakt telefoniczny{" "}
          <i>
            <AiFillPhone />
          </i>
        </span>
      </h3>
      <p className="contact-info-phones">
        <a href="tel:691739214">691 739 214</a> <br />
        <a href="tel:697881422">697 881 422</a>
      </p>
    </div>
  )
}
