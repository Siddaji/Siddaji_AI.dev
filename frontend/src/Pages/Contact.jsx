
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section contact reveal">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Let's talk</h3>
          <p>Send a message or reach me on socials.</p>

          <div className="socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="mailto:youremail@example.com"><FaEnvelope/></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter/></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Demo: message sent') }}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Your email" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
