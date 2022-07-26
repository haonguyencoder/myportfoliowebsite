import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Resume = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="resume container section" id="resume">
      <h2 style={{color: darkMode? 'white': ''}} className="resume__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
