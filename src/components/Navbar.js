import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          AB___
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavigationBar;
