/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, createRef, useEffect } from 'react';
import TagCanvas from 'tag-canvas';

import "./Intro.css";
// Icons section started
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";
// icons section ended
// RIGHT SECTION IMAGES
import { themeContext } from "../../Context";
import { useContext } from "react";
import Resume from "../../Component/Intro/Resume.pdf";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const skills = [
    { name: 'HTML', url: '#' },
    { name: 'CSS', url: '#' },
    { name: 'ES5', url: '#' },
    { name: 'TypeScript', url: '#' },
    { name: 'REST', url: '#' },
    { name: 'JSON', url: '#' },
    { name: 'GSAP', url: '#' },
    { name: 'Data Science', url: '#' },
    { name: 'Wordpress', url: '#' },
    { name: 'PHP', url: '#' },
    { name: 'Python', url: '#' },
    { name: 'Node JS', url: '#' },
    { name: 'Git', url: '#' },
    { name: '_lodash', url: '#' },
    { name: 'SASS', url: '#' },
    { name: 'JQuery', url: '#' },
    { name: 'SQI', url: '#' },
    { name: 'Gulp', url: '#' },
    { name: 'npm', url: '#' },
    { name: 'BEM', url: '#' },
  ];

  const canvasRef = createRef();

  useEffect(() => {
    const options = {
      textColour: darkMode ? '#08fdd8' : 'black',

      outlineColour: 'transparent',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
    };
    const canvas = canvasRef.current;
    if (canvas && typeof TagCanvas !== 'undefined') {
      TagCanvas.Start('myCanvas', 'tags', options);
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
     
      <div className="skills-charts">
      <div id="myCanvasContainer">
        <canvas width="500" height="500" id="myCanvas" ref={canvasRef}>
          <ul id="tags">
            {skills.map((skill, index) => (
              <li key={index}>
                <a href={skill.url} target="_blank">
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
