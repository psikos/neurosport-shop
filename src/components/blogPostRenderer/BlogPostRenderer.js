import React from "react"


import "./blogPostRenderer.css"

const BlogPostRenderer = ({ output }) => {

  return (
    <div className="post-renderer-wrapper">
      <div className="post-renderer">{output}</div>
    </div>
  )
}

export default BlogPostRenderer
