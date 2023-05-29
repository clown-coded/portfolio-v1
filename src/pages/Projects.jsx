import React, { useState } from 'react'
import Project1 from '../components/Aesthete'
import Aesthete from '../components/Aesthete'
import Transport from '../components/Transport'
import joker from '../../public/assets/joker-card-black-portfolio.png'

 
const Projects = () => {
  const [project1Open, openProject1] = useState(false)
  const [project2Open, openProject2] = useState(false)
  const [project3Open, openProject3] = useState(false)
  const [project4Open, openProject4] = useState(false)
   const screenWidth = window.innerWidth;

  const openFirstProject = () => {
     const tab1 = document.getElementById('project1')
    const tab2 = document.getElementById('project2')
    const tab3 = document.getElementById('project3')
    const tab4 = document.getElementById('project4')
    
    if (screenWidth <= 780) {
      tab1.style.height = 'calc(100% - 50px)'
    tab2.style.height = '50px'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = 'calc(100% - 240px)'
    tab2.style.width = '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
   
    openProject1(true)
    openProject2(false)
    openProject3(false)
    openProject4(false)

  }
  const openSecondProject = () => {
    const tab1 = document.getElementById('project1')
    const tab2 = document.getElementById('project2')
    const tab3 = document.getElementById('project3')
    const tab4 = document.getElementById('project4')
    
     if (screenWidth < 780) {
      tab1.style.height = '50px'
    tab2.style.height =  'calc(100% - 50px)'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width = 'calc(100% - 240px)'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
    
    openProject1(false)
    openProject2(true)
    openProject3(false)
    openProject4(false)
    
  }
  const openThirdProject = () => {
    const tab1 = document.getElementById('project1')
    const tab2 = document.getElementById('project2')
    const tab3 = document.getElementById('project3')
    const tab4 = document.getElementById('project4')
    
    tab1.style.width = '80px'
    tab2.style.width = '80px'
    tab3.style.width = 'calc(100% - 240px)'
    tab4.style.width = '80px'
    openProject1(false)
    openProject2(false)
    openProject3(true)
    openProject4(false)
    
  }
  const openForthProject = () => {
    const tab1 = document.getElementById('project1')
    const tab2 = document.getElementById('project2')
    const tab3 = document.getElementById('project3')
    const tab4 = document.getElementById('project4')
    
    tab1.style.width = '80px'
    tab2.style.width = '80px'
    tab3.style.width = '80px'
    tab4.style.width = 'calc(100% - 240px)'
    openProject1(false)
    openProject2(false)
    openProject3(false)
    openProject4(true)
    
  }


  return (
    <div className='content-component project-page'>

      
      <div className='projects-container'>

        <div className='project' onClick={openFirstProject}
          id='project1'>
          <span className='project-title'>01. aesthete</span>
          <span className='project-year'>2022</span>
          {project1Open &&
           <Aesthete/>}
        </div>

        <div className='project' id='project2' onClick={openSecondProject}>
          <span className='project-title'>02. be your own tour guide</span>
          <span className='project-year'>2022</span>
          {project2Open &&
           <Transport/>}
        </div>

        <div className='project' id='project3' onClick={openThirdProject}>
          <span className='project-title'>03. letting space</span>
          <span className='project-year'>2022</span>
          {project3Open &&
           <Project1/>}
        </div>

        <div className='project' id='project4' onClick={openForthProject}>
          <span className='project-title'>04. MEANWHILE</span>
          <span className='project-year'>2022</span>
          {project4Open &&
           <Project1/>}
        </div>

      </div>

     <div className='joker-container'>
        <span className='click-zone'>  </span>
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
        <img src={joker} alt="" className='joker'/>
      </div>
    </div>
  )
}

export default Projects