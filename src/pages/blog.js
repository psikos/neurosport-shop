import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/Container"
import BlogList from "../components/blogList/BlogList"

export default function blog({ data }) {

return (
  <Layout title={"Blog"}>
    <Container>
      <BlogList posts={data.posts.nodes} />
    </Container>
  </Layout>
)
}

export const query = graphql`
  {
    posts: allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
      nodes {
        description {
          description
        }
        title
        slug
        author {
          name
          image {
            gatsbyImageData
          }
        }
        heroImage {
          id
          fluid(maxWidth: 500, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          title
        }
        createdAt(difference: "days")
      }
    }
  }
`