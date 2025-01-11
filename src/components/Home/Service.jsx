import React from "react";
import ServiceCard from "./ServiceCard";
import { FaBeer } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { BiCustomize } from "react-icons/bi";
import { GiHook } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";

import { AiFillApi } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { useScroll } from "../useScroll";
import { cardAnimation } from "../Animations";
import { motion } from "framer-motion";

const Service = (props) => {
  const [element, controls] = useScroll();

  // const cardData = [
  //   {
  //     logo: <RiReactjsLine />,
  //     title: "Development From Scratch",
  //     description:
  //       "Leverage my React software development services to build a project from start to go. Share your project requirements for the perfect mix of talent and expertise.",
  //   },
  //   {
  //     logo: <BiCustomize />,
  //     title: "Customizable & Reusable Components",
  //     description:
  //       "Components are the basic building blocks of any  react application. I prefer to make components in such a manner that even a person with less coding knowledge would be able to modify changes",
  //   },
  //   {
  //     logo: <GiHook />,
  //     title: "Custom React Hooks",
  //     description:
  //       "Hooks plays an important role in any React application as it seperates the logic from the UI & if the same logic is used in different components, custom Hooks are there. ",
  //   },

  //   {
  //     logo: <MdDeveloperMode />,
  //     title: "UI/UX Development",
  //     description:
  //       "UI / UX is a most important part in any software product as this is responsible to make an impact on the users. I can develope clean and minimal UI / UX designs for any kind of requirements.",
  //   },
  //   {
  //     logo: <AiFillApi />,
  //     title: "Rest-Api Integration",
  //     description:
  //       "API integration is the one of the important part of any single page application, As most of the data fetched from API's. I can implement the REST-api's in the application in most effective and efficient manner.",
  //   },
  //   {
  //     logo: <BiSupport />,
  //     title: "Maintenance and Support",
  //     description:
  //       "Maintenance and support services for consistent and stable performance of applications. I can change , modify or even enhance the product quality & update your app functionality on demand.",
  //   },
  // ];

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
              // element ={element}
              // controls ={controls}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
