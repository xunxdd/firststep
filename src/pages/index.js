import React from "react"
import firststep from "static/images/first-step.png"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "components/layout/layout"
import JsImg from "static/images/js.png"
import CssImg from "static/images/css.png"
import WritingImg from "static/images/writing.png"
import IndexCss from "./index.module.css"

const Home = () => {
  return (
    <Layout>
      <Container fluid className="pt-4 pb-5 py-lg-5 bg-dark" style={{ minHeight: '100vh' }}>
        <Row className="align-items-center py-3">

          <Col className="col-12 col-lg-5">
            <img src={firststep} alt="first step" className={IndexCss.swing} />
          </Col>
          <Col className="col-auto">
            <h1 className="display-4 text-light pb-2">
              Read. Write. Code. Learn.
            </h1>
            <h4 className="font-weight-light text-light opacity-70 line-height-base">
              The decipline of coding something is the first step of learning how to code.
            </h4>
            <hr className="hr-light mb-5 bg-light"></hr>
            <Row className="mb-3">
              <Col>
                <a href="/javacript" className="text-white">
                  <figure className="figure">
                    <img src={JsImg} alt="Learn JavaScript" />
                    <figcaption className="text-white opacity-70" >
                      Collection of JavaScript resources: articles, blogs, websites, books
                    </figcaption>
                  </figure>
                </a>
              </Col>
              <Col >
                <a href="/css" className="text-white">
                  <figure className="figure">
                    <img src={CssImg} alt="Learn Css" />
                    <figcaption className="text-white opacity-70">
                      Collection of CSS resources: articles, blogs, websites
                    </figcaption>
                  </figure>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="/posts" className="text-white">
                  <figure className="figure">
                    <img src={WritingImg} alt="My Writings" />
                    <figcaption className="text-white opacity-70">
                      My writings to stay current. Hopefully
                    </figcaption>
                  </figure>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout >

  )
}

export default Home