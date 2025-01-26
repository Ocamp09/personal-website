import "./Project.css";
import React from "react";

interface ProjectProps {
  key: string;
  project: {
    name: string;
    repo: string;
    description: string;
    updated: string;
    publication: string;
    about: string;
    demo: string;
  };
}

interface ButtonProps {
  item: string;
}

const Repo: React.FC<ButtonProps> = ({ item }) => {
  if (item != undefined || item == "") {
    return (
      <>
        <button
          className="buttons"
          onClick={() => {
            window.open(item);
          }}
        >
          Repo
        </button>
      </>
    );
  } else return <></>;
};
const Publication: React.FC<ButtonProps> = ({ item }) => {
  if (item != undefined || item == "") {
    return (
      <>
        <button
          className="buttons"
          onClick={() => {
            window.open(item);
          }}
        >
          Publication
        </button>
      </>
    );
  } else return <></>;
};
const About: React.FC<ButtonProps> = ({ item }) => {
  if (item != undefined || item == "") {
    return (
      <>
        <button
          className="buttons"
          onClick={() => {
            window.open(item);
          }}
        >
          About
        </button>
      </>
    );
  } else return <></>;
};
const Demo: React.FC<ButtonProps> = ({ item }) => {
  if (item != undefined || item == "") {
    return (
      <>
        <button
          className="buttons"
          onClick={() => {
            window.open(item);
          }}
        >
          Demo
        </button>
      </>
    );
  } else return <></>;
};

const Project: React.FC<ProjectProps> = ({ key, project }) => {
  if (project.description == undefined) {
    project.description = "See the item's README for more info";
  }

  return (
    <>
      <div className="project" key={key}>
        <div className="name-div">
          <h2 className="name">{project.name}</h2>
        </div>
        <p className="description">{project.description}</p>
        <div className="project-links">
          <About item={project.about}></About>
          <Demo item={project.demo}></Demo>
          <Repo item={project.repo}></Repo>
          <Publication item={project.publication}></Publication>
        </div>
        <p className="date">Last updated: {project.updated}</p>
      </div>
    </>
  );
};

export default Project;
