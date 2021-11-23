import React from 'react'
import { Link } from "gatsby"

import './blogPostHeader.css'

export default function BlogPostHeader({title}) {
    return (
        <header className="blog-post-header">
          <Link to="/blog">Powrót</Link>
          <h1>{title}</h1>
        </header>
    )
}
