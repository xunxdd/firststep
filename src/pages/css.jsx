import React from "react"
import Layout from "components/layout/layout";
import Container from "react-bootstrap/Container";
import QuoteImg from "static/images/quote.png"

const Javascript = () => {
  return (
    <Layout>

      <Container className="p-2 mb-5">
        <h1>CSS</h1>
        <img src={QuoteImg} alt="css" />
      </Container>
    </Layout>
  )
}

export default Javascript;