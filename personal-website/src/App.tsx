import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import axios from "axios";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  repo: string;
}

interface RootObject {
  projects: Project[];
}

function App() {
  const [projects, setProjects] = useState<RootObject>({
    projects: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/projects`);
        console.log("axios", response.data);
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <>
      <Header></Header>
      <div className="spacer"></div>
      <div className="body">
        <h3 className="card">About me - </h3>
        <About></About>
        <h3 className="card">Projects - </h3>
        <div className="projects">
          {/* {projects.project s.map((project) => (
            <Project key={project.name} project={project} />
          ))} */}
        </div>
      </div>
      {/* <About></About>
      <About></About>
      <About></About> */}
    </>
  );
}

export default App;
