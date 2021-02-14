import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Navbar fixed="bottom" variant="light" bg="light">
      <Navbar.Text>
        Here and Now
      </Navbar.Text>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Chicago - {year}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer