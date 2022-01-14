import React from "react"
import ShareButtons from "../shareButtons/ShareButtons"
import BlogPostSources from "../blogPostSources/BlogPostSources"
import "./blogPostFooter.css"

export default function BlogPostFooter({ url, sources }) {

  return (
    <footer className="blog-post-footer">
      {((!sources && sources.length && sources[0].link) ||
        (!sources && sources.length && sources[0].label)) && (
        <BlogPostSources sources={sources} />
      )}

      <ShareButtons url={url} />
      
    </footer>
  )
}
