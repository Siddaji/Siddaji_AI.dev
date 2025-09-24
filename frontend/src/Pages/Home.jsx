
import React from "react";
import { ReactTyped } from "react-typed"; 

export default function Home() {
  return (
    <section id="home" className="section hero reveal">
      <div className="hero-inner">
        <div>
          <h1 className="hero-title">
            Hello, I’m <span className="name">Siddaji</span> 👋
          </h1>

          <ReactTyped
            strings={[
              "AI Enthusiast",
              "Full Stack Developer",
              "Building Intelligent Web Solutions",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="typed-text"
          />

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <img src="/projects/ai-chatbot.png" alt="AI preview" />
        </div>
      </div>
    </section>
  );
}
