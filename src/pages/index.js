import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

import Recent from "../components/recent/Recent"
import RecentArticles from "../components/recentArticles/RecentArticles"
import Newsletter from "../components/newsletter/Newsletter"

const IndexPage = ({ data: { posts } }) => (
  <Layout
    title={"Wiedza, artykuły, ebooki, audiobooki, książki."}
    description={"Naukowa wiedza w przystępnej formie"}
    image={
      "https://raw.githubusercontent.com/psikos/neurosport-shop/main/src/images/recent_w2560.jpg"
    }
  >
    <Recent />
    <RecentArticles posts={posts.nodes} />
    <Newsletter />
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
          title
        }
      }
    }
  }
`
