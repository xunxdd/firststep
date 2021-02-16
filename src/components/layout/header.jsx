import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "static/favicon.svg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEdit)
const Header = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">

      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        First Step
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="toggler">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
          <Nav.Link href="/javascript">JavaScript</Nav.Link>
          <Nav.Link href="/css">CSS</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text style={{ fontSize: '18px' }} className="text-light mr-2">

            <a href="https://github.com/xunxdd/firststep" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </Navbar.Text>
          <Navbar.Text className="text-light">
            <a href="https://xunding.medium.com/learning-gatsby-react-36cbdfbbb09a" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header