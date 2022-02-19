import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Container from "../components/Container"
import BlogPostRenderer from "../components/blogPostRenderer/BlogPostRenderer"
import BlogPostHeader from "../components/blogPostHeader/BlogPostHeader"
import BlogPostFooter from "../components/blogPostFooter/BlogPostFooter"

import { getBlogPostComments, addBlogPostComment, addFirstComment } from "../utils/blogPosts"
import CommentsModule from "../components/commentsModule/CommentsModule"

export const query = graphql`
  query ($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      author {
        name
        image {
          gatsbyImageData
        }
      }
      heroImage {
        id
        fluid {
          src
        }
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
      sources {
        sources {
          label
          link
          linkLabel
        }
      }
    }
  }
`

const BlogPostTemplate = ({ data: { post } }) => {
  const [comments, setComments] = useState([])

  const slug_raw = post.slug
  const slug = `/blog/${slug_raw}`

  useEffect(() => {
    getBlogPostComments(slug_raw, setComments)
  }, [slug_raw])

  const handleCommentAdd = comment => {
    console.log();
    const isCommented = comments.length > 0 ? true : false

    isCommented ? addBlogPostComment(comment) : addFirstComment(comment)
    setComments([comment.comments[0], ...comments])
  }

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

  let sources = []
  post.sources && (sources = post.sources.sources)

  const output = renderRichText(post.bodyRichText, options)

  const url = `http://neurosport.pl/blog/${post.slug}`

  return (
    <Layout
      title={post.title}
      description={post.description.description}
      image={post.heroImage.fluid.src}
    >
      <Container>
        <BlogPostHeader title={post.title} author={post.author} />

        <BlogPostRenderer output={output} />
        <BlogPostFooter url={url} sources={sources} />
        <CommentsModule
          comments={comments}
          handleCommentAdd={handleCommentAdd}
          slug={slug}
          slug_raw={slug_raw}
        />
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate
