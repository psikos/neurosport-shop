import React from "react"
import { Link } from "gatsby"

import { AiFillHome, AiFillShopping } from "react-icons/ai"
import { BsFillPenFill } from "react-icons/bs";

import "./navigation.css"

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" activeClassName="active">
            <i>
              <AiFillHome />
            </i>
            <span>home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" activeClassName="active">
            {/* <i>
              <AiFillShopping />
            </i> */}
            <span>sklep</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" activeClassName="active">
            {/* <i>
              <BsFillPenFill />
            </i> */}
            <span>blog</span>
          </Link>
        </li>
      </ul>

      {/* <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    </nav>
  )
}
