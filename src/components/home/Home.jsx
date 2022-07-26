import React from 'react'
import "./home.css"
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Home = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 style={{color: darkMode? 'white': ''}} className="home__name">Hao Nguyen</h1>
        <span className="home__education">I'm a Front-end Developer</span>

        <HeaderSocials />
        <a href="#contact" className="btn">Hire me</a>
        
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home