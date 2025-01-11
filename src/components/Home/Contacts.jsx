import emailjs from "@emailjs/browser";
import { message } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  EmailSvg,
  GithubSvg,
  LinkedInSvg,
  MobilePhoneSvg,
  SkypeSvg,
} from "../../svg";
import { cardAnimation, fromDown, fromUp } from "../Animations";
import { useScroll } from "../useScroll";
const key = "updatable";

const Contacts = (props) => {
  const [element, controls] = useScroll();

  const [state, setState] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const { name, email, messages } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const openMessage = () => {
    message.loading({
      content: "Sending...",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Message Sent successfully!",
        key,
        duration: 2,
      });
    }, 2000);
  };

  const error = (text) => {
    message.error(text, 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "") {
      openMessage();
      const templateParams = {
        name: name,
        email: email,
        messages: messages,
      };
      emailjs
        .send(
          "service_89rd2vd",
          "template_dt7s4c6",
          templateParams,
          "rvfNFfgshzRBJTAxW"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
      setTimeout(() => {
        setState({
          name: "",
          email: "",
          messages: "",
        });
      }, 2000);
    } else {
      error("name and email required");
    }
  };

  const icons = [
    {
      icon: <EmailSvg width={40} height={40} />,
      link: "mailto:faujisiraj777@gmail.com",
      hoverColor: "white",
    },
    {
      icon: <MobilePhoneSvg width={40} height={40} />,
      link: "tel:8879346348",
      hoverColor: "white",
    },
    {
      icon: <LinkedInSvg width={40} height={40} />,
      link: "https://www.linkedin.com/in/fauji-sirajuddin",
      hoverColor: "white",
    },
    {
      icon: <SkypeSvg width={40} height={40} />,
      link: "https://join.skype.com/invite/x6hEOBuO7Lpm",
      hoverColor: "#00AFF0",
    },
    {
      icon: <GithubSvg width={40} height={40} />,
      link: "https://github.com/faujisirajuddin",
      hoverColor: "white",
    },
  ];

  return (
    <section className="contact" ref={element}>
      {props.heading && (
        <motion.h1
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="heading"
        >
          CONTACT
        </motion.h1>
      )}
      {props.head && (
        <div className="head">
          <motion.span
            initial={{ opacity: 0, scale: 1.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.4 }}
          >
            Contact Me
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 1.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.4 }}
          >
            I’m active on most social media platforms and will respond within 24
            hours.
            <br />I specialize in building Single Page Applications with
            React.js, Next.js, and JavaScript, and offer expertise in various
            front-end web development techniques. Feel free to reach out for
            support on dynamic user interfaces, performance optimization, and
            modern web technologies.
          </motion.span>
        </div>
      )}

      <motion.div
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.02 }}
        className="cards-container"
      >
        <div className="contact-sub-card">
          <div className="contact-form-container">
            <div className="card">
              <motion.h2
                variants={cardAnimation}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="left-card-header"
              >
                Reach Out to me
              </motion.h2>
              <motion.div
                variants={cardAnimation}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="edu"
              >
                <div className="icon ">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <span>Near Ram mandir station, Goregaon (West)</span>
                  <div style={{ margin: "5px 0px 0px 0px" }}>
                    Mumbai - 400104 Maharashtra, India
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={cardAnimation}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="edu"
              >
                <div className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <a
                    href="tel:8879346348"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span>8879346348</span>
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={cardAnimation}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }}
                className="edu"
              >
                <div className="icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <a
                    href="mailto:faujisiraj777@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span>faujisiraj777@gmail.com</span>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              ref={element}
              variants={fromUp}
              initial={{ opacity: 1 }}
              animate={controls}
              transition={{ duration: 0.6 }}
              className="card right-card"
            >
              <div className="header">
                <motion.h2
                  variants={cardAnimation}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                  className="right-card-header"
                  style={{ color: "white" }}
                >
                  Send Me An Enquiry
                </motion.h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="inputs">
                  <textarea
                    row="6"
                    col="6"
                    type="text"
                    placeholder="Your Message"
                    name="messages"
                    value={messages}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                <div className="inputs">
                  <button>SEND MESSAGE</button>
                </div>
              </form>
            </motion.div>
          </div>
          <div className="icons-row" ref={element}>
            <motion.div
              variants={fromDown}
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="media-btns"
            >
              {icons.map((iconL, index) => (
                <div className="icons" key={index}>
                  <a
                    target="_blank"
                    href={iconL.link}
                    rel="noopener noreferrer"
                    className="icon-link"
                    style={{ "--hover-color": iconL.hoverColor }}
                  >
                    <span className="icon">{iconL.icon}</span>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
