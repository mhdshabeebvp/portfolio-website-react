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
import Thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Muhammd Shabeeb</span>
          <span>
            Frontend Developer with high level of experience in web
            design,producing the Quality works
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a
            href="https://github.com/mhdshabeebvp/portfolio-website-react/commits/master"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.youtube.com/ "
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>

      {/* INTRO RIGHT SECTION */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={glassesimoji} alt="" />
        {/* floating section[important] */}
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem " }}>
          <FloatingDiv image={Thumbup} text1="Best design" text2="Award" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
