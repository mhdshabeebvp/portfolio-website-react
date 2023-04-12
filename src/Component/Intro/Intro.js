import React, { createRef, useEffect } from "react";
import TagCanvas from "tag-canvas";
import "../../App.css";
import { FaEye } from "react-icons/fa";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "../../App.css";

// Icons section started

// icons section ended
// RIGHT SECTION IMAGES
import { themeContext } from "../../Context";
import { useContext } from "react";
import Resume from "../../Component/Intro/Resume.pdf";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const skills = [
    { name: "HTML", url: "#" },
    { name: "CSS", url: "#" },
    { name: "ES5", url: "#" },
    { name: "TypeScript", url: "#" },
    { name: "REST", url: "#" },
    { name: "JSON", url: "#" },
    { name: "GSAP", url: "#" },
    { name: "Data Science", url: "#" },
    { name: "Wordpress", url: "#" },
    { name: "PHP", url: "#" },
    { name: "Python", url: "#" },
    { name: "Node JS", url: "#" },
    { name: "Git", url: "#" },
    { name: "_lodash", url: "#" },
    { name: "SASS", url: "#" },
    { name: "JQuery", url: "#" },
    { name: "SQI", url: "#" },
    { name: "Gulp", url: "#" },
    { name: "npm", url: "#" },
    { name: "IoT", url: "#" },
    { name: "Yarn", url: "#" },
  ];

  const canvasRef = createRef();

  useEffect(() => {
    const options = {
      textColour: darkMode ? "#08fdd8" : "black",

      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
    };
    const canvas = canvasRef.current;
    if (canvas && typeof TagCanvas !== "undefined") {
      TagCanvas.Start("myCanvas", "tags", options);
    }
  }, [canvasRef]);

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
        <a style={{ textDecoration: "none" }} href={Resume} download>
          <button className="button si-button">Download CV</button>
        </a>
        <a
          style={{ textDecoration: "none" }}
          href={Resume}
          rel="noreferrer"
          target="_blank"
        >
          <button className="sv-button ">
            <FaEye />{" "}
          </button>
        </a>

        {/* social icon */}
        <div className="i-icons">
          <aside className="sidebar" data-sidebar>
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <a
                    href="https://github.com/mhdshabeebvp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="social-icon-s"
                    />
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <a
                    href="https://www.linkedin.com/in/muhamed-shabeeb-vp-a24917229"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="social-icon-s"
                    />
                  </a>
                </div>
              </li>
           
              <li className="contact-item">
                <div className="icon-box">
                  <a
                    href="https://twitter.com/i/flow/single_sign_on"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-icon-s"
                    />
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <a
                    href="https://instagram.com/shutterbee_boy?igshid=ZDdkNTZiNTM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icon-s"
                    />
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social-icon-s"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      {/* INTRO RIGHT SECTION */}
      <div className="i-right">
        <div className="skills-charts">
          <div id="myCanvasContainer">
            <canvas width="500" height="500" id="myCanvas" ref={canvasRef}>
              <ul id="tags">
                {skills.map((skill, index) => (
                  <li key={index}>
                    <a href={skill.url} rel="noreferrer" target="_blank">
                      {skill.name}
                    </a>
                  </li>
                ))}
              </ul>
            </canvas>
          </div>
        </div>
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