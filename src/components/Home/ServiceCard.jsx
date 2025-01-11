import { motion } from "framer-motion";
import React from "react";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const ServiceCard = (props) => {
  const [element, controls] = useScroll();

  const { logo, title, description, icon } = props;
  return (
    <motion.div
      ref={element}
      variants={cardAnimation}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="logo">{logo}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </motion.div>
  );
};

export default ServiceCard;
