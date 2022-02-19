import React from "react"
import { Link } from "gatsby"
import "./faqList.css"

export default function FaqList() {
  return (
    <div className="faq-list-wrapper">
      <ul>
        <li>
          <h2>Gdzie znajdę Politykę Prywatności?</h2>
          <p>
            Polityka Prywatności jest dostępna pod poniższym{" "}
            <Link className="underlined-link" to="/private-policy">
              linkiem
            </Link>.
          </p>
        </li>
        <li>
          <h2>Gdzie znajdę Regulamin sklepu?</h2>
          <p>
            Regulamin sklemu jest dostępny w tym{" "}
            <Link className="underlined-link" to="/terms-of-use">
              miejscu
            </Link>.
          </p>
        </li>
        <li>
          <h2>Jak otrzymam zakupiony produkt?</h2>
          <p>
            Produkty cyfrowe jak ebook czy audiobook dostępne w naszym{' '}
            <Link className="underlined-link" to="/shop">
              sklepie
            </Link>{" "}
            udostępniane są kupującemu zaraz po dokonaniu transakcji na podany w
            jej trakcie adres email.
          </p>
        </li>
      </ul>
    </div>
  )
}
