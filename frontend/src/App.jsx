import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  );
}
