import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/Container"
import BlogList from "../components/blogList/BlogList"

export default function blog({ data }) {
  return (
    <Layout title={"Blog"} description={"Codzienna porcja wiedzy"}>
      <Container>
        <BlogList posts={data.posts.nodes} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    posts: allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
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
          gatsbyImageData
          fluid(maxWidth: 500, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          title
          file {
            url
          }
        }
        createdAt(difference: "days")
      }
    }
  }
`
