import React from "react"
import Layout from "components/layout/layout";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Javascript = () => {
  return (
    <Layout>
      <Jumbotron fluid className="bg-light m-0">
        <Container className="p-2 mb-5">
          <h1>Javascript</h1>
          <blockquote>

            JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.


            <div className="text-muted small mt-4">
              Douglas Crockford
            </div>
          </blockquote>

        </Container>
      </Jumbotron>

    </Layout>
  )
}

export default Javascript;