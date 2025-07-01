import React from "react";
import Gitlight from "../assets/github-light.svg";
import GitDark from "../assets/github-dark.svg";
import linkedin_light from "../assets/linkedin-light.svg";
import linkedin_dark from "../assets/linkedin-dark.svg";
import pdf from "../assets/Resume.pdf";
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
              <img src={`${isDark?GitDark:Gitlight}`} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sharad-rakshak-a1b5052b0"
              target="_blank"
            >
              <img src={`${isDark?linkedin_dark:linkedin_light}`} alt="" />
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
