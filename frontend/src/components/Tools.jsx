
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export default function Tools({ theme }) {
  const tools = [
    { icon: <FaReact size={45} color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs size={45} color="#3C873A" />, name: "Node.js" },
    { icon: <SiJavascript size={45} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiHtml5 size={45} color="#E44D26" />, name: "HTML5" },
    { icon: <SiCss3 size={45} color="#264de4" />, name: "CSS3" },
    { icon: <SiMongodb size={45} color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiTailwindcss size={45} color="#38BDF8" />, name: "Tailwind" },
    { icon: <FaPython size={45} color="#3776AB" />, name: "Python" },
    { icon: <FaGitAlt size={45} color="#F1502F" />, name: "Git" },
  ];

  return (
    <section id="tools" className={`tools ${theme}`}>
      <h2>⚡ Tools & Technologies</h2>
      <div className="tools-grid">
        {tools.map((t, index) => (
          <div key={index} className="tool-card">
            {t.icon}
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
