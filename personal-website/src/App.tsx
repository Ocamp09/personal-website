import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import axios from "axios";
import { useState, useEffect } from "react";

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
        <h3 className="card">- About me - </h3>
        <About></About>
        <h3 className="card">- Projects - </h3>
        <div className="projects">
          {projects.map((project) => (
            <Project key={project} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
