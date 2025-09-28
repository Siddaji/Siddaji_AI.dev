import React from "react";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Siddaji.dev</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="theme-toggle"
        
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}