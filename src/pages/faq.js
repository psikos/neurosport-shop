import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Container from "./../components/Container"

export default function Faq() {
  return (
    <Layout title="FAQ" description="Najczęściej zadawane pytania">
      <Container>
       <div>
           <h2>Gdzie znajdę Politykę Prywatności?</h2>
            <p>
                Polityka Prywatności jest dostępna pod poniższym <Link to="/private-policy">linkiem</Link>
            </p>
       </div>
      </Container>
    </Layout>
  )
}
