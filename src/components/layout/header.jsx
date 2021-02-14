import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "static/favicon.svg"

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
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header;