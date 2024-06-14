import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavigationBar = () => {
  return (
    <div id='navigation-bar'>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          A.B.Develops
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse">
          <FontAwesomeIcon icon={faBars} style={{ color: "#E74646" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-collapse" >
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};