import React from "react";
import AboutTech from "./AboutTech";
import AboutCard from "./AboutCard";
import { useScroll } from "../useScroll";
import { cardAnimation } from "../Animations";
import { motion } from "framer-motion";

const AboutContent = (props) => {
  const [element, controls] = useScroll();

  return (
    <section className="about" ref={element}>
      {props.heading && (
        <motion.h1
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="heading"
          style={{ textAlign: "center", letterSpacing: "5px" }}
        >
          ABOUT
        </motion.h1>
      )}
      {props.intro && (
        <motion.div
          className="quote"
          initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.3 }}
        >
          <span> “ </span>
          Hello, I’m Fauji Sirajuddin
          <br /> an Electronics & Telecommunication Engineering graduate from
          Mumbai University (2016). Since starting my IT career in October 2021,
          I have specialized in front-end development with React.js and Next.js.
          <br /> With over 3.2 years of experience, I am skilled in creating
          dynamic and responsive web applications. My focus is on developing
          scalable solutions that enhance user experience and drive business
          success. I am passionate about using my technical expertise and
          problem-solving abilities to contribute to innovative projects and
          deliver exceptional results.
          <span>”</span>
        </motion.div>
      )}

      {props.techIntro && <AboutTech />}
      <AboutCard />
    </section>
  );
};

export default AboutContent;
