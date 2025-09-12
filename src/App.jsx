import { useState } from 'react'
import { useState, useEffect } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.githubLink}>GitHub</a> | <a href={p.liveLink}>Live</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
