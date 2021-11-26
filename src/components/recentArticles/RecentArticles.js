import { Link } from "gatsby"
import React from "react"
import ArticlePreview from "../articlePreview/ArticlePreview"
import Container from "../Container"
import "./recentArticles.css"
export default function RecentArticles({ posts }) {
  return (
    <section className="recent-articles">
      <Container>
        <h1 className="article-list-headline">Najnowsza dawka wiedzy</h1>
        <ul className="recent-articles-list">
          {posts.map(post => (
            <ArticlePreview post={post} />
          ))}
        </ul>
        <Link to="/blog" className="see-more">Więcej wiedzy...</Link>
      </Container>
    </section>
  )
}
