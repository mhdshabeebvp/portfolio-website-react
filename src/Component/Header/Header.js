import React, { useContext, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import "./Header.css";

const NavigationBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth <= 991.98) {
      setExpanded(false);
    }
  };

  const handleContactClick = () => {
    if (window.innerWidth <= 991.98) {
      setExpanded(false);
    }
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar
        expand="lg"
        variant="dark"
        className="custom-navbar"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Navbar.Brand className="navbar-brand" href="#home">
          TETRA
        </Navbar.Brand>
        <Toggle />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="tog"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="custom-nav justify-content-center">
            <Nav.Link href="#Intro" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleLinkClick}>
              Services
            </Nav.Link>
            <Nav.Link href="#Experience" onClick={handleLinkClick}>
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleLinkClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#Testimonials" onClick={handleLinkClick}>
              Testimonial
            </Nav.Link>
          </Nav>
          <Nav.Link href="#contact">
            <button className="button n-button" onClick={handleContactClick}>
              Contact
            </button>
          </Nav.Link>
          {expanded && (
            <button type="button" className="close-button" onClick={handleCloseClick}>
              &times;
            </button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
