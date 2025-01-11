import React, { useEffect } from "react";
import About from "../components/Home/AboutContent";
import AboutTech from "../components/Home/AboutTech";
import Contacts from "../components/Home/Contacts";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Service from "../components/Home/Service";
import { useScroll } from "../components/useScroll";

const Home = () => {
  const [element, controls] = useScroll();

  useEffect(() => {
    controls.start();
    g;
  }, [controls]);

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
