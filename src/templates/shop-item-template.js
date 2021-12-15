import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Container from "../components/Container"
import ShopItemDescription from "../components/shopItemDescription/ShopItemDescription"

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
      tableOfContents {
        raw
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
          <div className="shop-item-image-wrapper">
            <GatsbyImage
              image={getImage(item.images[0].gatsbyImageData)}
              alt={"description"}
            />
          </div>
          <ShopItemDescription item={item} />
        </div>
      </Container>
    </Layout>
  )
}

export default ShopItemTemplate
