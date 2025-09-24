
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const active = useActiveSection();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">Siddaji</div>

        <nav className="nav-links">
          <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`}>Home</a>
          <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`}>About</a>
          <a href="#skills" className={`nav-link ${active === "skills" ? "active" : ""}`}>Skills</a>
          <a href="#projects" className={`nav-link ${active === "projects" ? "active" : ""}`}>Projects</a>
          <a href="#contact" className={`nav-link ${active === "contact" ? "active" : ""}`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
