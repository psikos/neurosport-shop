import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "./recent.css"
import { Link } from "gatsby"

export default function Recent() {
  return (
    <div className="content-wrapper">
      <div className="recent-image-wrapper">
        <StaticImage
          // src="..\..\images\recent_w2560.jpg"
          src="https://raw.githubusercontent.com/psikos/neurosport-shop/main/src/images/recent_w2560.jpg"
          alt="Weganin Wiedzień Winien"
          className="image"
        />
      </div>

      <div className="recent-content">
        <div className="recent-content-wrapper">
          <p className="banner-p">
            <span className="banner-span">W</span>eganin
          </p>
          <p className="banner-p">
            <span className="banner-span">W</span>iedzieć
          </p>
          <p className="banner-p">
            <span className="banner-span">W</span>inien
          </p>
          <div className="baner-subtitle-wrapper">
            <p className="banner-subtitle">Kompendium wiedzy roślinożercy</p>
          </div>

          <div className="banner-button-wrapper">
            <span>
              <Link to='/shop/weganin-wiedziec-winien' />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
