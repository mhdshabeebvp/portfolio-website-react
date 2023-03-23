import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">TETRA</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonial"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
