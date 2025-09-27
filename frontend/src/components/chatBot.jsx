import React, { useState, useEffect, useRef } from "react";
import { FaComments, FaTimes } from "react-icons/fa";


const STORAGE_KEY = "siddaji_chat_history";

const systemPrompt = `You are Siddaji's friendly AI portfolio assistant.
Siddaji is an AI enthusiast and full-stack developer.
Projects:
- AI Chatbot: AI chatbot with conversation memory, OpenAI integration. Tech: Node.js, Express, MongoDB, OpenAI.
- Portfolio Website: Personal portfolio built with React and nice UI.
- Task Manager App: Full-stack app with authentication and CRUD (React, Node.js, MongoDB).

Skills:
HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, AI/ML.

When asked about "me", "your work", or "portfolio", respond as if you are Siddaji describing the projects and skills concisely and professionally.
If the user asks for code examples or how the projects were built, give short clear steps and relevant tech stack.`;

export default function SmartChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [{ role: "assistant", content: "Hi 👋 I'm Siddaji's portfolio assistant. Ask me about his projects, skills or experience." }];
    } catch {
      return [{ role: "assistant", content: "Hi 👋 I'm Siddaji's portfolio assistant. Ask me about his projects, skills or experience." }];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  const quickPrompts = [
    "Tell me about your AI Chatbot project",
    "What are Siddaji's top skills?",
    "Show me your portfolio projects",
    "How did you build the Task Manager app?"
  ];

  const sendToAPI = async (allMessages) => {
    if (!apiKey) {
      throw new Error("API key missing (set VITE_GROQ_API_KEY in .env)");
    }
    const payload = {
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        ...allMessages.map(m => ({ role: m.role, content: m.content }))
      ],
      max_tokens: 300
    };

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    return { ok: res.ok, data };
  };

  const handleSend = async (text) => {
    if (!text?.trim()) return;
    setError("");
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const { ok, data } = await sendToAPI(newMessages);

      if (!ok || data.error) {
        
        const msg = data?.error?.message || "Unknown API error";
        if (msg.toLowerCase().includes("quota")) {
          setError("⚠️ You have exceeded your API quota. Add billing or use another key.");
        } else if (msg.toLowerCase().includes("decommission") || msg.toLowerCase().includes("model")) {
          setError("⚠️ Model error: " + msg);
        } else {
          setError("⚠️ API error: " + msg);
        }
        setMessages(prev => [...prev, { role: "assistant", content: "Sorry — I couldn't get a response right now." }]);
        return;
      }

    
      const reply = data.choices?.[0]?.message?.content;
      if (reply) {
        setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "⚠️ No reply from AI model." }]);
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Network or API error: " + err.message);
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Error connecting to AI." }]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
    setInput("");
  };

  const clearHistory = () => {
    setMessages([{ role: "assistant", content: "Hi 👋 I'm Siddaji's portfolio assistant. Ask me about his projects, skills or experience." }]);
    localStorage.removeItem(STORAGE_KEY);
    setError("");
  };

  return (
    <>
      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)} aria-label="Open chat">
          <FaComments size={20} />
        </button>
      )}

      {open && (
        <div className="chatbot-wrapper">
          <div className="chat-header">
            <div>
              <strong>Siddaji — AI Assistant</strong>
              <div className="sub">Ask about projects, skills or experience</div>
            </div>
            <div className="header-actions">
              <button className="clear-btn" onClick={clearHistory}>Clear</button>
              <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close chat"><FaTimes/></button>
            </div>
          </div>

          <div className="chat-window" ref={messagesRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                <div className="bubble">{m.content}</div>
              </div>
            ))}

            {loading && (
              <div className="msg assistant typing">
                <div className="bubble">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
          </div>

          <div className="quick-prompts">
            {quickPrompts.map((q, i) => (
              <button key={i} className="chip" onClick={() => handleSend(q)}>{q}</button>
            ))}
          </div>

          {error && <div className="chat-error">{error}</div>}

          <form className="chat-input" onSubmit={onSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit" disabled={loading}>Send</button>
          </form>
        </div>
      )}
    </>
  );
}
