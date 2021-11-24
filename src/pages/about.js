import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import "../style/about/about.css"
import Author from "../components/author/Author"

export default function about({data:{authors}}) {
  return (
    <Layout title={"About"}>
      <div className="about-wrapper">
        <div className="about-p-wrapper">
          <p className="about-p">
            Internet przepełniony jest wiedzą. Ta nie zawsze pochodzi z
            rzetelnych źródeł. Nieograniczona dostępność informacji, a właściwie
            trudność w ustaleniu jej źródeł powoduje rozpowszechnianie się
            wiedzy nieprawdziwej.{" "}
            <Link to="/" _target="blank">
              Neurosport
            </Link>{" "}
            to baza wiedzy oparta tylko o naukowe dowody. Treści pojawiające się
            na stronie powstają zawsze w oparciu o aktualne badania naukowe.
          </p>
        </div>
        {authors.nodes.map(author=><Author author={author} />)}
      </div>    
    </Layout>
  )
}

export const query = graphql`
{
  authors: allContentfulPerson {
    nodes {
      name
      shortBio {
        shortBio
      }
      image {
        gatsbyImageData
      }
    }
  }
}
`