import React from "react";
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Pricing = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="pricing container section">
      <h2 style={{color: darkMode? 'white': ''}} className="section__title">Pricing Plans</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p style={{color: darkMode? '#333': ''}} className="pricing__title">
            A Simple option but powerful to manage your business
          </p>
          <p style={{color: darkMode? 'blue': ''}} className="pricing__support">Email support</p>
          <h3 className="price">
            <em>$</em> 29 <span>Month</span>
          </h3>
          <a href="/#" className="btn">
            Get started
          </a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Recommended</span>
          <img src={Image2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p style={{color: darkMode? '#333': ''}} className="pricing__title">
            Unlimited product including app integration and more features
          </p>
          <p style={{color: darkMode? 'blue': ''}} className="pricing__support">Mon-Fri support</p>
          <h3 className="price">
            <em>$</em> 49 <span>Month</span>
          </h3>
          <a href="/#" className="btn">
            Get started
          </a>
        </div>

        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p style={{color: darkMode? '#333': ''}} className="pricing__title">
            A wise option for large companies and individuals
          </p>
          <p style={{color: darkMode? 'blue': ''}} className="pricing__support">24/7 support</p>
          <h3 className="price">
            <em>$</em> 69 <span>Month</span>
          </h3>
          <a href="/#" className="btn">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
