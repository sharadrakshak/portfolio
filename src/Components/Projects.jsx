import globe from "../assets/earth.png";
import Crud from "../assets/crud.svg";
import weather from "../assets/weather.png";
import { useContext } from "react";
import { Theme } from "./Theme";

export default function Projects() {
  const [isDark, setIsDark] = useContext(Theme);
  return (
    <div className="project_title">
      <h1 className="section_title">Projects</h1>
      <div className="projects_container">
        <a href="https://lucky-salmiakki-4c653b.netlify.app/" target="_blank">
          <img className="earth" src={globe} alt="" />
          <h3 className={`${isDark ? "projectTitle" : ""}`}>Country Finder</h3>
        </a>
        <a
          href="https://adorable-bublanina-ac9ea7.netlify.app/"
          target="_blank"
        >
          <img className="crud" src={Crud} alt="" />
          <h3 className={`${isDark ? "projectTitle" : ""}`}>CRUD App</h3>
        </a>
        <a href="https://gilded-churros-13daa0.netlify.app/" target="_blank">
          <img className="weather" src={weather} alt="" />
          <h3 className={`${isDark ? "projectTitle" : ""}`}>Weather Api</h3>
        </a>
      </div>
    </div>
  );
}
