import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/education.css";
import { MdCastForEducation } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

export const Education = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="education"
      style={{
        "--bglighted": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>
        Educ<span>a</span>ti<span>o</span>n Details
      </p>

      <div className="educard" data-aos="zoom-in">
        <div id="edu2">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd2">
          <p>B.Tech In Computer Science & Engineering</p>
          <p>SRM institute of science and technology modinagar Ghaziabad</p>
          <p>Software Engineering</p>
          <p>Graduated in 2024</p>
        </div>
        <div className="date d2"></div>
      </div>
      <div className="educard" data-aos="zoom-in">
        <div id="edu1">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd1">
          <p>Intern</p>
          <p>Sriyanka Infratech</p>
          <p>Database management In SQL</p>
          <p>06/2023 - 08/2023</p>
        </div>
        <div className="date d1"></div>
      </div>
      <div className="educard" data-aos="zoom-in">
        <div id="edu2">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd2">
          <p>Class 12 (Higher Secondary)</p>
          <p>Mount Oliver Sr Sec School, Burari, New Delhi</p>
          <p>Science Stream - Physics, Chemistry, Maths </p>
          <p>2019</p>
        </div>
        <div className="date d2"></div>
      </div>
      <div className="educard" data-aos="zoom-in">
        <div id="edu1">
          <GoTriangleLeft className="ic21" />
          <FaUserGraduate className="ic" />
          <GoTriangleRight className="ic22" />
        </div>
        <div class="educardDet edd1">
          <p>10TH (High School)</p>
          <p>Mount Oliver Sr Sec School, Burari, New Delhi</p>
          <p>General All Subjects</p>

          <p>2017</p>
        </div>
        <div className="date d1"></div>
      </div>
    </div>
  );
};
