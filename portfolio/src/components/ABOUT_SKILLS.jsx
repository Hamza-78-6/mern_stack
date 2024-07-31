import React from "react";
import "./styles/about.css";
function ABOUT_SKILLS({ userAbout }) {
  return (
    <>
      <section className="about_skill">
        <section id="about">
          <h1>About</h1>
          {/* <p>{userAbout}</p> */}
          <p dangerouslySetInnerHTML={{ __html: userAbout }} />
        </section>
        <section id="skills">
          <h1>My Skills</h1>
          <p>Technologies and Tools I've been working with recently</p>
          <div>
            <img src="./assets/icons/html.png" alt="" />
            <img src="./assets/icons/css.png" alt="" />
            <img src="./assets/icons/tailwind-css.svg" alt="" />
            <img src="./assets/icons/js.png" alt="" />
            <img src="./assets/icons/typescript.png" alt="" />
            <img src="./assets/icons/node.png" alt="" />
            <br />
            <img src="./assets/icons/next-js.svg" alt="" />
            <img src="./assets/icons/react.png" alt="" />
            <img src="./assets/icons/python.png" alt="" />
            <img src="./assets/icons/flask.svg" alt="" />
            <img src="./assets/icons/firebase.svg" alt="" />
            <img src="./assets/icons/aws.svg" alt="" />
          </div>
        </section>
      </section>
    </>
  );
}

export default ABOUT_SKILLS;
