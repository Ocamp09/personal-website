import "./Project.css";
import React from "react";

interface ProjectProps {
  key: string;
  project: {
    name: string;
    repo: string;
  };
}

const Project: React.FC<ProjectProps> = ({ key, project }) => {
  console.log("proj prop", project);
  return (
    <>
      <div className="project" key={key}>
        <h3>This Site!</h3>
        <p>The source of this website</p>
        <div className="project-links">
          <button className="buttons">About</button>
          <button className="buttons">Demo</button>
          <button className="buttons">Source</button>
        </div>
        <p className="date">Last updated: 2025</p>
      </div>
    </>
  );
};

export default Project;
