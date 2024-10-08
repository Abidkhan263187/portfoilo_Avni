import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/skills.css";
import { GiSkills } from "react-icons/gi";
import {
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiVercel,
  SiHeroku,
  SiGit,
  SiNetlify,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava, FaPython, FaOpencart } from "react-icons/fa";
import sql from "../assets/sql.png";
import powerBI from "../assets/powerBI.png";
import Linux from "../assets/Linux.png";
import reactRouter from "../assets/router-ii.png";

export const Skills = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="skill"
      style={{
        "--bglightedskill": light ? "#edf2f8" : "#0a192f",
        "--bglightskill": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>
        Sk<span>il</span>ls <GiSkills fontSize={"25px"} />
      </p>
      <div id="skillset">
        <div style={{ display: "block" }}>
          <FaJava style={{ color: "#007396" }} className="skillIc" />
          <p>Java</p>
        </div>
        <div style={{ display: "block" }}>
          <FaPython style={{ color: "#3776ab" }} className="skillIc" />
          <p>Python</p>
        </div>
        <div style={{ display: "block" }}>
          <FaOpencart style={{ color: "#009dff" }} className="skillIc" />
          <p>OpenCV</p>
        </div>
        <div style={{ display: "block" }}>
          <img src={powerBI} alt="Power BI" className="skillIc" />
          <p>Power BI</p>
        </div>
        <div style={{ display: "block" }}>
          <img src={Linux} alt="Linux" className="skillIc" />
          <p>Linux</p>
        </div>
        <div style={{ display: "block" }}>
          <SiHtml5 style={{ color: "#ef662a" }} className="skillIc" />
          <p>HTML</p>
        </div>
        <div style={{ display: "block" }}>
          <SiCss3 style={{ color: "#1c88c7" }} className="skillIc" />
          <p>CSS</p>
        </div>
        <div style={{ display: "block" }}>
          <SiJavascript
            style={{ color: "#f7df1e", background: "black" }}
            className="skillIc"
          />
          <p>JavaScript</p>
        </div>
        <div style={{ display: "block" }}>
          <SiGit style={{ color: "#de4c36" }} className="skillIc" />
          <p>Git</p>
        </div>
        <div style={{ display: "block" }}>
          <SiNetlify style={{ color: "#4d9abf" }} className="skillIc" />
          <p>Netlify</p>
        </div>
        <div style={{ display: "block" }}>
          <SiVercel
            style={{
              color: "white",
              background: "black",
              boxSizing: "border-box",
              padding: "13px",
              borderRadius: "50%",
            }}
            className="skillIc"
          />
          <p>Vercel</p>
        </div>
        <div style={{ display: "block" }}>
          <SiHeroku
            style={{
              color: "white",
              background: "#564d80",
              padding: "3px",
              borderRadius: "5px",
            }}
            className="skillIc"
          />
          <p>Heroku</p>
        </div>
        <div style={{ display: "block" }}>
          <img src={sql} alt="SQL" className="skillIc" />
          <p>SQL</p>
        </div>
        <div style={{ display: "block" }}>
          <img src={reactRouter} alt="React Router" className="skillIc" />
          <p>React Router</p>
        </div>
      </div>
    </div>
  );
};
