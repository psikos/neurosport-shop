import React from "react"

import "./shopItemPreview.css"

export default function ShopItemPreview() {
  return (
    <div className="shop-item-preview">
      <div>
        <div className="image-wrapper" style={{backgroundColor: 'goldenrod'}}>Image will be here!</div>
        <h2>Weganin Wiedzieć Winien</h2>
        <p className='shop-item-preview-description'>Kompendium wiedzy roślinożercy</p>
      </div>

      <div className="shop-item-preview-buttons">
        <a
          href="http://sandbox.easycart.pl/checkout/neurosport/test"
          target="_blank"
          className="buy-now"
        >
          Kup teraz!
        </a>
      </div>
    </div>
  )
}
