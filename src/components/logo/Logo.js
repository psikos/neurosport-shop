import React from "react"
import { Link } from "gatsby"

import "./logo.css"

const Logo = ({ size,color }) => {
  const style = {
    fontSize: size ? size : "2rem",
    color: color,
    padding: 0
  }

  return (
    <div className="logo-wrapper">
      <h1 className="logo" style={size && {fontSize: size, margin: '12px 10px'}}>
        <Link to="/" style={size && style}>Neurosport</Link>
      </h1>
    </div>
  )
}

export default Logo
