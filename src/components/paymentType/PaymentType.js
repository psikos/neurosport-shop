import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./paymentType.css"

export default function PaymentType() {
  return (
    <div className="payment-type">
      <div className="payment-image">
        <StaticImage
          src="..\..\images\easycart-logo.png"
          // src="https://raw.githubusercontent.com/psikos/neurosport-shop/main/src/images/recent_w2560.jpg"
          alt="EasyCart logo"
          className="image"
        />
      </div>
      <p className="payment-type-description">
        Sprzedaż produktów odbywa się przez platformę Stripe, a sprzedający
        wykorzystuje w tym celu dodatkowo usługę easycart.pl, w ramach której
        realizowana jest płatność (strona zakupu). Użytkownik, podając dane na
        stronie zakupu, zgadza się na ich przekazanie do EasyCart oraz Stripe
        zgodnie z regulaminem i polityką prywatności, które to dokumenty są
        podlinkowane na stronie koszyka.
      </p>
    </div>
  )
}
