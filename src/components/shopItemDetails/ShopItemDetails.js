import React, { useState } from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { AiOutlineOrderedList } from "react-icons/ai"
import { BsFileText } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"

import TableOfContents from "../tableOfContents/TableOfContents"
import LongDescription from "../longDescription/LongDescription"
import Details from "../details/Details"

import "./shopItemDetails.css"

const details_items = [
  { label: "Spis treści", icon: <AiOutlineOrderedList /> },
  { label: "Opis", icon: <BsFileText /> },
  { label: "Szczegóły", icon: <CgMoreO /> },
]

export default function ShopItemDetails({
  tableOfContents,
  longDescription,
  details,
}) {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0)
  const tableOfContentOutput = renderRichText(tableOfContents)
  const longDescriptionOutput = renderRichText(longDescription)

  const renderSwitch = param => {
    switch (param) {
      case 0:
        return <TableOfContents tableOfContents={tableOfContentOutput} />
        break
      case 1:
        return <LongDescription longDescription={longDescriptionOutput} />
        break
      case 2:
        return <Details details={details} />
        break
    }
  }

  return (
    <>
      <ul className="details-menu-list">
        {details_items.map((item, index) => {
          return (
            <li
              className={selectedMenuItemIndex === index ? "active" : ""}
              onClick={e => setSelectedMenuItemIndex(index)}
            >
              <i>{item.icon}</i>
              <span>{item.label}</span>
            </li>
          )
        })}
      </ul>
      <div className="details-tab-renderer">
        {renderSwitch(selectedMenuItemIndex)}
      </div>
    </>
  )
}
