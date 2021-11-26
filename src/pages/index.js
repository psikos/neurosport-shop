import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

import Recent from "../components/recent/Recent"
import RecentArticles from "../components/recentArticles/RecentArticles"

const IndexPage = ({ data: { posts } }) => (
  <Layout title={"Home"}>
    <Recent />
    <RecentArticles posts={posts.nodes} />  
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    posts: allContentfulBlogPost(
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        author {
          image {
            gatsbyImageData
          }
          name
        }
        description {
          description
        }
        createdAt(difference: "days")
        slug
        title
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
`
