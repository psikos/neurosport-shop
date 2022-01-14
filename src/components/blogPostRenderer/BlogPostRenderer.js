import React from "react"


import "./blogPostRenderer.css"

const BlogPostRenderer = ({ output }) => {

  return (
    <div className="post-renderer-wrapper">
      <article className="post-renderer">{output}</article>
    </div>
  )
}

export default BlogPostRenderer
