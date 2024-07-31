import React from "react";

function PROJECT_CARD({ project }) {
  return (
    <section className="project--card">
      <img src={project.imageLink} alt="" />
      {console.log(project.imageLink)}
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <a href={project.linkToProject} target="blank">
        <button>View Project</button>
      </a>
    </section>
  );
}

export default PROJECT_CARD;
