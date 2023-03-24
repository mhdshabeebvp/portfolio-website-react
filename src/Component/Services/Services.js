import React from "react";
import "./Services.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card_S from "../Card_S/Card_S";
import Resume from "../../Component/Services/Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Services" id="services">
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
      <div className="cards_S">
        {/* card section in right section of services */}
        {/* first card */}
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={{ transition }}
        >
          <Card_S
            emoji={HearEmoji}
            heading={"Design"}
            details={"Figma,Sketch, phonoscope,Adobe,Figma,Sketch,"}
          />
        </motion.div>
                   {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card_S
            emoji={Glasses}
            heading={"ux/ui"}
            details={
              "Figma,Sketch, phonoscope,Lorem ipsum dolor si consectetur"
            }
          />
        </motion.div>
        {/* adding 3rd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card_S
            emoji={Humble}
            heading={"software development"}
            details={
              "html,cssm dolor sit amen consectetur,Lorem ipsum dolor sit reacts,python"
            }
          />
        </motion.div>
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
