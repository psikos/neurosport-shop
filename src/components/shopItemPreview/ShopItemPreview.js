import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./shopItemPreview.css"
import { Link } from "gatsby"

export default function ShopItemPreview({ item }) {
  return (
    <div className="shop-item-preview">
      <Link className="shop-item-preview-link-wrapper" to="/shop/weganin-wiedziec-winien">
        <div>
          <div
            className="image-wrapper"
            style={{ backgroundColor: "green" }}
          >
            <GatsbyImage
              image={getImage(item.images[0].gatsbyImageData)}
              alt={item.images[0].title}
            />
          </div>
          <h2 className="shop-item-name">{item.name}</h2>
          <p className="shop-item-preview-description">{item.description}</p>
          <p className="shop-item-price">{item.basePrice} zł</p>
        </div>

        <div className="shop-item-preview-buttons">
          <Link className="see-more" to="/shop/weganin-wiedziec-winien">
            Zobacz więcej
          </Link>
          <a href={item.paymentLink} target="_blank" className="buy-now">
            Kup teraz!
          </a>
        </div>
      </Link>
    </div>
  )
}
