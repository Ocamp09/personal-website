import { FaLinkedin } from "react-icons/fa6";
import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-items">
          <div className="header-start">
            <span
              className="home-name"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Owen Campbell
            </span>
          </div>
          <div className="header-nav">
            <button
              className="nav-item"
              onClick={() => {
                let div = document.getElementById("about");

                if (div) {
                  var topPos = div.offsetTop;

                  window.scrollTo({
                    top: topPos - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              About Me
            </button>
            <button
              className="nav-item"
              onClick={() => {
                const div = document.getElementById("project-button");

                if (div) {
                  var topPos = div.offsetTop;

                  window.scrollTo({
                    top: topPos - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Projects
            </button>
            <button
              className="nav-item"
              onClick={() => {
                let div = document.getElementById("resume");

                if (div) {
                  var topPos = div.offsetTop;

                  window.scrollTo({
                    top: topPos - 100,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Resume
            </button>
          </div>
          <div className="header-icons">
            <button
              className="icon-button"
              onClick={() => {
                window.open("https://github.com/Ocamp09");
              }}
            >
              <FaGithub size={28} />
            </button>
            <button
              className="icon-button"
              onClick={() => {
                window.open("https://www.linkedin.com/in/owen-campbell-se/");
              }}
            >
              <FaLinkedin size={28} />
            </button>
            {/* <LuSun size={32} color="yellow" fill="#242424" /> */}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
