import { Link } from "gatsby"
import React from "react"
import Logo from "../logo/Logo"

import "./footer.css"

//import blog from '../../pages/blog'

export default function Footer() {
  const footer_elements = [
    {
      label: "about",
      link: "/about",
    },
    {
      label: "Sklep",
      link: "/shop",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Program partnerski",
      link: "/partner-program",
    },

    {
      label: "FAQ",
      link: "/faq",
    },
    {
      label: "Kontakt",
      link: "/contact",
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-menu-wrapper">
        <ul className="footer-menu">
          {footer_elements.map(elem => (
            <li className="footer-item" key={elem.label}>
              <Link to={elem.link} activeClassName="active">
                {elem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="copyrights">
        <Logo size={"16px"} color={"grey"} />

        <div className="footer-date">© {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
