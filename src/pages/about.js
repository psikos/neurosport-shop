import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import "../style/about/about.css"
import Author from "../components/author/Author"
import Container from "../components/Container"

import { GiBrain } from "react-icons/gi";

export default function about({ data: { authors } }) {
  return (
    <Layout title={"About"}>
      <div className="about-wrapper">
        <Container>
          <p className="about-p-regular">
            <i><GiBrain /></i>
            Sen, apetyt, koncentracja, pamięć, kreatywność, motywacja, odporność
            na dystres psychiczny i ból fizyczny, umiejętność szybkiego
            podejmowania decyzji, ale również postura fizyczna i wygląd
            zewnętrzny, oddychanie i wydolność tlenowa oraz beztlenowa, siła i
            moc mięśni, czas reakcji na bodźce, równowaga, czy nawet relacje
            międzyludzkie oraz rozmnażanie i wiele innych funkcji organizmu mogą
            legnąć bez właściwego wsparcia układu nerwowego.
          </p>
        </Container>
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
        <Container>
          <p className="about-p-regular">
            Obie części nazwy odnoszą się do sformułowań o szerokim spektrum
            znaczeń. <b>NEURO</b> – rozumiane jest jako funkcje mózgu i pozostałych
            elementów układu nerwowego, natomiast <b>SPORT</b> – jako dążenie do
            doskonałości. Informacje przekazywane przez NEUROSPORT pomogą
            optymalizować liczne aspekty życia codziennego za pomocą objaśnienia
            najnowszych wyników badań bezpośrednio lub pośrednio związanych z
            układem nerwowym. NEUROSPORT to fachowe treści poddane krytycznej
            analizie, przekazane za pośrednictwem przystępnego języka i mające
            praktyczny charakter.
          </p>
        </Container>
        {authors.nodes.map(author => (
          <Author author={author} />
        ))}
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
      }
    }
  }
`
