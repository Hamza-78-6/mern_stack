import React from 'react'
import Header from './components/Header'
import './index.css'
import ABOUT_SKILLS from './components/ABOUT_SKILLS'
import TopBar from './components/TopBar'
import Projects from './components/Projects'
const userInfo = {
  name: "Hamza Shahzad",
  role: "Full Stack Developer",
  tagline: "Creating Seamless Web/Android Experiences",
links:{
  github: "https://github.com/Hamza-78-6",
  instagram: "https://www.instagram.com/ibneeaadam/",
  linkedIn: "https://www.linkedin.com/in/hamza-shahzad-full-stack-developer-1a78b2223/",
  youtube: "https://www.youtube.com/@CodeWithZash",
},
experience: "2", // in years
projectsCompleted: "10",
about: `I'm a skilled web developer proficient in <span class="code">HTML</span>, <span class="code">CSS</span>, <span class="code">JavaScript</span>, and <span class="code">TypeScript</span>, with experience in building dynamic and responsive websites and applications. My expertise extends to modern frameworks and technologies, including <span class="code">React.js</span>, <span class="code">Next.js</span>, <span class="code">Node.js</span>, and <span class="code">Express.js</span>, allowing me to create efficient and scalable solutions. I also work with <span class="code">MongoDB</span> and <span class="code">SQL</span> for database management, <span class="code">Firebase</span> for real-time data and authentication, and use <span class="code">Python</span> with <span class="code">Flask</span> for various scripting and backend tasks. My passion for technology drives me to deliver high-quality, innovative projects that meet both user needs and business goals.
`,
projects:[
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
  {
    title: "Project 1",
    imageLink: "./assets/images/project.png",
    description: "a little bit of information about project",
    linkToProject: "#projects"
  },
]
}
function App() {
  return (
   <>
   <TopBar userInfo={userInfo} />
   <Header  userInfo = {userInfo}/>
   <ABOUT_SKILLS userAbout = {userInfo.about}/>
   <Projects projects = {userInfo.projects} />
   </>
  )
}

export default App