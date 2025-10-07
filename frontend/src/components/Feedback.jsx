import React, { useState } from "react";

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newFeedback = {
      id: Date.now(),
      text: message,
      time: new Date().toLocaleString(),
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setMessage("");
  };

  return (
    <section id="feedback" className="feedback-section">
      <h2 className="feedback-title">💬 Your Feedback Matters</h2>

      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          className="feedback-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your thoughts, ideas, or appreciation..."
        />
        <button className="feedback-btn" type="submit">
          Send Feedback 🚀
        </button>
      </form>

      <div className="feedback-display">
        {feedbacks.length === 0 ? (
          <p className="no-feedback">No feedback yet. Be the first to share!</p>
        ) : (
          feedbacks.map((f, index) => (
            <div
              key={f.id}
              className="feedback-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="feedback-text">“{f.text}”</p>
              <span className="feedback-time">{f.time}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
