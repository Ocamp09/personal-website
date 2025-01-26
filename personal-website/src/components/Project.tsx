import "./Project.css";
import React from "react";

interface ProjectProps {
  key: string;
  project: {
    name: string;
    repo: string;
    description: string;
  };
}

const Project: React.FC<ProjectProps> = ({ key, project }) => {
  console.log("proj prop", project.name);
  return (
    <>
      <div className="project" key={key}>
        <h2 className="name">{project.name}</h2>
        <p>{project.description}</p>
        <div className="project-links">
          <button className="buttons">About</button>
          <button className="buttons">Demo</button>
          <button
            className="buttons"
            onClick={() => {
              window.open(project.repo);
            }}
          >
            Source
          </button>
        </div>
        <p className="date">Last updated: 2025</p>
      </div>
    </>
  );
};

export default Project;
