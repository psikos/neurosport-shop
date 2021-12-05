import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./shopItemPreview.css"

export default function ShopItemPreview({ item }) {
  return (
    <div className="shop-item-preview">
      <div>
        <div className="image-wrapper" style={{ backgroundColor: "goldenrod" }}>
          <GatsbyImage
            image={getImage(item.images[0].gatsbyImageData)}
            alt={item.images[0].title}
          />
        </div>
        <h2 className="shop-item-name">{item.name}</h2>
        <p className="shop-item-preview-description">{item.description}</p>
      </div>

      <div className="shop-item-preview-buttons">
        <a href={item.paymentLink} target="_blank" className="buy-now">
          Kup teraz!
        </a>
      </div>
    </div>
  )
}
