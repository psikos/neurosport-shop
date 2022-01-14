import React from "react"

import Author from "../author/Author"
import Container from "../Container"

import './authorsList.css'

export default function AuthorList({ authorsList }) {
  return (
    <>
      <Container>
        <h2 className="about-section-header"><span>Ludzie</span></h2>
        <ul className="author-list">
          {authorsList.map(author => (
            <li key={author.name}>
              <Author author={author} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
