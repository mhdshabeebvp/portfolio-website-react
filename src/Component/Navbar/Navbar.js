import React, { useState, useEffect, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Navbar = () => {
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

  const isSticky = scrollPosition > 65;

  return (
    <div
      className={`n-wrapper ${isSticky ? "sticky" : ""} ${
        darkMode ? "" : "bright-mode"
      }`}
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="n-left">
        <div
          className={`n-name ${isSticky ? "name-sticky" : ""}`}
          style={{ marginLeft: isSticky ? "15px" : "0" }}
        >
          TETRA
        </div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
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
          </ul>
        </div>
        <button className="n-button button">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
