import React from "react";
import About from "../components/Home/AboutContent";
import AboutTech from "../components/Home/AboutTech";
import Contacts from "../components/Home/Contacts";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Service from "../components/Home/Service";
import { useScroll } from "../components/useScroll";
import hero_image from "../images/hero.png";
import { useEffect, useState } from "react";
import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";

// import loadi from "../images/loader1.gif"
// import astr from "../images/astronaut-in-tea-break.gif"

const Home = () => {
  const [element, controls] = useScroll();

  useEffect(() => {
    controls.start(); // Starts the animation or functionality after mounting
  }, [controls]); // Dependency array with 'controls' ensures it's only called when controls are available

  return (
    <main className="home_container" ref={element}>
      <Hero />
      <AboutTech />
      <About heading={true} techIntro={false} />
      <Service heading={true} />
      <Project heading={true} />
      <Contacts heading={true} />
    </main>
  );
};

export default Home;
