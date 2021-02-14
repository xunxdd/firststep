import React from "react"
import firststep from "static/images/firststep.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../scss/custom.scss";
import Layout from "components/layout/layout";

const Home = () => {
  return (
    <Layout>
      <img src={firststep} style={{ width: "100%" }} alt="first step" />
      <Container fluid style={{ "marginTop": "2rem" }}>
        <Row>
          <Col className="text-center">
            <h1>The utterly not so beautiful</h1>
            <h4>What's more to say?</h4>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home;