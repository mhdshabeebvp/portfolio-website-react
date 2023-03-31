// import React, { useState, useEffect, useContext } from "react";
// import Toggle from "../Toggle/Toggle";
// import "./Navbar.css";
// import { Link } from "react-scroll";
// import { themeContext } from "../../Context";

// const Navbar = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const isSticky = scrollPosition >=0;

//   return (
//     <div
//       className={`n-wrapper ${isSticky ? "sticky" : ""} ${
//         darkMode ? "" : "bright-mode"
//       }`}
//       style={{
//         background: darkMode ? "black" : "white",
//         color: darkMode ? "white" : "black",
//       }}
//     >
//       <div className="n-left">
//         <div
//           className={`n-name ${isSticky ? "name-sticky" : ""}`}
//           style={{ marginLeft: isSticky ? "15px" : "0" }}
//         >
//           TETRA
//         </div>
//         <Toggle />
//       </div>

//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyle: "none" }}>
//     <Link
//       spy={true}
//       to="Intro"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-144}
//     >
//       <li>Home</li>
//     </Link>
//     <Link
//       spy={true}
//       to="services"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-120}
//     >
//       <li>Services</li>
//     </Link>
//     <Link
//       spy={true}
//       to="Experience"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-190}
//     >
//       <li>Experience</li>
//     </Link>
//     <Link
//       spy={true}
//       to="skills"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-120}
//     >
//       <li>Skills</li>
//     </Link>
//     <Link
//       spy={true}
//       to="projects"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-10}
//     >
//       <li>Projects</li>
//     </Link>
//     <Link
//       spy={true}
//       to="Testimonial"
//       smooth={{ duration: 500 }}
//       activeClass="activeClass"
//       style={{
//         color: isSticky ? "white" : "inherit",
//         textDecorationColor: "orange",
//       }}
//       offset={-10}
//     >
//       <li>Testimonial</li>
//     </Link>
//   </ul>
// </div>
//         <Link to="contact" spy={true} smooth={true} offset={-230}>
//           <button className="button n-button">Contact</button>

//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSticky = scrollPosition >= 0;

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="md"
      sticky={isSticky ? "top" : ""}
      className={`n-wrapper ${isSticky ? "sticky" : ""}`}
    >
      <Toggle />
      <Navbar.Brand href="#home">TETRA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            spy={true}
            to="Intro"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-144}
          >
            <li>Home</li>
          </Link>
          <Link
            spy={true}
            to="services"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-120}
          >
            <li>Services</li>
          </Link>
          <Link
            spy={true}
            to="Experience"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-190}
          >
            <li>Experience</li>
          </Link>
          <Link
            spy={true}
            to="skills"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-120}
          >
            <li>Skills</li>
          </Link>
          <Link
            spy={true}
            to="projects"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-10}
          >
            <li>Projects</li>
          </Link>
          <Link
            spy={true}
            to="Testimonial"
            smooth={{ duration: 500 }}
            activeClass="activeClass"
            style={{
              color: isSticky ? "white" : "inherit",
              textDecorationColor: "orange",
            }}
            offset={-10}
          >
            <li>Testimonial</li>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
