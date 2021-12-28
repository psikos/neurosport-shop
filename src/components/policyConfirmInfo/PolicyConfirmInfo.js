import React from "react"
import { Link } from "gatsby"

import "./policyConfirmInfo.css"

export default function PolicyConfirmInfo() {
  return (
    <div className="policy-confirm-info">
      Klikając w powyższy przycisk akceptujesz warunki zawarte w{" "}
      <Link to="/terms-of-use">regulaminie</Link> oraz zgadzasz się na
      przetwarzanie danych osobowych zgodnie z{" "}
      <Link to="/private-policy">polityką prywatności</Link> portalu{" "}
      <Link to="/">neurosport.pl</Link>
    </div>
  )
}
