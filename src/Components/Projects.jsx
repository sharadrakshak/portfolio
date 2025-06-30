import React from 'react'
import globe from "../assets/earth.png"
import Crud from "../assets/crud.svg"
import weather from "../assets/weather.png"

export default function Projects() {
  return (
    <div className='project_title'>
      <h1 className='section_title'>Projects</h1>
      <div className="projects_container">
        <a href='https://lucky-salmiakki-4c653b.netlify.app/' target='_blank'>
            <img className='earth' src={globe} alt="" />
            <h3>Country Finder</h3>
        </a>
        <a href='https://adorable-bublanina-ac9ea7.netlify.app/' target='_blank'>
            <img className='crud' src={Crud} alt="" />
            <h3>CRUD App</h3>
        </a>
        <a href='https://gilded-churros-13daa0.netlify.app/' target='_blank'>
            <img className='weather' src={weather} alt="" />
            <h3>Weather Api</h3>
        </a>
      </div>
    </div>
  )
}
