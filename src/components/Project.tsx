import "./Project.css";
import React from "react";
import { FaReact, FaHtml5, FaLaravel } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiPhp,
  SiSolidity,
  SiAwslambda,
  SiAmazondynamodb,
  SiVite,
  SiMysql,
  SiExpo,
} from "react-icons/si";

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
    techStack: Array<string>;
  };
}

interface ButtonProps {
  item?: string;
}

type IconComponentProps = {
  size?: number;
  color?: string;
  className?: string;
};

type IconComponentType = React.ComponentType<IconComponentProps>;

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
        Journal
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
  const activeIcons = project.techStack;

  const icons: { [key: string]: IconComponentType } = {
    react: FaReact,
    js: IoLogoJavascript,
    solidity: SiSolidity,
    php: SiPhp,
    ts: SiTypescript,
    sql: SiMysql,
    html: FaHtml5,
    laravel: FaLaravel,
    lambda: SiAwslambda,
    dynamo: SiAmazondynamodb,
    vite: SiVite,
    go: FaGolang,
    expo: SiExpo,
  };

  const iconColor: { [key: string]: string } = {
    react: "#61dbfb",
    js: "#F7DF1E",
    solidity: "white",
    php: "white",
    ts: "#007acc",
    sql: "#00758F",
    html: "#e34c26",
    laravel: "#F05340",
    lambda: "#f37b05",
    dynamo: "white",
    vite: "yellow",
    go: "white",
  };

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
      <div className="tech-stack">
        {activeIcons.map((iconKey) => {
          const IconComponent = icons[iconKey];
          return IconComponent ? (
            <IconComponent
              key={iconKey}
              size={24}
              color={iconColor[iconKey]}
              className="tech-stack-icon"
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Project;
