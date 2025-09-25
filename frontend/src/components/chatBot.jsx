import React, { useState } from "react";


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋! Ask me anything about AI or my projects." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    setError("");
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    if (!apiKey) {
      setError("❌ API key is missing. Add VITE_OPENAI_API_KEY in your .env file.");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending request to OpenAI...");
      console.log("API Key Present:", !!apiKey);

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an AI portfolio assistant." },
            ...newMessages.map(m => ({
              role: m.from === "user" ? "user" : "assistant",
              content: m.text
            }))
          ],
          max_tokens: 200
        })
      });

      const data = await response.json();
      console.log("OpenAI Response:", data);

      if (response.ok && data.choices && data.choices.length > 0) {
        const botMessage = data.choices[0].message.content;
        setMessages(prev => [...prev, { from: "bot", text: botMessage }]);
      } else {
        setError("⚠️ OpenAI API Error: " + (data.error?.message || "Unknown error"));
        setMessages(prev => [...prev, { from: "bot", text: "Sorry, something went wrong." }]);
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Network or API error: " + err.message);
      setMessages(prev => [...prev, { from: "bot", text: "Sorry, something went wrong." }]);
    }

    setLoading(false);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <div className="chatbot-header" onClick={toggleChat}>
        💬 AI Chat
        <span className="close-btn">{isOpen ? "×" : ""}</span>
      </div>

      {isOpen && (
        <div className="chatbot-body">
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="message bot">Typing...</div>}
          </div>

          {error && <div className="chat-error">{error}</div>}

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {!isOpen && <div className="chatbot-toggle">💬</div>}
    </div>
  );
}
