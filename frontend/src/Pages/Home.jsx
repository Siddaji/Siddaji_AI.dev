import React, { useEffect, useState } from "react";



export default function Home({ theme}) {
  const [displayText, setDisplayText] = useState("");
  const fullText = "🚀 AI Enthusiast | 💻 Fullstack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={theme}>
      <div className="home-content">
        <h1>Hi, I’m <span>Siddaji</span></h1>
        <p className="typing-effect">
          {displayText}
          <span className="cursor"></span>
        </p>
        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
