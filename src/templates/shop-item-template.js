import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/Container"

import ShopItemWrapper from "../components/shopItemWrapper/ShopItemWrapper"
import ShareButtons from "../components/shareButtons/ShareButtons"

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
          option_description
          option
          payment_link
          price
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
  const url = `http://neurosport.pl/shop/${item.slug}`

  return (
    <Layout
      title={item.name}
      description={item.description}
      image={item.images[0].fluid.src}
    >
      <Container>
        <Link className="go-back-link" to="/shop">
          Powrót
        </Link>

        <ShopItemWrapper item={item} />
        <ShareButtons url={url} />
      </Container>
    </Layout>
  )
}

export default ShopItemTemplate
