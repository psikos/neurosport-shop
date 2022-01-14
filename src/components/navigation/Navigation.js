import React from "react"
import { Link } from "gatsby"

import { AiFillHome } from "react-icons/ai"

import "./navigation.css"

export default function Navigation() {
  const nav_items = [
    {
      label: "home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      label: "sklep",
      link: "/shop",
    },
    {
      label: "blog",
      link: "/blog",
    },
    {
      label: "about",
      link: "/about",
    },
  ]

  return (
    <nav className="nav">
      <ul className="nav-list">
        {nav_items.map(item => (
          <li className="nav-item" key={item.label}>
            <Link to={item.link} activeClassName="active">
              {item.icon && <i>{item.icon}</i>}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    </nav>
  )
}
