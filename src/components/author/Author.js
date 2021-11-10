import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import "./author.css"

export default function Author() {
  return (
    <div
      className="author"
      onMouseOver={() => {
       const image = document.querySelector(".image");
       image.style.filter = "none";
       image.style.opacity = "100%";
      }}
    >
      <div className="author-image-wrapper">
        <div className="radius-holder">
          {" "}
          <StaticImage
            src="https://raw.githubusercontent.com/psikos/neurosport-shop/main/src/images/jake.png"
            // src="..\..\images\jake.png"
            alt="Jakub Wiącek"
            className="image"
          />
        </div>
      </div>
      <div className="author-content-wrapper">
        <h4 className="author-h4">Autor</h4>
        <h3 className="author-name">Jakub Wiącek</h3>
        <p className="author-about">
          Doktorant w Zakładzie Żywności i Żywienia na Akademii Wychowania
          Fizycznego w Poznaniu, neurobiolog, dietetyk, wykładowca, trener
          personalny, copywriter, autor setek artykułów o tematyce zdrowia,
          diety, suplementacji i treningu na największych portalach związanych z
          branżą fitness w Polsce.
        </p>
        <div className="author-links"></div>
      </div>
    </div>
  )
}
