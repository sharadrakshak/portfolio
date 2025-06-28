import React from "react";
import Git from "../assets/github-light.svg";
import linkedin from "../assets/linkedin-light.svg";
import pdf from "../assets/sharad  resume.pdf (2).pdf";
import img from "../assets/anime.png";
import sun from "../assets/sun.svg"

export default function Profile() {
  return (
    <main className="hero">
      <div className="leftSide">
        <div className="container">
          <h1>
            Sharad <br /> Rakshak
          </h1>
          <h2 className="title">
           &nbsp; Front‑End Trainee <br/>&nbsp;&nbsp;(Unity Background)
          </h2>
          <span className="links">
            <a href="https://github.com/" target="_blank">
              <img src={Git} alt="" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
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
          <img className="sun_img" src={sun} alt="" />
      </div>
    </main>
  );
}
