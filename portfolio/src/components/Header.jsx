import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/header.css";

function Header({ userInfo }) {
  return (
    <header id="home">
      <section className="heroBanner">
        <section className="heroBanner-left">
          <p>Hello 👋,</p>
          <p>
            I'm a {userInfo.name}, <br /> a passionate {userInfo.role}
          </p>
          <p>{userInfo.tagline}</p>
          <nav>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </li>
          </nav>
        </section>
        <section className="heroBanner-right">
          <img src="./assets/images/hamxa_ubt.png" alt="Hamza Shahzad" />
        </section>
      </section>
      <section className="header--bottom">
        <div>
          <h2>{userInfo.experience}</h2> <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <h2>{userInfo.projectsCompleted}</h2> <p>PROJECTS COMPLETED</p>
        </div>
        <div>
          <img src="./assets/icons/js.png" alt="" />
          <img src="./assets/icons/react.png" alt="" />
          <img src="./assets/icons/html.png" alt="" />
          <img src="./assets/icons/css.png" alt="" />
          <img src="./assets/icons/node.png" alt="" />
          <img src="./assets/icons/python.png" alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
