import React from "react"
import { Link } from "gatsby"
import "./faqList.css"

export default function FaqList() {
  return (
    <div className="faq-list-wrapper">
      <h2>Gdzie znajdę Politykę Prywatności?</h2>
      <p>
        Polityka Prywatności jest dostępna pod poniższym{" "}
        <Link className="underlined-link" to="/private-policy">linkiem</Link>
      </p>
    </div>
  )
}
