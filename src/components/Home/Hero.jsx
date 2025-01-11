import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import Resume2 from "../../images/FAUJI_SIRAJUDDIN_RESUME.pdf";
import animationData from "../../images/Lotties/Animation - 1726417218777.json";
import {
  EmailSvg,
  GithubSvg,
  LinkedInSvg,
  MobilePhoneSvg,
  SkypeSvg,
} from "../../svg";
import { fromDown } from "../Animations";
import { useScroll } from "../useScroll";

const name = "Fauji Sirajuddin,";

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

// // download File
// const onButtonClick = () => {
//   // using Java Script method to get PDF file
//   fetch("../../images/FAUJI_SIRAJUDDIN_RESUME.pdf").then((response) => {
//     response.blob().then((blob) => {
//       // Creating new object of PDF file
//       const fileURL = window.URL.createObjectURL(blob);
//       // Setting various property values
//       let alink = document.createElement("a");
//       alink.href = fileURL;
//       alink.download = "sample.pdf";
//       alink.click();
//     });
//   });
// };

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
          <div className="title">
            And I am a
            <span style={{ color: "#FF073A", fontWeight: "bold" }}>
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
      </motion.div>
    </section>
  );
};

export default Hero;
