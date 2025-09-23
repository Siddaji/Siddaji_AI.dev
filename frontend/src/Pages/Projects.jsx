import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot built with Node.js, Express, and OpenAI API. Handles real-time conversations and stores history in MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "OpenAI"],
    img: "/projects/ai-chatbot.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills, projects, and achievements with a modern UI.",
    tech: ["React", "CSS3", "Framer Motion"],
    img: "/projects/portfolio.png",
    link: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack application to manage daily tasks, with authentication and cloud storage.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/projects/task-manager.png",
    link: "#",
  },
  {
    title: "Ecommerce website",
    description:
      "A full-stack application to manage daily tasks, with authentication and cloud storage.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/projects/ecommerce.png",
    link: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title"> My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <h4 className="tech-title">Tech Used:</h4>
            <ul className="tech-list">
              {proj.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <a href={proj.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
