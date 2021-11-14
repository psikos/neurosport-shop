import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    post: contentfulBlogPost(slug: {eq: $slug}) {
        title
        slug
        heroImage {
          id
        }
        body {
          body
        }
      }
  }
`

const BlogPostTemplate = ({ data: {post} }) => {
  return (
    <Layout title={post.title}>
        <Link to='/blog'>Powrót</Link>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body.body}</p>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate
