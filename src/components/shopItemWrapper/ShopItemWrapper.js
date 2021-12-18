import React from "react"
import ShopItemDescription from "../shopItemDescription/ShopItemDescription"
import ShopItemImage from "../shopItemImage/ShopItemImage"

import './shopItemWrapper.css'

export default function ShopItemWrapper({ item }) {
  return (
    <div className="shop-item-wrapper">
      <ShopItemImage images={item.images} />
      <ShopItemDescription item={item} />
    </div>
  )
}
