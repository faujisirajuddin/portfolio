import { Progress } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { useScroll, useScroll2 } from "../useScroll";
import { cardAnimation } from "../Animations";

const AboutCard = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll2();

  const educationData = [
    {
      year: "B.E in Electronic & Telecommunication (2012 – 2016)",
      name: "Rajiv Gandhi Institute of Technology",
      location: "Graduated with distinction 70%",
      icon: "fa fa-graduation-cap",
    },
    {
      year: "HSC in Computer Science",
      name: "Rizvi College of Science",
      location: "Graduated with distinction 73.67%",
      icon: "fa fa-graduation-cap",
    },
    {
      year: "SSC",
      name: "Farooq Sattar OomerBhoy High School",
      location: "Graduated with distinction 86.76%",
      icon: "fa fa-university",
    },
  ];

  const experienceData = [
    {
      year: "Software Engineer | 2021 - Present",
      name: "Barinvire Infotech Pvt Ltd",
      location: "Mumbai, Maharashtra",
      icon: "fa fa-briefcase",
    },
    {
      year: "Service Engineer | 2019 - 2021",
      name: "Fabtech Technologies Pvt Ltd",
      location: "Mumbai, Maharashtra",
      icon: "fa fa-briefcase",
    },
    {
      year: "Service Engineer | 2016 - 2019",
      name: "Ishida India Pvt Ltd",
      location: "Mumbai, Maharashtra",
      icon: "fa fa-briefcase",
    },
  ];

  const skillData = [
    {
      name: "HTML",
      amount: "80",
    },
    {
      name: "CSS",
      amount: "75",
    },
    {
      name: "JAVASCRIPT",
      amount: "70",
    },
    {
      name: "REACT JS",
      amount: "75",
    },
    {
      name: "NEXT JS",
      amount: "65",
    },
    {
      name: "REDUX",
      amount: "70",
    },
    {
      name: "REACT-BOOTSTRAP",
      amount: "80",
    },
    {
      name: "Material UI & Antd",
      amount: "70",
    },
  ];

  return (
    <div className="new-container">
      <section className="about-card-wrapper" ref={element}>
        {/* L E F T - - C A R D */}
        <motion.div
          className="left"
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="heading">Experience</div>
          <div className="content">
            {experienceData.map((item, index) => {
              const { year, name, location, icon } = item;
              return (
                <div className="row" key={index}>
                  <div className="icon">
                    <i className={icon} aria-hidden="true"></i>
                  </div>
                  <div className="details">
                    <span className="year">{year}</span>
                    <br />
                    <span className="name">{name}</span>
                    <br />
                    <span className="location">{location}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="heading">Education</div>
          <div className="content">
            {educationData.map((item, index) => {
              const { year, name, location, icon } = item;
              return (
                <div className="row" key={index}>
                  <div className="icon">
                    <i className={icon} aria-hidden="true"></i>
                  </div>
                  <div className="details">
                    <span className="year">{year}</span>
                    <br />
                    <span className="name">{name}</span>
                    <br />
                    <span className="location">{location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* L E F T - - C A R D */}
        {/* R I G H T - - C A R D */}
        <motion.div
          className="right"
          variants={cardAnimation}
          ref={element}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="heading">Technical Skills</div>

          {skillData.map((item, index) => {
            const { name, amount } = item;
            return (
              <div className="content" key={index}>
                <div className="title">
                  <span className="name">{name}</span>
                  <span className="percent">{amount}%</span>
                </div>
                <Progress
                  percent={amount}
                  showInfo={false}
                  strokeColor={{
                    "0%": "#fa9bad",
                    "100%": "#ff073a",
                  }}
                />
              </div>
            );
          })}
        </motion.div>
        {/* R I G H T - - C A R D */}
      </section>

      <motion.div
        ref={element2}
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls2}
        transition={{ duration: 0.6 }}
        className="extra"
      >
        <div className="heading">Extra Curriculum & Hobbies</div>

        <div className="extra-wrapper">
          <div className="row">
            <span className="row-heading">Cricket Enthusiast</span>
            <span>
              I have a deep passion for cricket, excelling as a all rounder.
              Over the years, I have honed my skills both on the field and in
              strategy, focusing on consistent performance and team
              contribution.
            </span>
          </div>
          <div className="row">
            <span className="row-heading">Bike Rider</span>
            <span>
              Exploring new destinations on two wheels is a thrilling
              experience. I enjoy long rides, both solo and with fellow riders,
              discovering scenic routes and immersing myself in the journey.
            </span>
          </div>
          <div className="row">
            <span className="row-heading">Solo and Group Traveler</span>
            <span>
              Traveling solo has helped me connect with different cultures and
              gain unique perspectives. On the other hand, group travel has
              allowed me to bond with others while exploring new places. Both
              experiences have enriched my life in countless ways.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
