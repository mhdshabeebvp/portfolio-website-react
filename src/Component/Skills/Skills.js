/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../../img/img2/arrow1.svg";
// import arrow2 from "../../img/img2/arrow2.svg";
import "./Skills.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import { motion } from "framer-motion";

// image section
import reactIcon from "../../img/react.svg";
import Html from "../../img/html5.svg";
import css from "../../img/css3-simple.svg";
import js from "../../img/java-script.svg";
import python from "../../img/python2.png";
import mongodb from "../../img/mongodb.png";
import sql from "../../img/sql.png";
import iot from "../../img/iot1.png";
import bt from "../../img/bt.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{ background: darkMode ? "black" : "" }}>
              <h2 style={{ color: darkMode ? "white" : "white" }}>Skills </h2>
              <p style={{ color: darkMode ? "white" : "white" }} >
                "Experienced in front-end and back-end development, database
                management, IoT, and hardware projects,I deliver robust and
                user-friendly applications with a keen eye for detail.
                Proficient in popular frameworks such as Bootstrap and React, I
                communicate complex technical concepts effectively and
                collaborate well with others.Let's create something
                extraordinary together!"
              </p>
              {/* <div className="skill-Icon">
                <img src={reactIcon} alt="" />
                <img src={Html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={python} alt="" />
              </div> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactIcon} alt="Image" />
                  <h5 style={{ color: darkMode ? "white" : "" }}>React</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={Html} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={bt} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img src={iot} alt="Image" />
                  <h5>IoT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
