import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
// DarkMode Section
import { themeContext } from "../../Context";
import { useContext } from "react";
import { type } from "@testing-library/user-event/dist/type";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon style={{ color: darkMode ? "white" : "black" }} />
      <Sun style={{ color: darkMode ? "white" : "black" }} />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
