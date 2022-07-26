import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useRef as UseRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_18kiwej",
      "template_b5f9ecz",
      form.current,
      "FXJ3_Gzb8K92hjK0I"
    );

    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section className="contact container section" id="contact">
      <h2 style={{color: darkMode? 'white': ''}} className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 style={{color: darkMode? 'white': ''}} className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your Email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your Subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your Message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
