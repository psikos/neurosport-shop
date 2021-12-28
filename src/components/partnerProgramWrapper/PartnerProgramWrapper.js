import React from "react"
import { Link } from "gatsby"

import { FaRegHandshake } from "react-icons/fa"
import { IoSend } from "react-icons/io5"

import "./partnerProgramWrapper.css"

export default function PartnerProgramWrapper() {
  return (
    <div className="partner-program-wrapper">
      <h1>
        <i className="partner-program-wrapper-main-icon">
          <FaRegHandshake />
        </i>
        <span className="partner-program-wrapper-main-span">Współpraca</span>
        <Link className="partner-program-wrapper-link" to="/contact">
          <span>
            <i className="partner-program-wrapper-button-icon">
              <IoSend />
            </i>
            Przejdź do formularza kontaktowego
          </span>
        </Link>
      </h1>
      <h2>
        <div>
          Chcesz <span>zarabiać</span> szerząc wiedzę?
        </div>
      </h2>
      <h2>
        <div>
          Chcesz sprzedać <span>swojego</span> ebooka?
        </div>
      </h2>
      <div className="partner-program-wrapper-closing">
        Napisz kilka słów o sobie używając{" "}
        <Link to="/contact">formularza kontaktowego</Link>
      </div>
    </div>
  )
}
