import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./shopItemImage.css"

export default function ShopItemImage({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="shop-item-image">
      <div className="shop-item-image-wrapper">
        <GatsbyImage
          image={getImage(images[selectedImageIndex].gatsbyImageData)}
          alt={"description"}
        />
      </div>
      <ul className="shop-item-image-list">
        {images.map((image, index) => {
          return (
            <li
              className={selectedImageIndex === index ? "chosen-pic" : ""}
              onClick={e => setSelectedImageIndex(index)}
              onKeyDown={e => setSelectedImageIndex(index)}
              role="button"
            >
              <GatsbyImage
                image={getImage(image.gatsbyImageData)}
                alt={"description"}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
