import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useCallback } from "react";

const NavigationBar = () => {
  const [show, setShow] = useState(true); // Start with true to show the navbar on load
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 20) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  }, [lastScrollY]); // Dependencies for useCallback

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar]); // Include controlNavbar in dependency array

  return (
    <div id='navigation-bar' className={`navbar-container ${show ? 'navbar-visible' : 'navbar-hidden'}`}>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="#home" className="navbar-brand">
          A.B.Develops
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse">
          <FontAwesomeIcon icon={faBars} style={{ color: "#E74646" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-collapse">
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

export default NavigationBar;