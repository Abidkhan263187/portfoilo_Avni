import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import "../styles/navbar.css";

export const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const { light, setLight } = useContext(ThemeContext);

  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setTimeout(() => {
      setDrawer(false);
    }, 800);
    if (drawer) {
      let drawerCont = document.getElementsByClassName("drawerCont")[0];
      drawerCont.style.transition = "1s linear";
      drawerCont.style.transform = "translateX(50vw)";
    }
  };

  const goToSection = async (e) => {
    let id = e.target.getAttribute("data-goto");
    let projects = document.getElementById(`${id}`);

    if (drawer) {
      closeDrawer();
      setTimeout(() => {
        window.scrollTo({
          top: projects.offsetTop - 50,
          left: 0,
          behavior: "smooth",
        });
      }, 1000);
    } else {
      window.scrollTo({
        top: projects.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (drawer) {
        document.getElementsByClassName("drawerCont")[0].style.transition =
          "1s linear";
        document.getElementsByClassName("drawerCont")[0].style.transform =
          "translateX(-50vw)";
        //   document.getElementById('drawerCont').style.transition = 'transform 2s linear'
      }
    }, -100);
  }, [drawer]);

  return (
    <div
      className="nav"
      style={{
        "--backgroundnav": light ? "#edf2f8" : "#0a192f",
        "--navTextHover": light ? "#dc143c" : "#64ffda",
      }}
    >
      <div>
        <svg viewBox="0 0 100 120" style={{ height: "55px", width: "62px" }}>
          <polygon
            fill={light ? "#edf2f8" : "#0a192f"}
            className="Shape"
            stroke={light ? "#dc143c" : "#64ffda"}
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="39 2 0 22 0 67 39 90 78 68 78 23"
          ></polygon>
          <text
            x="40"
            y="60"
            text-anchor="middle"
            fill={light ? "#dc143c" : "#64ffda"}
            fontSize="50px"
            fontWeight="640"
          >
            A
          </text>
        </svg>
      </div>
      <div
        className="navButtons"
        style={
          light
            ? {
                "--navText": "black",
                "--navTextHover": "#edf2f8",
                "--hover": "#dc143c",
              }
            : {
                "--navText": "rgba(255,255,255,0.9)",
                "--navTextHover": "#4a5d80dd",
                "--hover": "#64ffda",
              }
        }
      >
        <p>
          <a data-goto="home" onClick={goToSection}>
            HOME
          </a>
        </p>
        <p>
          <a data-goto="about" onClick={goToSection}>
            ABOUT
          </a>
        </p>
        <p>
          <a data-goto="skill" onClick={goToSection}>
            SKILLS
          </a>
        </p>
        <p>
          <a data-goto="projects" onClick={goToSection}>
            PROJECTS
          </a>
        </p>
        <p>
          <a data-goto="contact" onClick={goToSection}>
            CONTACT
          </a>
        </p>
        <p>
          <a
            href="https://drive.google.com/file/d/1_WpDsb-SWBpBOEg6ZgCKFlgfEYrAcS4u/view?usp=sharing"
            style={{ textDecoration: "none" }}
            download="Avantika_Resume"
          >
            RESUME <MdOpenInNew fontSize={17} />
          </a>
        </p>
        {light ? (
          <i
            className="fas"
            style={{ cursor: "pointer", fontSize: "20px", color: "#0a192f" }}
            onClick={() => setLight(false)}
          >
            <FaMoon />
          </i>
        ) : (
          <i
            className="fas"
            style={{ cursor: "pointer", fontSize: "20px", color: "yellow" }}
            onClick={() => setLight(true)}
          >
            <FaSun />
          </i>
        )}
      </div>
      <div
        className="navDrawer"
        style={
          light
            ? { "--navTextHover": "black" }
            : { "--navTextHover": "#dc143c" }
        }
      >
        <i
          className="fas"
          onClick={openDrawer}
          style={{
            color: light ? "black" : "rgba(255,255,255,0.9)",
            fontSize: "20px",
            padding: "0px",
          }}
        >
          <GiHamburgerMenu
            size="23px"
            style={{ padding: "10px 10px 6px 10px" }}
          />
        </i>
        {light ? (
          <i
            className="fas"
            style={{ cursor: "pointer", fontSize: "20px", color: "#0a192f" }}
            onClick={() => setLight(false)}
          >
            <FaMoon />
          </i>
        ) : (
          <i
            className="fas"
            style={{ cursor: "pointer", fontSize: "20px", color: "yellow" }}
            onClick={() => setLight(true)}
          >
            <FaSun />
          </i>
        )}
      </div>

      <div
        className="navDrawerBackdrop"
        style={{
          display: drawer ? "flex" : "none",
          "--back1": light ? "#dc143cc5" : "#64ffdb9c",
          "--back2": light ? "#dc143c90" : "#64ffdd68",
        }}
      >
        <svg viewBox="0 0 100 120" style={{ height: "55px", width: "62px" }}>
          <polygon
            fill={light ? "#edf2f8" : "#0a192f"}
            className="Shape"
            stroke={light ? "#dc143c" : "#64ffda"}
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="39 2 0 22 0 67 39 90 78 68 78 23"
          ></polygon>
          <text
            x="40"
            y="60"
            text-anchor="middle"
            fill={light ? "#dc143c" : "#64ffda"}
            fontSize="50px"
            fontWeight="640"
          >
            A
          </text>
        </svg>
        <div
          className="drawerCont"
          style={
            light
              ? {
                  "--navText": "black",
                  "--navTextHover": "#edf2f8",
                  background: "#edf2f8",
                  "--hover": "#dc143c",
                }
              : {
                  "--navText": "rgba(255,255,255,0.9)",
                  "--navTextHover": "#4a5d80dd",
                  background: "#0a192f",
                  "--hover": "#64ffda",
                }
          }
        >
          <i
            class="fa"
            onClick={closeDrawer}
            style={{
              color: light ? "black" : "rgba(255,255,255,0.9)",
              fontSize: "25px",
              marginLeft: "250px",
              padding: "0px",
            }}
          >
            <CgCloseR style={{ padding: "10px 10px" }} />
          </i>
          <p>
            <a data-goto="home" onClick={goToSection}>
              HOME
            </a>
          </p>
          <p>
            <a data-goto="about" onClick={goToSection}>
              ABOUT
            </a>
          </p>
          <p>
            <a data-goto="skill" onClick={goToSection}>
              SKILLS
            </a>
          </p>
          <p>
            <a data-goto="projects" onClick={goToSection}>
              PROJECTS
            </a>
          </p>
          <p>
            <a data-goto="contact" onClick={goToSection}>
              CONTACT
            </a>
          </p>
          <p>
            <a
              href="https://drive.usercontent.google.com/download?id=1NXy8L6nKJXybes4WASSvpkjpwRUmz1DM&export=download&authuser=0&confirm=t&uuid=d8823cf9-5cdb-455b-b77b-047ea8bdfa51&at=APZUnTVYR2eWoR68z5RSBBHupcYe:1705078621426"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME{" "}
              <MdOpenInNew
                fontSize={17}
                style={{ padding: "0px", margin: "0px" }}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
