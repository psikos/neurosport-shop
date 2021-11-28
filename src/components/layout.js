import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Seo from "../components/seo"
import "./layout.css"

import Footer from "./footer/Footer"

const Layout = ({ children, title, description }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Seo title={title} description={description} />
      {/* <Header siteTitle={`neurosport` || data.site.siteMetadata?.title} /> */}
      <Header />

      <div className="content">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
