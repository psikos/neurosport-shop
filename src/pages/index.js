import * as React from "react"

// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Recent from "../components/recent/Recent"
// import Checkout from "../components/checkout/Checkout"


const IndexPage = () => (
  <Layout title={"Home"}>
    

   <Recent />

   {/* <Checkout /> */}
    
  </Layout>
)

export default IndexPage
