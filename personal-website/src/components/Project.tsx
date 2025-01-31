import "./Project.css";
import React from "react";

interface ProjectProps {
  key: number;
  project: {
    name: string;
    repo?: string;
    description: string;
    updated: string;
    publication?: string;
    about?: string;
    demo?: string;
  };
}

interface ButtonProps {
  item?: string;
}

const Repo: React.FC<ButtonProps> = ({ item }) => {
  if (item) {
    return (
      <button
        className="buttons"
        onClick={() => {
          window.open(item);
        }}
      >
        Repo
      </button>
    );
  }
  return null;
};

const Publication: React.FC<ButtonProps> = ({ item }) => {
  if (item) {
    return (
      <button
        className="buttons"
        onClick={() => {
          window.open(item);
        }}
      >
        Publication
      </button>
    );
  }
  return null;
};

const About: React.FC<ButtonProps> = ({ item }) => {
  if (item) {
    return (
      <button
        className="buttons"
        onClick={() => {
          window.open(item);
        }}
      >
        About
      </button>
    );
  }
  return null;
};

const Demo: React.FC<ButtonProps> = ({ item }) => {
  if (item) {
    return (
      <button
        className="buttons"
        onClick={() => {
          window.open(item);
        }}
      >
        Demo
      </button>
    );
  }
  return null;
};

const Project: React.FC<ProjectProps> = ({ key, project }) => {
  if (!project.description) {
    project.description = "See the item's README for more info";
  }

  return (
    <div className="project" key={key}>
      <div className="name-div">
        <h2 className="name">{project.name}</h2>
      </div>
      <p className="description">{project.description}</p>
      <div className="project-links">
        <About item={project.about} />
        <Demo item={project.demo} />
        <Repo item={project.repo} />
        <Publication item={project.publication} />
      </div>
      <p className="date">Last updated: {project.updated}</p>
    </div>
  );
};

export default Project;
