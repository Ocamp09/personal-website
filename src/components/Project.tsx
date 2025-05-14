import "./Project.css";
import React from "react";
import { FaReact, FaHtml5, FaLaravel, FaAws, FaPython } from "react-icons/fa";
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
  project: {
    name: string;
    repo?: string;
    apiRepo?: string;
    description?: string;
    updated: string;
    publication?: string;
    about?: string;
    demo?: string;
    techStack: string[];
  };
}

const LinkButton: React.FC<{ label: string; url?: string }> = ({
  label,
  url,
}) =>
  url ? (
    <button className="buttons" onClick={() => window.open(url)}>
      {label}
    </button>
  ) : null;

const iconMeta: Record<
  string,
  {
    Icon: React.ComponentType<{
      size?: number;
      color?: string;
      className?: string;
      ariaLabel?: string;
    }>;
    color: string;
    label: string;
  }
> = {
  react: { Icon: FaReact, color: "#61dbfb", label: "React" },
  js: { Icon: IoLogoJavascript, color: "#F7DF1E", label: "JavaScript" },
  solidity: { Icon: SiSolidity, color: "white", label: "Solidity" },
  php: { Icon: SiPhp, color: "white", label: "PHP" },
  ts: { Icon: SiTypescript, color: "#007acc", label: "TypeScript" },
  sql: { Icon: SiMysql, color: "#00758F", label: "SQL" },
  html: { Icon: FaHtml5, color: "#e34c26", label: "HTML" },
  laravel: { Icon: FaLaravel, color: "#F05340", label: "Laravel" },
  lambda: { Icon: SiAwslambda, color: "#f37b05", label: "Lambda" },
  dynamo: { Icon: SiAmazondynamodb, color: "white", label: "DynamoDB" },
  vite: { Icon: SiVite, color: "yellow", label: "Vite" },
  go: { Icon: FaGolang, color: "white", label: "GoLang" },
  expo: { Icon: SiExpo, color: "white", label: "Expo" },
  aws: { Icon: FaAws, color: "#ff9900", label: "AWS" },
  python: { Icon: FaPython, color: "#4584b6", label: "Python" },
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const {
    name,
    repo,
    apiRepo,
    about,
    demo,
    publication,
    description,
    updated,
    techStack,
  } = project;

  return (
    <div className="project">
      <div className="name-div">
        <h2 className="name">{name}</h2>
      </div>
      <p className="description">
        {description || "See the item's README for more info"}
      </p>
      <div className="project-links">
        <LinkButton label="About" url={about} />
        <LinkButton label="Demo" url={demo} />
        <LinkButton label="Repo" url={repo} />
        <LinkButton label="Api Repo" url={apiRepo} />
        <LinkButton label="Journal" url={publication} />
      </div>
      <p className="date">Last updated: {updated}</p>
      <div className="tech-stack">
        {techStack.map((key) => {
          const meta = iconMeta[key];
          return meta ? (
            <meta.Icon
              key={key}
              size={24}
              color={meta.color}
              className="tech-stack-icon"
              ariaLabel={meta.label}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Project;
