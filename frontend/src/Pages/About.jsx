import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m <span className="highlight">Siddaji</span>, an aspiring 
          <span className="highlight"> CyberSecurity Enthusiast</span> and 
          <span className="highlight"> Full-Stack Developer</span>.  
          I love building modern, scalable, and user-friendly applications.  
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>🎯 Mission</h3>
            <p>To combine AI and Web Development for impactful solutions.</p>
          </div>
          <div className="card">
            <h3>⚡ Skills</h3>
            <p>React, Node.js, c++, Databases.</p>
          </div>
          <div className="card">
            <h3>🌱 Learning</h3>
            <p>Exploring Data structure and algorithm in c++ | CyberSecurity </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;