import React, { Fragment, useContext } from "react";
import tick_light from "../assets/checkmark-light.svg";
import tick_dark from "../assets/checkmark-dark.svg";
import { Theme } from "./Theme";

export default function Skills() {
  const [isDark] = useContext(Theme);
  const icon = isDark ? tick_dark : tick_light;
  const group = [
    { title: 1, items: ["HTML", "CSS", "JavaScript"] },
    { title: 2, items: ["React", "TailWind Css"] },
    { title: 3, items: ["Git", "Github", "Bootstrap"] },
  ];
  return (
    <div className="skill">
      <h1 className="skill_title">Skills</h1>
      {group.map((g) => (
        <React.Fragment key={g.title}>
          <div className="skill_list">
            {g.items.map((name) => (
              <span key={name}>
                <img src={icon} alt="" />
                <p>{name}</p>
              </span>
            ))}
          </div>
          {g.title < 3 ? <hr className={isDark?"hrmode":""} /> : ""}
        </React.Fragment>
      ))}
    </div>
  );
}
