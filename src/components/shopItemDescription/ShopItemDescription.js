import React, { useState } from "react"
import { AiFillAudio } from "react-icons/ai"
import { FiChevronLeft, FiChevronDown } from "react-icons/fi"
import { GiCheckMark } from "react-icons/gi"
import { MdTabletMac } from "react-icons/md"

import ShopItemDetails from "../shopItemDetails/ShopItemDetails"

import "./shopItemDescription.css"

export default function ShopItemDescription({ item }) {
  const [optionIndex, setOptionIndex] = useState(0)
  const initialPricingState = item.priceOptionsJson.priceOptions[optionIndex]
  const [price, setPrice] = useState(initialPricingState.price)
  const [option, setOption] = useState(initialPricingState.option)
  const [paymentLink, setPaymentLink] = useState(
    item.priceOptionsJson.priceOptions[0].payment_link
  )
  const [isSelecOpen, setIsSelecOpen] = useState(false)
  //   const [details, setDetails] = useState(initialState)

  const handleChangePricing = (e, i) => {
    if (!i && i !== 0) {
      i = e.target.value
    }

    setOptionIndex(i)
    setPrice(item.priceOptionsJson.priceOptions[i].price)
    setOption(item.priceOptionsJson.priceOptions[i].option)
    setPaymentLink(item.priceOptionsJson.priceOptions[i].payment_link)
    console.log(item.priceOptionsJson.priceOptions[i].payment_link)
  }

  return (
    <>
      <div className="shop-item-description-wrapper">
        <div className="shop-item-description-author-wrapper">
          <div className="shop-item-description-author-label">
            {item.author.length > 1 ? "Autorzy:" : "Autor:"}
          </div>
          {item.author.map(author => (
            <p
              className="shop-item-description-author-name"
              title={`autor ${author.name}`}
            >
              {author.name}
            </p>
          ))}
        </div>
        <h1 className="shop-item-description-title">{item.name}</h1>
        <h2 className="shop-item-description-subtitle">{item.description}</h2>
        <div className="shop-item-category-wrapper">
          {item.category.map((category, index) => {
            let shop_item_category = "shop-item-category-item"
            if (
              (category === "ebook" && option.includes("Ebook")) ||
              (category === "audiobook" && option.includes("Audiobook"))
            ) {
              shop_item_category += " active-category"
            }

            return (
              <p
                className={shop_item_category}
                onClick={e => {
                  handleChangePricing(e, index)
                }}
              >
                <span>
                  {category}
                  <i>
                    {category === "ebook" && <MdTabletMac />}
                    {category === "audiobook" && <AiFillAudio />}
                  </i>
                </span>
              </p>
            )
          })}
        </div>

        <div className="shop-item-price-wrapper">
          <div className="shop-item-price">
            <span>PLN</span> {price}
          </div>
          <div
            className="shop-item-description-select-wrapper"
            onClick={e => setIsSelecOpen(!isSelecOpen)}
            onBlur={e => setIsSelecOpen(false)}
          >
            <div className="select-icon">
              {isSelecOpen ? <FiChevronDown /> : <FiChevronLeft />}
            </div>
            <select
              className="shop-item-description-select"
              id=""
              value={optionIndex}
              onChange={handleChangePricing}
            >
              {item.priceOptionsJson.priceOptions.map((option, index) => {
                return (
                  <option
                    className="shop-item-description-select-option"
                    value={index}
                  >
                    {option.option} | PLN {option.price}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="shop-items-description-benefits-wrapper">
          <h3>Między innymi dowiesz się jak:</h3>
          <ul className="shop-item-description-benefits-list">
            {item.benefitsOfReading.map(benefit => {
              return (
                <li key={benefit}>
                  <GiCheckMark />
                  {benefit}
                </li>
              )
            })}
          </ul>
        </div>
        <ShopItemDetails
          tableOfContents={item.tableOfContents}
          longDescription={item.longDescription}
          details={item.detailsJson.fieldsUtils}
        />
        <a className="shop-item-payment-button" href={paymentLink}>
        Kupuję za {price} zł
      </a>
      </div>
      
    </>
  )
}
