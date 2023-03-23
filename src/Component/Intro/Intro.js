import React from "react";
import "./Intro.css";
// Icons section started
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
// icons section ended
// RIGHT SECTION IMAGES
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
// import Newboy from "../../img/NEWBOY.png"
import Thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am </span>
          <span>Muhammd Shabeeb</span>
          <span>
            Frontend Developer with high level of experience in web
            design,producing the Quality works
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        {/* social icon */}
        <div className="i-icons">
          <img src={Github} alt="" rel="noreferrer" />
          <img src={LinkedIn} alt="" rel="noreferrer" />
          <img src={Instagram} alt="" rel="noreferrer" />
          <img src={Youtube} alt="" />
        </div>
      </div>

      {/* INTRO RIGHT SECTION */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        {/* motion animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/* floating section[important] */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} text1="Best design" text2="Award" />
        </motion.div>
        {/* blur div  */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
