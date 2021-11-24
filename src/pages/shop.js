import React from "react"
import Container from "../components/Container"
import Layout from "../components/layout"
import ShopItemPreview from "../components/shopItemPreview/ShopItemPreview"

export default function shop() {
  return (
    <Layout title={"Sklep"}>
      <Container>
        <ShopItemPreview />
      </Container>
    </Layout>
  )
}
