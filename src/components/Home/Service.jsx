import React from "react";
import { BiCustomize } from "react-icons/bi";
import { GiHook } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { AiFillApi } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const Service = () => {
  const [element, controls] = useScroll();

  const cardData = [
    {
      logo: <RiReactjsLine />,
      title: "Development From Scratch",
      description:
        "Utilize my expertise in React.js to build your project from the ground up. From ideation to deployment, I ensure that your project receives the right mix of technical skill and innovation for successful delivery.",
    },
    {
      logo: <BiCustomize />,
      title: "Customizable & Reusable Components",
      description:
        "Components are the backbone of any React application. I focus on creating modular, customizable, and reusable components that even non-technical users can modify with ease, ensuring flexibility and scalability.",
    },
    {
      logo: <GiHook />,
      title: "Custom React Hooks",
      description:
        "Hooks are integral to separating logic from the UI in React applications. I specialize in creating custom hooks that allow for cleaner, reusable code, optimizing performance and consistency across components.",
    },
    {
      logo: <MdDeveloperMode />,
      title: "UI/UX Development",
      description:
        "UI/UX design is critical to user engagement and product success. I specialize in creating clean, minimal, and user-friendly interfaces that not only look good but also provide a seamless user experience for any kind of project.",
    },
    {
      logo: <AiFillApi />,
      title: "REST API Integration",
      description:
        "Efficient API integration is essential for modern applications. I bring expertise in integrating REST APIs to fetch, manipulate, and display data in a highly efficient manner, ensuring smooth communication between the front end and back end.",
    },
    {
      logo: <BiSupport />,
      title: "Maintenance and Support",
      description:
        "I offer ongoing maintenance and support to ensure the consistent and stable performance of your applications. From bug fixes to feature enhancements, I provide the support needed to keep your app running smoothly and up to date.",
    },
  ];

  return (
    <section className="services" ref={element}>
      <motion.h1
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className="heading"
      >
        SERVICES
      </motion.h1>
      <div className="cards-container">
        {cardData.map((data, index) => {
          const { logo, title, description } = data;
          return (
            <ServiceCard
              key={index}
              logo={logo}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
