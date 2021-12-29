import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import "../style/about/about.css"

import AboutVision from "../components/aboutVision/AboutVision"
import AboutWhatAreWe from "../components/aboutWhatAreWe/AboutWhatAreWe"
import AuthorList from "../components/authorsList/AuthorList"

export default function about({ data: { authors } }) {
  return (
    <Layout title={"About"}>
      <div className="about-wrapper">
        <AboutWhatAreWe />
        <AuthorList authorsList={authors.nodes} />
        <AboutVision />
        
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
        email
        title
      }
    }
  }
`
