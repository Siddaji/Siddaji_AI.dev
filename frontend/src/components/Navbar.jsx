
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="logo">Siddaji</div>

      <nav className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/projects" className="nav-cta">View Work</Link>
      </nav>
    </header>
  );
}