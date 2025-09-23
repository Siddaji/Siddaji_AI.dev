import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Let’s Work Together</h2>
        <p className="contact-subtitle">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:yourmail@example.com">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder=" Name" required />
          <input type="email" placeholder=" Email" required />
          <textarea placeholder="Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
