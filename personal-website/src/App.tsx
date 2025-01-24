import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Header></Header>
      <div className="spacer"></div>
      <div className="body">
        <h3 className="card">About me - </h3>
        <About></About>
        <h3 className="card">Projects - </h3>
        <div className="projects">
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </div>
      </div>
      {/* <About></About>
      <About></About>
      <About></About> */}
    </>
  );
}

export default App;
