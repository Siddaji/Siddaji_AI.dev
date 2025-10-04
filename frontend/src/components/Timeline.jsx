

export default function Timeline({ theme }) {
  const events = [
    {
      year: "2025",
      title: "Full Stack Developer Intern",
      place: "ABC Tech Solutions",
      description:
        "Developed full-stack web applications using React, Node.js, and MongoDB. Improved UI performance and API response time.",
    },
    {
      year: "2024",
      title: "B.Tech in Computer Science",
      place: "XYZ University",
      description:
        "Graduated with First Class Honors. Specialized in AI, Web Development, and Data Structures.",
    },
    {
      year: "2022",
      title: "Started Calisthenics Journey 💪",
      place: "Self-discipline & consistency",
      description:
        "Balanced coding and fitness to maintain focus and growth mindset.",
    },
    {
      year: "2020",
      title: "Built First Portfolio",
      place: "Self Project",
      description:
        "Created my first web portfolio using HTML, CSS, and JavaScript — the start of my dev journey!",
    },
  ];

  return (
    <section id="timeline" className={`timeline ${theme}`}>
      <h2>🧭 My Journey</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <h4>{event.place}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
