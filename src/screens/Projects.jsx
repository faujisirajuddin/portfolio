import React from "react";
import Project from "../components/Home/Project";
import Service from "../components/Home/Service";

const Projects = () => {
  return (
    <main className="projects_page_container">
      <Project heading={false} />
      <Service />
    </main>
  );
};

export default Projects;
