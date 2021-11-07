import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "./recent.css"

export default function Recent() {
  return (
    <div className="content-wrapper">
      <div className="recent-image-wrapper">
        <StaticImage
          src="..\..\images\recent_w2000.jpg"
          alt="A Gatsby astronaut"
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
            <p className="banner-subtitle">Kompedium wiedzy roślinożercy</p>
          </div>

          <div className="banner-button-wrapper">
            <span>
              <a href="#"></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
