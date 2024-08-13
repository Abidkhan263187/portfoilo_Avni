import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import {
  SiChakraui,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiHeroku,
  SiRedux,
  SiVercel,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import blueMercury from "../assets/Screenshot (667).png";

export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235",
      }}
    >
      <p>
        Featured <span>Projects</span>{" "}
        <span>
          <GoProject />
        </span>
      </p>

      {/* Sorting Algorithm Visualiser */}
      <div className="projectCard">
        <div className="prCardImg">
          <img
            src="https://via.placeholder.com/300"
            alt="Sorting Algorithm Visualiser"
          />
        </div>
        <div className="prCardContent">
          <p>Sorting Algorithm Visualiser</p>
          <p>
            This project is a Python-based visualization tool that demonstrates
            various sorting algorithms. It provides an interactive and intuitive
            way to understand the inner workings of popular sorting algorithms
            such as Bubble Sort and Selection Sort.
          </p>
          <p>
            <span>Tech Stack: </span>Python, Tkinter.
          </p>
          <div className="prCardTs">
            <img
              src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
              alt="Python"
              className="tsIc"
            />
            <img
              src="https://w7.pngwing.com/pngs/679/344/png-transparent-wing-ide-integrated-development-environment-python-computer-software-eric-raspberry-miscellaneous-monochrome-computer-program.png"
              alt="Tkinter"
              className="tsIc"
            />
          </div>
        </div>
      </div>

      {/* Face Detection System */}
      <div className="projectCard">
        <div className="prCardImg">
          <img
            src="https://via.placeholder.com/300"
            alt="Face Detection System"
          />
        </div>
        <div className="prCardContent">
          <p>Face Detection System</p>
          <p>
            The objective of this program is to detect faces in real-time and
            keep track of the detected objects. It uses the OpenCV library for
            image processing and can identify and track faces efficiently.
          </p>
          <p>
            <span>Tech Stack: </span>Python, OpenCV.
          </p>
          <div className="prCardTs">
            <img
              src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
              alt="Python"
              className="tsIc"
            />
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1618654175386/6KpX54oVc.png?auto=compress,format&format=webp"
              alt="Open Cv"
              className="tsIc"
            />
          </div>
        </div>
      </div>

      {/* Bank Database System */}
      <div className="projectCard">
        <div className="prCardImg">
          <img
            src="https://via.placeholder.com/300"
            alt="Bank Database System"
          />
        </div>
        <div className="prCardContent">
          <p>Bank Database System</p>
          <p>
            This project maintains a record of customer transactions in a bank.
            It utilizes SQL to interact with relational databases, ensuring
            accurate and efficient transaction management.
          </p>
          <p>
            <span>Tech Stack: </span>SQL.
          </p>
          <div className="prCardTs">
            <img
              src="https://logowik.com/content/uploads/images/azure-sql-database6354.jpg"
              alt="SQL"
              className="tsIc"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
              alt="Python"
              className="tsIc"
            />
          </div>
        </div>
      </div>

      {/* Hold U */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src="https://via.placeholder.com/300" alt="Hold U" />
        </div>
        <div className="prCardContent">
          <p>Hold U</p>
          <p>
            Developed and designed the "Hold U" website using HTML, CSS, and
            JavaScript. The site provides vital information about natural
            calamities, including disaster types, impacts, and safety measures.
            It features geolocation to display nearby rescue teams and emergency
            resources.
          </p>
          <p>
            <span>Tech Stack: </span>HTML, CSS, JavaScript.
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
