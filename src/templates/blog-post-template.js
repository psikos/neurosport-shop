import React from "react"
import { graphql } from "gatsby"

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Container from "../components/Container"
import BlogPostRenderer from "../components/blogPostRenderer/BlogPostRenderer"
import BlogPostHeader from "../components/blogPostHeader/BlogPostHeader"

export const query = graphql`
  query ($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      heroImage {
        id
      }
      bodyRichText {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            title
            description
            contentful_id
            gatsbyImageData
          }
        }
      }
    }
  }
`

const BlogPostTemplate = ({ data: { post } }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        )
      },
    },
  }

  const output = renderRichText(post.bodyRichText, options)

  return (
    <Layout title={post.title}>
      <Container>
        <BlogPostHeader title={post.title} />

        <BlogPostRenderer output={output} />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate
