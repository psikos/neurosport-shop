import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/Container"

import ShopItemWrapper from "../components/shopItemWrapper/ShopItemWrapper"

export const query = graphql`
  query ($slug: String!) {
    item: contentfulShopItem(slug: { eq: $slug }) {
      id
      author {
        id
        image {
          gatsbyImageData
        }
        name
      }
      slug
      paymentLink
      name
      images {
        gatsbyImageData
        fluid {
          src
        }
      }
      description
      category
      basePrice
      benefitsOfReading
      priceOptionsJson {
        priceOptions {
          price
          option
          payment_link
        }
      }
      longDescription {
        raw
      }
      tableOfContents {
        raw
      }
      detailsJson {
        fieldsUtils {
          label
          value
        }
      }
    }
  }
`

const ShopItemTemplate = ({ data: { item } }) => {
  return (
    <Layout
      title={item.name}
      description={item.description}
      image={item.images[0].fluid.src}
    >
      <Container>
        <ShopItemWrapper item={item} />
      </Container>
    </Layout>
  )
}

export default ShopItemTemplate
