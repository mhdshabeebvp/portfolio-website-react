import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";

const NavigationBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar
        expand="lg"
        variant="dark"
        className="custom-navbar" 
        fixed="top"
      >
        <Navbar.Brand className="navbar-brand" href="#home">
          TETRA
        </Navbar.Brand>
        <Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="custom-nav">
            <Nav.Link href="#Intro">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonial</Nav.Link>
          </Nav>
          <Nav.Link href="#contact">
            <button className="button n-button">Contact</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
