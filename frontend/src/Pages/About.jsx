import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#0f172a",
        color: "#e2e8f0",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        {/* Title */}
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#38bdf8",
            position: "relative",
          }}
        >
          About Me
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#38bdf8",
              margin: "10px auto 0",
              borderRadius: "2px",
            }}
          ></div>
        </h2>

        {/* Intro */}
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "40px",
            lineHeight: "1.8",
          }}
        >
          Hi 👋 I’m{" "}
          <span style={{ color: "#f472b6", fontWeight: "bold" }}>Siddaji</span>, an aspiring{" "}
          <span style={{ color: "#f472b6", fontWeight: "bold" }}>AI & Fullstack Developer</span>.  
          I love solving real-world problems with technology and creating
          applications that combine both functionality and design.
        </p>

        {/* Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {/* Left text */}
          <div style={{ flex: 1, textAlign: "left", padding: "20px" }}>
            <h3 style={{ marginBottom: "10px", color: "#38bdf8" }}>🚀 What I Do</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
              I specialize in building modern web applications with
              <strong> Node.js</strong> and <strong>Express</strong> on the
              backend, and <strong>React</strong> on the frontend.  
              Currently, I’m also exploring <strong>AI-powered apps</strong>,
              integrating APIs and ML models into projects to make them smarter.
            </p>

            <h3 style={{ marginBottom: "10px", color: "#38bdf8" }}>🎯 Goals</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              My short-term goal is to build a strong portfolio showcasing my
              projects, while my long-term vision is to contribute to
              cutting-edge AI-driven applications that create real impact.
            </p>
          </div>

          {/* Right image */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              style={{
                width: "250px",
                borderRadius: "50%",
                border: "4px solid #38bdf8",
                boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.6)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
