import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Navbar fixed="bottom" variant="secondary" bg="secondary">
      <Navbar.Collapse className="justify-content-end text-white">
        <Navbar.Text className="text-white">
          @&nbsp;&nbsp; Chicago - {year}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer