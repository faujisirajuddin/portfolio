import React from "react";
import { cardAnimation } from "../Animations";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import cake from "../../images/project.png";
import task from "../../images/task002.jpg";
import ecomshop from "../../images/Ecom-shop.png";
import project04 from "../../images/p04.png";
import connex from "../../images/connex-dashboard-project.png";
import trend from "../../images/Trend (1).png";

const Project = (props) => {
  const [element, controls] = useScroll();

  const others = [
    {
      image: connex,
      title: "Connex Inventory & Ecommerce Analytics",
      description:
        "React JS, Next JS, Styled Components, Firebase Push Noifications, Stripe etc",
      url: "https://inventory.connexecommerce.com/",
    },
    {
      image: trend,
      title: "Trend Append",
      description:
        "React JS, Next JS, Styled Components, Firebase Push Noifications, Next Auth",
      url: "https://trend-next.dev.brainvire.net/",
    },
  ];

  const ProjectData = [
    {
      image: cake,
      title: "E-commerce",
      description: "HTML , CSS & Javascript, Google Firebase.",
      url: "https://cakes-fantasy.web.app",
    },
    {
      image: task,
      title: "Task Manager",
      description:
        "React, react-router-dom, json-server, React Hooks, React-Toastify, Heroku.",
      url: "https://react-task-managerr.herokuapp.com/",
    },
    {
      image: ecomshop,
      title: "E-commerce",
      description:
        "React, react-router-dom, Redux, antDesign, json-server, React Hooks, React-Toastify, react-slick, Framer-Motion.",
      url: "https://github.com/anupreact/Ecommerce-Shop",
    },
    {
      image: project04,
      title: "E-commerce (in progress).",
      description:
        "React, react-router-dom, json-server, React Hooks, react-slick, netlify hosting service .",
      url: "https://anandelectricals.netlify.app/",
    },
  ];

  return (
    <section className="projects" ref={element}>
      <motion.h1
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className="heading"
      >
        COMPANY PROJECTS
      </motion.h1>

      <div className="cards-container">
        {others.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>

      <br />

      {props.heading && (
        <motion.h1
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="heading"
        >
          PERSONAL PROJECTS
        </motion.h1>
      )}
      <div className="cards-container">
        {ProjectData.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Project;
