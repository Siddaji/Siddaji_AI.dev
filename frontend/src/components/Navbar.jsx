
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="logo">Siddaji</div>

      <nav className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        
      </nav>
    </header>
  );
}