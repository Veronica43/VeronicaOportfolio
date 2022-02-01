import "./contact.css";

import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fssswh8",
        "template_9uwhtyc",
        formRef.current,
        "user_psbhXRanJdbALkB4pIoFB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-main">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Get in touch!</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <a
                href="https://github.com/Veronica43"
                rel=" noreferrer"
                target="_blank"
              >
                <AiFillGithub size="3rem" color="#0e76a8"></AiFillGithub>
              </a>
            </div>
            <div className="contact-info-item">
              <a
                href="https://linkedin.com/in/verónica-ortega-"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin size="3rem" color="#0e76a8"></AiFillLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let's make something together!!</b> Feel free to send me an email
            if you're looking for a frontend developer,have a question or just
            to say hi!!👋
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="button-form">Submit</button>
            {done && "Thank you 🙂"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
