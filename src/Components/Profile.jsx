import React from "react";
import Git from "../assets/github-light.svg";
import linkedin from "../assets/linkedin-light.svg";
import pdf from "../assets/sharad  resume.pdf (2).pdf";
import img from "../assets/anime.png";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useContext } from "react";
import { Theme } from "./Theme";

export default function Profile() {
  const [isDark, setIsDark] = useContext(Theme);

  return (
    <main className="hero">
      <div className="leftSide">
        <div className="container">
          <h1>
            Sharad <br /> Rakshak
          </h1>
          <h2 className="title">
            &nbsp; Front‑End Trainee <br />
            &nbsp;&nbsp;(Unity Background)
          </h2>
          <span className="links">
            <a
              href="https://github.com/sharadrakshak/portfolio"
              target="_blank"
            >
              <img src={Git} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sharad-rakshak-a1b5052b0"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </span>
          <p className="description">
            Passionate about developing modern React web apps for commercial
            businesses, focused on building responsive and user-centric
            interfaces.
          </p>
        </div>
        <a href={pdf} download className="Resume">
          <button className="Resume">Resume</button>
        </a>
      </div>
      <div className="RightSide">
        <div className="zoom">
          <img className="Pic" src={img} alt="" />
        </div>
        <img
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkset", !isDark);
          }}
          className={`${isDark ? "moon_img" : "sun_img"}`}
          src={`${isDark ? moon : sun}`}
          alt=""
        />
      </div>
    </main>
  );
}
