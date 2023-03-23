import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <span>sshabeeb33@gmail.com</span>
          <div className="f-icons">
            <Instagram color="white" size="3rem" />
            <Facebook color="white" size="3rem" />
            <Github color="white" size="3rem" />
            <Youtube color="white" size="3rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
