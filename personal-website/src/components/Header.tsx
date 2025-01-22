import { FaLinkedin } from "react-icons/fa6";
import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-items">
          <h3>Owen Campbell</h3>
          <div className="header-icons">
            <FaGithub size={32} />
            <FaLinkedin size={32} />
            {/* <LuSun size={32} color="yellow" fill="#242424" /> */}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
