import React from "react";
import "./Card.css";
// using props
const Card = ({ emoji, heading, details,color }) => {
  return (
    <div>
      <div className="card" style={{borderColor:{color}}}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">learn more</button>
    </div>
    </div>
  );
};

export default Card;
