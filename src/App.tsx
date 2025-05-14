import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import { useState } from "react";
import Timeline from "./components/Timeline";
import { FeedbackForm } from "./components/FeedbackForm";

interface Project {
  name: string;
  repo?: string;
  description: string;
  updated: string;
  publication?: string;
  about?: string;
  demo?: string;
  techStack: Array<string>;
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
        techStack: ["vite", "react", "ts"],
        about:
          "https://github.com/Ocamp09/personal-website/blob/main/README.md",
      },
      {
        name: "Fairway Ink",
        description:
          "A passion project dedicated to creating custom golf ball stencils w/ a fully automated backend",
        repo: "https://github.com/Ocamp09/fairway-ink",
        apiRepo: "https://github.com/Ocamp09/fairway-ink-api",
        demo: "https://fairway-ink.com",
        updated: "May 2025",
        techStack: ["vite", "react", "js", "go", "sql", "python", "aws"],
        about:
          "https://github.com/Ocamp09/personal-website/blob/main/README.md",
      },
      {
        name: "Compassion Translator Portal",
        description:
          "A project I worked on as a Summer intern, created from scratch",
        demo: "https://youtu.be/HSl--roXX6U",
        updated: "Aug 2022",
        techStack: ["react", "js", "sql", "go"],
      },
      {
        name: "My Master's Thesis",
        description:
          "A blockchain based healthcare transportation system w/ React UI",
        repo: "https://github.com/sbhunia/scefsta",
        demo: "https://youtu.be/sahVAYYfPXU",
        // publication: "https://ieeexplore.ieee.org/document/10553424",
        updated: "May 2024",
        techStack: ["react", "js", "sql", "solidity"],
        about: "https://github.com/sbhunia/scefsta/blob/main/README.md",
      },
      {
        name: "Lifestyle",
        description:
          "An under-development project to learn React Native and mobile development",
        repo: "https://github.com/Ocamp09/lifestyle",
        demo: "https://ocamp09-lifestyle--19nnta4xbw.expo.app/",
        updated: "Feb 2025",
        techStack: ["expo", "react", "js"],
        about: "https://github.com/Ocamp09/lifestyle/blob/main/README.md",
      },
      {
        name: "Web Services Final Project",
        description:
          "A final project for a class using OAuth, SSO, PhP, Laravel, Lambda, and AWS Dynamo",
        repo: "https://github.com/Ocamp09/school-code/tree/main/cse451-campbeo2-web-main/L_final",
        demo: "https://youtu.be/TtXr-W1J9Nk",
        updated: "May 2023",
        techStack: ["laravel", "php", "lambda", "js", "dynamo"],
        about:
          "https://github.com/Ocamp09/school-code/blob/main/cse451-campbeo2-web-main/L_final/README.md",
      },
      {
        name: "My First Website!",
        description:
          "The first website I ever made in an intro web development class",
        repo: "https://github.com/Ocamp09/school-code/tree/main/cse383_projects-master/finalProject",
        updated: "May 2021",
        techStack: ["js", "html"],
        about:
          "https://github.com/Ocamp09/school-code/blob/main/cse383_projects-master/finalProject/README.md",
      },
    ],
  };

  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showFeedback, setShowFeedback] = useState(true);
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
        <span
          className="card"
          id="feedback"
          onClick={() => {
            setShowFeedback(!showFeedback);
          }}
        >
          <hr className="divider" />- Feedback -
        </span>
        {showFeedback && <FeedbackForm />}
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
            <embed className="resume" src="/Owen_C_Resume_2025.pdf" />
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
