import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"
import Layout from "../components/layout"
import ShopItemPreview from "../components/shopItemPreview/ShopItemPreview"

export default function shop({data: {shopItems}}) {
  return (
    <Layout title={"Sklep"} description="Wszystkie produkty NEUROSPORT">
      <Container>
        {shopItems.nodes.map(item=><ShopItemPreview item={item}/>)}
        
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
      paymentLink
      name
      images {
        gatsbyImageData
      }
    }
  }
}
`