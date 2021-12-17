import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Container from "../components/Container"
import ShopItemDescription from "../components/shopItemDescription/ShopItemDescription"
import ShopItemImage from "../components/shopItemImage/ShopItemImage"

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
      //   image={post.heroImage.fluid.src}
    >
      <Container>
        <div className="shop-item-wrapper">
          <ShopItemImage images={item.images} />
          <ShopItemDescription item={item} />
        </div>
      </Container>
    </Layout>
  )
}

export default ShopItemTemplate
