import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Feedback({ theme }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: formData.name,
      message: formData.message,
    });
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmittedData(null), 4000);
  };

  return (
    <section id="feedback" className={`feedback ${theme}`}>
      <motion.div
        className="feedback-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="feedback-title">💬 Share Your Feedback</h2>
        <p className="feedback-subtext">
          I’d love to hear your thoughts or suggestions!
        </p>

        {!submittedData ? (
          <motion.form
            className="feedback-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            animate={{ opacity: submittedData ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <motion.button
              type="submit"
              className="feedback-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Submit Feedback
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="floating-card"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="glow-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="floating-content">
              <h3>🌟 Thank You, {submittedData.name}!</h3>
              <p>"{submittedData.message}"</p>
              <p className="small-text">Your feedback has been received 💖</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
