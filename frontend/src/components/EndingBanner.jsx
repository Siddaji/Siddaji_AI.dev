import { motion } from "framer-motion";

export default function EndingBanner({ theme }) {
  return (
    <section id="ending-banner" className={`ending-banner ${theme}`}>
      <motion.div
        className="banner-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="banner-title">Let’s Build Something Amazing Together 🚀</h2>
        <p className="banner-text">
          I’m always open to collaboration, freelance work, and exciting new ideas.  
          Let’s turn your vision into reality.
        </p>
        <a href="#contact" className="banner-btn">Get In Touch</a>
      </motion.div>
    </section>
  );
}
