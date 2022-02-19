import React from "react"
import Container from "../Container"

export default function AboutWhatAreWe() {
  return (
    <Container>
      <h2 className="about-section-header">
        <span>Co robimy?</span>
      </h2>
      <p className="about-p-regular">
        Rozpowszechnianie wiedzy naukowej były podwalinami pod powstanie
        NEUROSPORT. Tworzymy treści i wydajemy utwory z obszarów:
        <ul>
          <li>zdrowia</li>
          <li>kultury fizycznej</li>
          <li>psychologii i rozwoju indywidualnego</li>
        </ul>
      </p>
    </Container>
  )
}
