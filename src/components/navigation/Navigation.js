import React from "react"
import { Link } from "gatsby"

import './navigation.css'

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/"  activeClassName="active">home</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop"  activeClassName="active">sklep</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog"  activeClassName="active">blog</Link>
        </li>
      </ul>

      {/* <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    </nav>
  )
}
