import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./author.css"
import Container from "../Container"

export default function Author({ author }) {
  return (
    <Container>
      <div
        className="author"
        onMouseOver={() => {
          const image = document.querySelector(".image")
          image.style.filter = "none"
          image.style.opacity = "100%"
        }}
        onFocus={() => {
          const image = document.querySelector(".image")
          image.style.filter = "none"
          image.style.opacity = "100%"
        }}
        role="button"
      >
        <div className="author-image-wrapper">
          <div className="radius-holder">
            {" "}
            <GatsbyImage
              image={getImage(author.image.gatsbyImageData)}
              alt={author.name}
              className="image"
            />
          </div>
        </div>
        <div className="author-content-wrapper">
          <h4 className="author-h4">Autor</h4>
          <h3 className="author-name">{author.name}</h3>
          <p className="author-about">{author.shortBio.shortBio}</p>
          <div className="author-links"></div>
        </div>
      </div>
    </Container>
  )
}
