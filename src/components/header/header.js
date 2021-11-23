import * as React from "react"

import Navigation from "../navigation/Navigation"
import Logo from "../logo/Logo"

import "./header.css"

const Header = () => (
  <header className="header">
    <div className="header-wrapper">
      <Navigation />
      <Logo />
    </div>
  </header>
)

export default Header
