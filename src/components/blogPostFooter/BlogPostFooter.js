import React from "react"
import ShareButtons from "../shareButtons/ShareButtons"
import BlogPostSources from "../blogPostSources/BlogPostSources"
import "./blogPostFooter.css"

export default function BlogPostFooter({ url, sources }) {
  return (
    <footer className="blog-post-footer">
      <h4>Źródła:</h4>
      <BlogPostSources sources={sources} />
      <ShareButtons url={url} />
    </footer>
  )
}
