import { ReactTyped } from "react-typed";
import "../App.css";

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <h1 className="title">
          Hello, I’m <span className="highlight">Siddaji</span> 
        </h1>

        <ReactTyped
          strings={[
            "AI Enthusiast",
            "Full Stack Developer",
            "Creating Intelligent Web Solutions",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="typed-text"
        />

        <div className="cta-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;