import React from "react";
import "./Card_S.css";
// using props
const Card_S = ({ emoji, heading, details,color }) => {
  return (
    <div>
      <div className="card_S" style={{borderColor:{color}}}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">learn more</button>
    </div>
    </div>
  );
};

export default Card_S;
