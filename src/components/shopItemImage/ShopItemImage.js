import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./shopItemImage.css"

export default function ShopItemImage({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <div className="shop-item-image-wrapper">
      <div className="shop-item-image-wrapper">
        <GatsbyImage
          image={getImage(images[selectedImageIndex].gatsbyImageData)}
          alt={"description"}
        />
      </div>
      <ul className="shop-item-image-list">
        {images.map((image, index) => {
          if (index !== selectedImageIndex) {
            return (
              <li onClick={e => setSelectedImageIndex(index)}>
                <GatsbyImage
                  image={getImage(image.gatsbyImageData)}
                  alt={"description"}
                />
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
