import React from "react";

export default function About() {
  return (
    <section id="about" className="section about reveal">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I’m <strong>Siddaji</strong>, an CyberSecurity enthusiast and full-stack developer.
          I build intelligent web applications combining Node, React and ML services.
        </p>
      </div>

      <div className="about-boxes">
        <div className="about-box">
          <h3>Goals</h3>
          <p>Build AI-driven applications that empower people and businesses worldwide.</p>
        </div>
        <div className="about-box">
          <h3>Learning</h3>
          <p>Exploring cutting-edge AI, blockchain, and web technologies for innovative solutions.</p>
        </div>
        <div className="about-box">
          <h3>Mission</h3>
          <p>Create high-quality software that blends functionality, creativity, and AI innovation.</p>
        </div>
      </div>
    </section>
  );
}
