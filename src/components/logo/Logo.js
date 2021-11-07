import React from "react"
import { Link } from "gatsby"

import "./logo.css"

const Logo = size => (
  <div className="logo-wrapper">
    <h1 className="logo" style={size && {fontSize: size + 'rem'}}>
      <Link to="/">Neurosport</Link>
    </h1>
  </div>
)

export default Logo
