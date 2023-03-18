import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/youtube.png";

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
          >
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/feed/" target={"_blank"}>
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/" target={"_blank"}>
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/ " target={"_blank"}>
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right"> i am right side</div>
    </div>
  );
};

export default Intro;
