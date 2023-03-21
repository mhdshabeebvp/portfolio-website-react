import React from "react";
import "./Services.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../../Component/Services/Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Services">
      {/* LEFT SIDE */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amen consectetur adipisicing elit.
          <br /> Magni ab iusto eaque dolore veniam iure a quae, unde fuga.
          Quam.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* RIGHT SIDE */}
      <div className="cards">
        {/* card section in right section of services */}
        {/* first card */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HearEmoji}
            heading={"Design"}
            details={"Figma,Sketch, phonoscope,Adobe"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"ux/ui"}
            details={"Figma,Sketch, phonoscope,Adobe"}
          />
        </div>
        {/* adding 3rd card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"software development"}
            details={"html,css,javascript,Reacts"}
          />
        </div>
        {/* color purple */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
