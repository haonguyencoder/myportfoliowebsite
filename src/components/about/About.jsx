import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import CV from "../../assets/HaoNguyen_FE.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="about container section" id="about">
      <h2 style={{color: darkMode? 'white': ''}} className="section__tittle">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p style={{color: darkMode? 'purple': ''}} className="about__description">
              I am Hao Nguyen, web developer from Ha Noi, VietNam. I have rich
              experience in website design and building and customization, also
              I am good at WordPress.
            </p>
            <a href={CV} download className="btn">
              Download CV
              <i className="icon-download icon-arrow-down-circle"></i>
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span style={{color: darkMode? '#FFD15C': ''}} className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span style={{color: darkMode? '#FF6A5C': ''}} className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span style={{color: darkMode? 'blue': ''}} className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
