import React from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

// Icons
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
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const skillsData = [
    { icon: reactIcon, name: "React", description: "Front-End Library" },
    { icon: Html, name: "HTML", description: "Markup Language" },
    { icon: css, name: "CSS", description: "Styling Language" },
    { icon: js, name: "JavaScript", description: "Programming Language" },
    { icon: python, name: "Python", description: "Back-End Language" },
    { icon: mongodb, name: "MongoDB", description: "NoSQL Database" },
    { icon: sql, name: "SQL", description: "Relational Database" },
    { icon: bt, name: "Bootstrap", description: "CSS Framework" },
    { icon: iot, name: "IoT", description: "Internet of Things" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2 style={{ color: darkMode ? "" : "white" }}>Skills</h2>
        <p style={{ color: darkMode ? "" : "white" }}>
          Familiar with front-end and back-end development, database management,
          IoT, and hardware projects. I enjoy building robust and user-friendly
          applications while continuously learning new technologies. Let's create
          something extraordinary together!
        </p>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{
                background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#fff",
                border: darkMode
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <img src={skill.icon} alt={skill.name} />
              <h5 style={{ color: darkMode ? "white" : "#333" }}>
                {skill.name}
              </h5>
              <p style={{ color: darkMode ? "rgba(255, 255, 255, 0.8)" : "#666" }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};