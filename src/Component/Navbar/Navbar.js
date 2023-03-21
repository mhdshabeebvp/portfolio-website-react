import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

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
            <li>Home</li>
            <li>services</li>
            <li>Experience</li>
            <li>portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
