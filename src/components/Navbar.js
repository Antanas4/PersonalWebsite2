import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => {
  return (
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          A.B.Develops
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" >
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};