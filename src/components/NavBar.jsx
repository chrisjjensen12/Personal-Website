import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav-bar-wrapper">
        <header>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="nav__links">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NavBar;
