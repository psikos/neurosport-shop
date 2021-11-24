import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./articlePreview.css"

export default function ArticlePreview({ post }) {
  return (
    <li className="article-preview">
      <div className="article-preview-wrapper">
        <Link to={`/blog/${post.slug}`} className="article-link">
          <Img
            fluid={post.heroImage.fluid}
            key={post.heroImage.fluid.src}
            alt={post.heroImage.title}
          />
          <div className="article-link-text-wrapper">
            <div className="article-link-text">
              <div>
                <h2>{post.title}</h2>
                <p className="article-link-description">
                  {post.description.description}
                </p>
              </div>
              <div className="article-info">
                <GatsbyImage
                  image={getImage(post.author.image.gatsbyImageData)}
                  alt={post.author.name}
                />
                <h3 className="article-link-author-name">{post.author.name}</h3>
                <span className="article-link-created-at">{`Dodano ${post.createdAt} dni temu`}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  )
}
