import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function TopBar({ userInfo }) {
  return (
    <nav className="nav-top">
      <h1>{userInfo.name}</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <button>
        <FontAwesomeIcon icon={faEnvelope} />
        Hire Me
      </button>
    </nav>
  );
}

export default TopBar;
