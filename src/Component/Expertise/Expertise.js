// src/Component/Expertise/Expertise.js

import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Expertise.css"; // Using the same CSS file name

// --- Icon Imports for Software ONLY ---
import reactIcon from "../../img/react.svg";
import htmlIcon from "../../img/html5.svg";
import cssIcon from "../../img/css3-simple.svg";
import jsIcon from "../../img/java-script.svg";
import pythonIcon from "../../img/python2.png";
import mongodbIcon from "../../img/mongodb.png";
import sqlIcon from "../../img/sql.png";
import bootstrapIcon from "../../img/bt.png";


export const Expertise = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // UPDATED: Added a 'type' to each category.
  // 'logoGrid' for software, 'textList' for others.
  const expertiseData = [
    {
      category: "Software Development",
      type: "logoGrid", // This will use the icon cards
      skills: [
        { icon: reactIcon, name: "React" },
        { icon: jsIcon, name: "JavaScript" },
        { icon: pythonIcon, name: "Python" },
        { icon: htmlIcon, name: "HTML5" },
        { icon: cssIcon, name: "CSS3" },
        { icon: mongodbIcon, name: "MongoDB" },
        { icon: sqlIcon, name: "SQL" },
        { icon: bootstrapIcon, name: "Bootstrap" },
      ],
    },
    {
      category: "Hardware & Embedded Systems",
      type: "textList", // This will use the new text-only cards
      skills: [
        { name: "IoT" },
        { name: "Hardware Troubleshooting" },
        { name: "Arduino" },
        { name: "ESP32/ESP8266" },
        { name: "Sensor Integration" },
        { name: "Motor Control" },
        { name: "Soldering & Prototyping" },
      ],
    },
    {
      category: "Professional Competencies",
      type: "textList", // This will also use the new text-only cards
      skills: [
        { name: "Leadership" },
        { name: "Problem-Solving" },
        { name: "Team Collaboration" },
        { name: "Project Management" },
        { name: "Adaptability" },
      ],
    },
  ];

  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-bx">
        <h2 style={{ color: darkMode ? "white" : "#333" }}>Areas of Expertise</h2>
        <p style={{ color: darkMode ? "" : "white" }}>
          I am a passionate and fast learner, focused on building a versatile
          skill set. Here is a look at the technologies I have applied in my
          projects.
        </p>

        {expertiseData.map((categoryData, index) => (
          <div key={index} className="category-container">
            <h3 className="category-title" style={{ color: darkMode ? "var(--orange)" : "#333" }}>
              {categoryData.category}
            </h3>

            {/* NEW: Conditional Rendering based on the 'type' */}
            {categoryData.type === 'logoGrid' ? (
              <div className="skills-grid">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <img src={skill.icon} alt={skill.name} />
                    <h5 style={{ color: "white" }}>{skill.name}</h5>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-skills-list">
                {categoryData.skills.map((skill, skillIndex) => (
                   <div key={skillIndex} className="text-skill-card">
                    <span style={{ color: darkMode ? "white" : "#333" }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
