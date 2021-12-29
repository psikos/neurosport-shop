import React from "react"
import {  Link } from "gatsby"

import Container from "../Container"

import { GiBrain } from "react-icons/gi"

import './aboutVision.css'

export default function AboutVision() {
  return (
    <>
      <Container>
          <h2 className="about-section-header">Idea</h2>
        <p className="about-p-regular first">
          <i>
            <GiBrain />
          </i>
          Sen, apetyt, koncentracja, pamięć, kreatywność, motywacja, odporność
          na dystres psychiczny i ból fizyczny, umiejętność szybkiego
          podejmowania decyzji, ale również postura fizyczna i wygląd
          zewnętrzny, oddychanie i wydolność tlenowa oraz beztlenowa, siła i moc
          mięśni, czas reakcji na bodźce, równowaga, czy nawet relacje
          międzyludzkie oraz rozmnażanie i wiele innych funkcji organizmu mogą
          legnąć bez właściwego wsparcia <b>układu nerwowego</b>.
        </p>
      </Container>
      <div className="about-p-wrapper">
        <p className="about-p">
          Internet przepełniony jest wiedzą. Ta nie zawsze pochodzi z rzetelnych
          źródeł. Nieograniczona dostępność informacji, a właściwie trudność w
          ustaleniu jej źródeł powoduje rozpowszechnianie się wiedzy
          nieprawdziwej.{" "}
          <Link to="/" _target="blank">
            Neurosport
          </Link>{" "}
          to baza wiedzy oparta tylko o naukowe dowody. Treści pojawiające się
          na stronie powstają zawsze w oparciu o aktualne badania naukowe.
        </p>
      </div>
      <Container>
        <p className="about-p-regular">
          <b>NEURO</b> odnosi się do funkcji mózgu i pozostałych elementów
          układu nerwowego. <b>SPORT</b> rozumiany jest jako dążenie do
          doskonałości. Informacje przekazywane przez NEUROSPORT pomogą
          optymalizować liczne aspekty życia codziennego za pomocą objaśnienia
          najnowszych wyników badań bezpośrednio lub pośrednio związanych z
          układem nerwowym. NEUROSPORT to fachowe treści poddane krytycznej
          analizie, przekazane za pośrednictwem przystępnego języka i mające
          praktyczny charakter.
        </p>
      </Container>
    </>
  )
}
