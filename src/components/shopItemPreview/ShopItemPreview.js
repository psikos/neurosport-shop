import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./shopItemPreview.css"
import { Link } from "gatsby"

export default function ShopItemPreview({ item }) {
  console.log(item.category)
  return (
    <div className="shop-item-preview">
      <Link
        className="shop-item-preview-link-wrapper"
        to="/shop/weganin-wiedziec-winien"
      >
        <div>
          <div className="image-wrapper" style={{ backgroundColor: "green" }}>
            <GatsbyImage
              image={getImage(item.images[0].gatsbyImageData)}
              //alt={item.images[0].title}
              alt=""
            />
            <div className="image-wrapper-label-holder">
              <ul>
               
                {item.category.map(cat => (
                  <li key={`${cat}-label`}>
                    <span className={cat}>{ cat }</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="shop-item-name">{item.name}</h2>
          <p className="shop-item-preview-description">{item.description}</p>
          <p className="shop-item-price">{item.basePrice} zł</p>
        </div>
      </Link>
      <div className="shop-item-preview-buttons">
        <Link className="see-more" to="/shop/weganin-wiedziec-winien">
          Zobacz więcej
        </Link>
        <a
          href={item.priceOptionsJson.priceOptions[0].payment_link}
          target="_blank"
          rel="noreferrer"
          className="buy-now"
          role="button"
        >
          Kup teraz!
        </a>
      </div>
    </div>
  )
}
