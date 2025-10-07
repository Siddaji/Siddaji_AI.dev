import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ChatBot from "./components/chatBot";
import Timeline from "./components/Timeline";
import Feedback from "./components/Feedback";
import EndingBanner from "./components/EndingBanner";
 
export default function App() {
  
  const [theme, setTheme] = useState("dark");

  
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);


  
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.15 });
    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
        <Home  /> 
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ChatBot/>
        <Timeline/>
         <Feedback/>
        <EndingBanner/>
    </>
  );
}