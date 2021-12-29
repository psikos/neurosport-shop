import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./author.css"
import Container from "../Container"
import { FiMail } from "react-icons/fi"

export default function Author({ author }) {
  return (
    <div className="author-wrapper">
      <Container>
        <div
          className="author"
         
        >
          <div className="author-image-wrapper">
            <div className="radius-holder">
              <GatsbyImage
                image={getImage(author.image.gatsbyImageData)}
                alt={author.name}
                className="image"
              />
            </div>
          </div>
          <div className="author-content-wrapper">
            <h4 className="author-h4">{author.title}</h4>
            <h3 className="author-name">{author.name}</h3>
            {author.email && (
              <div className="author-links">
                <span>
                  <i>
                    <FiMail />
                  </i>
                  {author.email}
                </span>
              </div>
            )}
            <p className="author-about">{author.shortBio.shortBio}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
