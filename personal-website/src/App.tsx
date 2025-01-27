import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import axios from "axios";
import { useState, useEffect } from "react";
import { Document } from "react-pdf";

interface Project {
  name: string;
  repo: string;
  description: string;
  updated: string;
  publication: string;
  about: string;
  demo: string;
}

function App() {
  const [projects, setProjects] = useState([]);
  const [showAbout, setShowAbout] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showResume, setShowResume] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/projects`);
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header></Header>
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
          id="projects"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
        >
          - Projects -
        </span>
        {showProjects && (
          <div className="projects">
            {projects.map((project) => (
              <Project key={project} project={project} />
            ))}
          </div>
        )}
        <span
          className="card"
          id="resume"
          onClick={() => {
            setShowResume(!showResume);
          }}
        >
          - Resume -
        </span>
        {showResume && (
          <embed className="resume" src="Owen_C_Resume_2025.pdf" />
        )}
      </div>
    </>
  );
}

export default App;
