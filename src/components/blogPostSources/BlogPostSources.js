import React from "react"
import "./blogPostSources.css"

export default function BlogPostSources({ sources }) {
  return (
    <div>
      <h4>Źródła:</h4>
      <ul className="blog-post-sources-list">
        {sources.map(({ link, label, linkLabel }) => (
          <li key={link}>
            {label} <a href={link}>{linkLabel}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
