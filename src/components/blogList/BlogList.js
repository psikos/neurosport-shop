import React from "react"
import ArticlePreview from "../articlePreview/ArticlePreview"
import './blogList.css'

export default function BlogList({ posts }) {
  return (
    <div className="wrapper">
      <h1 className="article-list-headline">Najnowsze</h1>
      <ul className="article-list">
        {posts.map(post => {
          return <ArticlePreview post={post} />
        })}
      </ul>
    </div>
  )
}
