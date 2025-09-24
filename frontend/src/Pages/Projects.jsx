
import React from "react";

const projects = [
  {
    title: "AI Chatbot",
    description: "AI chatbot with conversation memory and OpenAI integration.",
    tech: ["Node.js", "Express", "MongoDB", "OpenAI"],
    img: "/projects/ai-chatbot.png",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and clean UI.",
    tech: ["React", "CSS"],
    img: "/projects/portfolio.png",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Task Manager App",
    description: "Full-stack app with authentication and CRUD.",
    tech: ["React", "Node.js", "MongoDB"],
    img: "/projects/task-manager.png",
    liveLink: "#",
    repoLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects reveal">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <img src={p.img} alt={p.title} className="project-img" loading="lazy" />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="tech-list">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="card-actions">
                <a className="btn btn-live" href={p.liveLink} target="_blank" rel="noreferrer">Live</a>
                <a className="btn btn-code" href={p.repoLink} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
