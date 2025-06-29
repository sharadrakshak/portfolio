import React from 'react'
import tick from "../assets/checkmark-light.svg"

export default function Skills() {
  return (
    <div className='skill'>
      <h1 className='skill_title'>Skills</h1>
      <div className="skill_list">
        <span>
            <img src={tick} alt="" />
            <p>HTML</p>
        </span>
        <span>
            <img src={tick} alt="" />
            <p>CSS</p>
        </span>
        <span>
            <img src={tick} alt="" />
            <p>JavaScript</p>
        </span> 
      </div>
      <hr />
      <div className="skill_list">
        <span>
            <img src={tick} alt="" />
            <p>React</p>
        </span>
        <span>
            <img src={tick} alt="" />
            <p>TailWind Css</p>
        </span> 
      </div>
      <hr />
      <div className="skill_list">
        <span>
            <img src={tick} alt="" />
            <p>Git</p>
        </span>
        <span>
            <img src={tick} alt="" />
            <p>Github</p>
        </span> 
        <span>
            <img src={tick} alt="" />
            <p>Bootstrap</p>
        </span> 
      </div>
    </div>
  )
}
