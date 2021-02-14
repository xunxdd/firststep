import React from "react"
import Layout from "components/layout/layout";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Home = () => {
  return (
    <Layout>
      <Jumbotron fluid className="bg-light m-0">
        <Container className="p-2 mb-5">
          <h1>Future Posts</h1>
          <blockquote>
            Life is short,
            and art long,
            opportunity fleeting,
            experience perilous,
            and decision difficult.
            <div className="text-muted small mt-4">
              By Hippocrates
            </div>
          </blockquote>

        </Container>
      </Jumbotron>

    </Layout>
  )
}

export default Home;