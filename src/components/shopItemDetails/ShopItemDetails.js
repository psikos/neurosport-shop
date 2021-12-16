import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import TableOfContents from "../tableOfContents/TableOfContents"


export default function ShopItemDetails({
  tableOfContents,
  longDescription,
  details,
}) {
  const tableOfContentOutput = renderRichText(tableOfContents)

  return <TableOfContents tableOfContents={tableOfContentOutput} />
}
