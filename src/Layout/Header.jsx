import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaWpforms } from "react-icons/fa6";

function Header() {
  return (
    <Navbar style={{ background: "linear-gradient(90deg, #1A5653, #1A5653)", color:"white" }}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/">
          📝 Form Portal
        </Navbar.Brand>

        <Nav>
          <Nav.Link as={Link} to="/team everest/contact">
            <FaWpforms style={{ marginRight: "6px" }} />
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;

