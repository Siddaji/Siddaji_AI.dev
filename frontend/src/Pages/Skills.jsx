import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", img: "/skills/html.png", level: "100%" },
    { name: "CSS", img: "/skills/css.png", level: "100%" },
    { name: "JavaScript", img: "/skills/javascript.png", level: "100%" },
    { name: "React", img: "/skills/react.png", level: "100%" },
    { name: "Node.js", img: "/skills/nodejs.png", level: "100%" },
    { name: "Express js", img: "/skills/express-js.png", level: "100%" },
  ];

  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
