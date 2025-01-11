import React from "react";
// import hero_image2 from '../../images/hero2.svg';
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS if using npm
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../images/Lotties/Animation - 1726417218777.json";
import Resume2 from "../../images/FAUJI_SIRAJUDDIN_RESUME.pdf";
import {
  EmailSvg,
  FacebookSvg,
  GithubSvg,
  LinkedInSvg,
  MobilePhoneSvg,
  SkypeSvg,
  TelegramSvg,
} from "../../svg";
import { fromDown } from "../Animations";
import { useScroll } from "../useScroll";

const name = "Fauji Sirajuddin,";
const title = "Frontend React-Js Developer.";

// const desc =
//   'Inventive Frontend developer with 1+ year of Experience in HTML5, CSS3 & Mordern Javascript along with one of the most powerfull Javascript library, "React Js" & some of its UI-libraries.';
const desc =
  "A dedicated professional committed to developing end-to-end solutions that foster sustainable and scalable social and technical systems, driving meaningful impact through innovation and excellence.";

const icons = [
  {
    icon: <EmailSvg width={35} height={35} />,
    link: "mailto:faujisiraj777@gmail.com",
    hoverColor: "white",
  },
  {
    icon: <MobilePhoneSvg width={35} height={35} />,
    link: "tel:8879346348",
    hoverColor: "white",
  },
  {
    icon: <LinkedInSvg width={35} height={35} />,
    link: "https://www.linkedin.com/in/fauji-sirajuddin",
    hoverColor: "white",
  },
  {
    icon: <SkypeSvg width={35} height={35} />,
    link: "https://join.skype.com/invite/x6hEOBuO7Lpm",
    hoverColor: "#00AFF0",
  },
  {
    icon: <GithubSvg width={35} height={35} />,
    link: "https://github.com/faujisirajuddin",
    hoverColor: "white",
  },
];

// download File
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("../../images/FAUJI_SIRAJUDDIN_RESUME.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "sample.pdf";
      alink.click();
    });
  });
};

const Hero = () => {
  const [element, controls] = useScroll();

  return (
    <section className="hero">
      <motion.div
        className="left-col"
        initial={{ opacity: 0, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <div className="content-row1">
          <div className="name">Hello My Name is </div>
          <div className=" name-2">{name}</div>
          {/* <span className="title">ans I am a Web Developer{title}</span> */}

          <div className="title">
            And I am a
            <span style={{ color: "#FF073A", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}{" "}
              <Typewriter
                words={["Frontend Web Developer", "React JS Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>
        </div>
        <div className="content-row2">
          <span className="subtitle">{desc}</span>
        </div>

        {/* <div className="content-row3">
          <div className="media-btns">
            {icons.map((iconL, index) => {
              return (
                <div className="icons" key={index}>
                  <a target="_blank" href={iconL.link}>
                    <i className={iconL.icon} aria-hidden="true"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="content-row3" ref={element}>
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

        <div className="content-row4">
          <div className="download-btn">
            <a href={Resume2} download>
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="right-col"
        initial={{ opacity: 0, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            objectFit: "contain",
            height: "400px",
          }}
        />

        {/* <img src={hero_image} alt=" hero " /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
