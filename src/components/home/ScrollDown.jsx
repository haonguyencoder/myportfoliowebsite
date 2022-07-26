import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const ScrollDown = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="scroll__down">
      <a href="#about" className="mouse__wrapper">
        <span style={{color: darkMode? 'white': ''}} className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
        <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
