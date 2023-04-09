import React, { useContext, useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import "./Header.css";
import "../../App.css";
import { Link as ScrollLink } from "react-scroll";



const NavigationBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [expanded, setExpanded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        expanded
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, [expanded]);

  return (
    <div className={darkMode ? "dark-mode" : ""} id="header">
      <Navbar
        expand="lg"
        variant="dark"
        className={`custom-navbar ${!visible ? "navbar-hidden" : ""}`}
        expanded={expanded}
        onToggle={setExpanded}
        ref={navbarRef}
      >
        {/* <Navbar.Brand className="navbar-brand" href="#home">
          TETRA
        </Navbar.Brand>
        <Toggle /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="tog" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="custom-nav justify-content-center">
            <Nav.Link href="#header" onClick={handleLinkClick} off>
              Home
            </Nav.Link>
            {/* <Nav.Link href="#services" onClick={handleLinkClick}>
              Services
            </Nav.Link> */}
            {/* <Nav.Link href="#Experience" onClick={handleLinkClick}>
              Experience
            </Nav.Link> */}
            <Nav.Link href="#skills" onClick={handleLinkClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#ParallaxSections" onClick={handleLinkClick}>
              Blogs
            </Nav.Link>
            
          </Nav>
          <Nav.Link href="#contact">
            <button className="button n-button" onClick={handleContactClick}>
              Contact
            </button>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
