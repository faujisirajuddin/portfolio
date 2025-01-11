import { motion } from "framer-motion";
import React from "react";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const ProjectCard = (props) => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      ref={element}
      variants={cardAnimation}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="card"
    >
      <div className="image-box">
        <img src={props.data.image} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div className="title">
          <span> Type :</span>
          <span> {props.data.title}</span>
        </div>
        <div className="description">
          <span> Stack Used :</span>
          <span> {props.data.description}</span>
        </div>
        <div className="visit">
          <a
            style={{ color: "white" }}
            href={props.data.url}
            target="_blank"
            rel="noreferrer"
          >
            <button>View More</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
