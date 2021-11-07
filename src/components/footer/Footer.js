import React from "react"
import Logo from "../logo/Logo"

import "./footer.css"

export default function Footer() {
  const footer_elements = [
    {
      label: "O nas",
    },
    {
      label: "Program partnerski",
    },
    {
      label: "Blog",
    },
    {
      label: "FAQ",
    },
    {
      label: "Kontakt",
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {footer_elements.map(elem => (
          <div className="footer-item">{elem.label}</div>
        ))}
      </div>
      <div className="copyrights">
          <Logo size={5}/>
          NEUROSPORT © {new Date().getFullYear()}</div>
    </footer>
  )
}
