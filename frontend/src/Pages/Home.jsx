
import React from 'react';

export default function Home(){
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I’m <span style={{color:'#00d4b8'}}>Siddaji</span> — I build AI powered web apps</h1>
        <p>I build production-ready interfaces and connect them to powerful AI backends. I specialize in Node, React and deploying real products.</p>
        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary">View Projects</a>
          <a href="/contact" className="btn btn-outline">Contact</a>
        </div>
      </div>

      <div className="hero-card">
        <img src="https://images.unsplash.com/photo-1526378727608-3a8e7efb6a3b?q=80&w=1200&auto=format&fit=crop" alt="AI"/>
        <h3>Featured: AI Chatbot</h3>
        <p className="text-muted">An interactive chatbot demo with OpenAI integration and conversation memory.</p>
      </div>
    </section>
  );
}