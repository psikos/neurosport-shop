import React from 'react'

import { StaticImage } from "gatsby-plugin-image"

import './author.css'

export default function Author() {
    return (
        <div className="author">
        <div className="author-image-wrapper">
           
        <div className="radius-holder"> <StaticImage
            src="..\..\images\jake.png"
            alt="Jakub Wiącek"
            className="image"
            
          />
          </div>
         
        </div>
        <div className="author-content-wrapper">
          <h4>Autor</h4>
          <h3>Jakub Wiącek</h3>
          <p className="">
            Doktorant w Zakładzie Żywności i Żywienia na Akademii Wychowania
            Fizycznego w Poznaniu, neurobiolog, dietetyk, wykładowca, trener
            personalny, copywriter, autor setek artykułów o tematyce zdrowia,
            diety, suplementacji i treningu na największych portalach
            związanych z branżą fitness w Polsce.
          </p>
        </div>
      </div>
    )
}
