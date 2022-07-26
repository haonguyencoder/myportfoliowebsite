import React from 'react'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date"></span>
        <h3 className="timeline__title">{props.title}</h3>
        <p style={{color: darkMode? 'orange': ''}} className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card