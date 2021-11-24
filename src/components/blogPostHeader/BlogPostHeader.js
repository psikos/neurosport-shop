import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./blogPostHeader.css"

export default function BlogPostHeader({ title, author }) {
  return (
    <header className="blog-post-header">
      <div>
        <Link to="/blog">Powrót</Link>
        <h1>{title}</h1>
      </div>

      <div className="blog-post-header-author">
        <GatsbyImage
          image={getImage(author.image.gatsbyImageData)}
          alt={author.name}
        />
        <Link to="/about">{author.name}</Link>
      </div>
    </header>
  )
}
