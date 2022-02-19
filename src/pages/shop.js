import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"
import Layout from "../components/layout"
import ShopItemPreview from "../components/shopItemPreview/ShopItemPreview"

export default function shop({ data: { shopItems } }) {
  return (
    <Layout title={"Sklep"} description="Wszystkie produkty NEUROSPORT">
      <Container>
        <ul className="shop-item-list">
          {shopItems.nodes.map(item => (
            <li key={item.name}>
              <ShopItemPreview item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    shopItems: allContentfulShopItem {
      nodes {
        description
        slug
        basePrice
        paymentLink
        name
        category
        images {
          gatsbyImageData
        }
        priceOptionsJson {
          priceOptions {
            option_description
            option
            payment_link
            price
            old_price
          }
        }
      }
    }
  }
`
