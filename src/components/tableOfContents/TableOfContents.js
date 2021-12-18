import React from "react"
import "./tableOfContents.css"

export default function TableOfContents({ tableOfContents }) {
  return (
    <div id="shop-item-details" className="table-of-contents-wrapper">
      <div className="table-of-contents">{tableOfContents}</div>
    </div>
  )
}
