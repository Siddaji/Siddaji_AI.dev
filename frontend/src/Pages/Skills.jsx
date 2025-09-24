

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

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill">
            <img src={s.img} alt={s.name} className="skill-icon" />
            <div className="skill-name">{s.name}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: s.level }} />
            </div>
            <div className="skill-level">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
