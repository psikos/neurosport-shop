import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Container from "../components/Container"

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
    }
  }
`

const ShopItemTemplate = ({ data: { item } }) => {
  return (
    <Layout title={"test"} description={"test"}>
      <Container>
        <div className="shop-item-wrapper">
          <div className="shop-item-image-wrapper">
            <GatsbyImage
              image={getImage(item.images[0].gatsbyImageData)}
              alt={"description"}
            />
          </div>
          <div className="shop-item-description-wrapper">
            <h1>{item.name}</h1>
            <div>
              {item.category.map(category => (
                <p>{category}</p>
              ))}
            </div>
            <div>
              {item.author.map(author => (
                <p>{author.name}</p>
              ))}
            </div>
            <div>
              <div>PLN {item.basePrice}</div>
              <div>select opcji zakupu - ebook / ebook+audiobook</div>
            </div>
            <div className="details-wrapper">
              <div>{item.description}</div>
              <div>additional info</div>
            </div>
          </div>
          <a href={item.paymentLink}>Kup ebook</a>
        </div>
      </Container>
    </Layout>
  )
}

export default ShopItemTemplate
