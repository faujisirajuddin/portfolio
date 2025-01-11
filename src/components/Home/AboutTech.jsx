import { Tooltip } from "antd";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import css from "../../images/css.png";
import html from "../../images/html.png";
import next from "../../images/icons8-next.js-96.png";
import js from "../../images/js.png";
import animationData from "../../images/Lotties/WhatIDo.json";
import mui from "../../images/mui.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const AboutTech = () => {
  const [element, controls] = useScroll();

  const images = [
    {
      img: html,
      tip: "HTML",
    },
    {
      img: css,
      tip: "CSS",
    },
    {
      img: js,
      tip: "JAVASCRIPT",
    },
    {
      img: react,
      tip: "REACT",
    },
    {
      img: next,
      tip: "NEXT JS",
    },
    {
      img: sass,
      tip: "SCSS",
    },
    {
      img: mui,
      tip: "Material UI",
    },
  ];

  const techData = [
    " Building reusable components and front-end libraries for scalable solutions.",
    " Translating designs and wireframes into high-quality, responsive code.",
    " Designing and developing custom components to meet specific project needs.",
    " Optimizing components for maximum performance across diverse web environments.",
    " Proficient in JavaScript, including DOM manipulation, JavaScript object model, and CSS preprocessors like SASS.",
    " Expertise in developing Single Page Applications with React.js",
    " Experienced in using Next.js for server-side rendering, static site generation, and enhancing SEO through improved performance and indexing.",
    " Experience with React class and functional components, forms, events, keys, routing, and state management using Redux.",
    " Skilled in using version control tools such as GitHub and Bitbucket.",
    " Familiar with various UI libraries including Material-UI, Ant Design, and React-Bootstrap.",
  ];

  return (
    <div className="react-info" ref={element}>
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.3 }}
        className="head"
      >
        <span>WHAT I DO ? </span>
      </motion.div>

      <div className="what">
        <motion.div
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="left-sec"
        >
          <div className="tech-icons">
            <h2 style={{ color: "white" }}>Frontend Web-Development</h2>
            <div className="icons">
              {images.map((image, index) => {
                return (
                  <Tooltip
                    title={image.tip}
                    placement="bottom"
                    key={index}
                    color="#ff073a"
                  >
                    <span>
                      <img src={image.img} alt="" />
                    </span>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          <ul>
            {techData.map((list, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#ff073a",
                        marginTop: "15px",
                      }}
                    ></div>
                  </div>
                  <li key={index}>{list}</li>
                </div>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          variants={cardAnimation}
          animate={controls}
          transition={{ duration: 1 }}
          className="imageBox"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTech;
