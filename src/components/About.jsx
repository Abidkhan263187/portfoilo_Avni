import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GoTriangleRight } from "react-icons/go";
import myImg from "../assets/avniImg.jpeg";
import "../styles/about.css";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>About </p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Hello! I'm <span>Avantika Saxena</span> from{" "}
              <span>Delhi, India</span>. <br /> At 23, I'm passionate about
              creating innovative and interactive web applications 🚀.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              In 2024, I graduated with a Bachelor's degree in Computer Science
              and Engineering (B.Tech CSE). My passion lies in creating
              innovative and interactive web applications as a Python developer.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              My journey includes hands-on experience with real-world projects,
              applying my knowledge in <span>Backend</span> development.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              <strong>Achievements:</strong> <br />
              Intra SRM Phoenix Hackathon (11/2022 - 11/2022) <br />
              Bagged 3rd position in the hackathon.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              <strong>Certificates:</strong> <br />
              Data Analytics with Python (03/2023 - 05/2023) <br />
              Python Data Structures (11/2022 - 11/2022) <br />
              Data Analysis with Machine Learning (05/2023 - 05/2023)
            </p>
          </div>
        </div>

        <div id="myimg">
          <img src={myImg} alt="Myself" />
        </div>
      </div>
    </div>
  );
};
