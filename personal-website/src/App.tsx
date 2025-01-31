import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import { useState } from "react";
import Timeline from "./components/Timeline";

interface Project {
  name: string;
  repo?: string;
  description: string;
  updated: string;
  publication?: string;
  about?: string;
  demo?: string;
}

function App() {
  const projects = {
    projects: [
      {
        name: "This site!",
        description:
          "A personal website designed to get feedback and improve my skills",
        repo: "https://github.com/Ocamp09/personal-website",
        updated: "Jan 2025",
      },
      {
        name: "Compassion Translator Portal",
        description:
          "A project I worked on as a Summer intern, created from scratch",
        demo: "https://youtu.be/HSl--roXX6U",
        updated: "Aug 2022",
      },
      {
        name: "My Master's Thesis",
        description:
          "A blockchain based healthcare transportation system w/ React UI",
        repo: "https://github.com/sbhunia/scefsta",
        demo: "https://youtu.be/sahVAYYfPXU",
        publication: "https://ieeexplore.ieee.org/document/10553424",
        updated: "May 2024",
      },
      {
        name: "Web Services Final Project",
        description:
          "A final project for a class using OAuth, CAS, PhP, Laravel, Lambda, and AWS Dynamo",
        repo: "https://github.com/Ocamp09/school-code/tree/main/cse451-campbeo2-web-main/L_final",
        demo: "https://youtu.be/TtXr-W1J9Nk",
        updated: "May 2023",
      },
      {
        name: "My First Website!",
        description: "The first website I ever made in an intro web dev class",
        repo: "https://github.com/Ocamp09/school-code/tree/main/cse383_projects-master/finalProject",
        updated: "May 2021",
      },
    ],
  };

  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showResume, setShowResume] = useState(true);
  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <>
      <Header></Header>
      <div className="sidebar">
        <Timeline></Timeline>
      </div>
      <div className="spacer"></div>
      <div className="body">
        <span
          className="card"
          id="about"
          onClick={() => {
            setShowAbout(!showAbout);
          }}
        >
          - About Me -
        </span>
        {showAbout && <About></About>}
        <span
          className="card"
          id="project-button"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
        >
          <hr className="divider" />- Projects -
        </span>
        {showProjects && (
          <div className="projects">
            {projects.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        )}
        <div className="resume-div">
          <span
            className="card"
            id="resume"
            onClick={() => {
              setShowResume(!showResume);
            }}
          >
            <hr className="divider" />- Resume -
          </span>
          {showResume && (
            <embed
              className="resume"
              src="personal-website/Owen_C_Resume_2025.pdf"
            />
          )}
        </div>

        <div className="timeline">
          <span
            className="card"
            id="timeline-button"
            onClick={() => {
              setShowTimeline(!showTimeline);
            }}
          >
            <hr className="divider" />- My Timeline -
          </span>
          {showTimeline && <Timeline></Timeline>}
        </div>
      </div>
    </>
  );
}

export default App;
