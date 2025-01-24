import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="project">
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
