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
                    top: topPos - 70,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Projects
            </button>
            <button
              id="resume-nav"
              className="nav-item"
              onClick={() => {
                let div = document.getElementById("resume");

                if (div) {
                  var topPos = div.offsetTop;

                  window.scrollTo({
                    top: topPos - 70,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Resume
            </button>
            <button
              id="timeline-nav"
              className="nav-item"
              onClick={() => {
                let div = document.getElementById("timeline-button");

                if (div) {
                  var topPos = div.offsetTop;

                  window.scrollTo({
                    top: topPos - 70,
                    behavior: "smooth",
                  });
                }
              }}
            >
              My Timeline
            </button>
          </div>
          {/* <div className="hamburger-menu">
            <button
              className="icon-button"
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 12h18"></path>
                <path d="M3 18h18"></path>
                <path d="M3 6h18"></path>
              </svg>
            </button>
          </div> */}
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
