import React from "react";
import "./styles/projects.css";
import PROJECT_CARD from "./helpers/project_section_helper/PROJECT_CARD";
function Projects({ projects }) {
  return (
    <section id="projects">
      <h1 className="p--h1">Projects</h1>
      {projects.map((project) => (
        <PROJECT_CARD project={project} />
      ))}
    </section>
  );
}

export default Projects;
