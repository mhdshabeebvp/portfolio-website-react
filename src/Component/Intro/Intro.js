import React from "react";
import "./Intro.css";
// Icons section started
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
// icons section ended
// RIGHT SECTION IMAGES
import Vector2 from "../../img/Vector2.png";
import Newboy from "../../img/NEWBOY.png";
import Thumbup from "../../img/thumbup.png";
import reactIcon from "../../img/react.svg";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Resume from "../../Component/Intro/Resume.pdf"

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am </span>
          <span>Muhammd Shabeeb</span>
          <span>
            With a strong passion for technology and programming. I am skilled
            in several programming languages, including PYTHON, JAVASCRIPT,
            HTML, CSS etc..and have used these skills to develop websites, web
            applications, and projects in hardware, robotics, and IoT. I am
            committed to learning and exploring new ideas to stay up-to-date
            with the latest trends and innovations in technology. I believe that
            technology can be a powerful tool to solve complex problems and
            improve people's lives, and I am excited to be a part of this
            ever-evolving field.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        {/* social icon */}
        <div className="i-icons">
          <a
            href="https://github.com/mhdshabeebvp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" rel="noreferrer" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhamed-shabeeb-vp-a24917229/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" rel="noreferrer" />
          </a>
          <a
            href="https://www.instagram.com/mhdshabeeb786"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" rel="noreferrer" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>

      {/* INTRO RIGHT SECTION */}
      <div className="i-right">
        <img src={reactIcon} alt="" />
        <img src={Vector2} alt="" />
        <img src={Newboy} alt="" />
        {/* motion animation */}
        <motion.img
          initial={{ left: "-47%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/* floating section[important] */}

        <motion.div
          initial={{ top: "-4%", left: "39%" }}
          whileInView={{ left: "69.7%" }}
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
