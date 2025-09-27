import React from "react";


export default function Skills() {
  const skills = [
    { name: "HTML", img: "/skills/html.png", level: "90%" },
    { name: "CSS", img: "/skills/css.png", level: "85%" },
    { name: "JavaScript", img: "/skills/javascript.png", level: "80%" },
    { name: "React", img: "/skills/react.png", level: "75%" },
    { name: "Node.js", img: "/skills/nodejs.png", level: "70%" },
    { name: "Express-js", img: "/skills/express-js.png", level: "60%" },
  ];

  return (
    <section id="skills" className="section skills reveal">
      <h2 className="section-title">Skills</h2>

      <div className="skills-carousel">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
