import React, { useState } from 'react'
import Project1 from '../components/Aesthete'
import Aesthete from '../components/Aesthete'
import Transport from '../components/Transport'
import Restaurant from '../components/Restaurant'
import joker from '../../public/assets/joker-card-black-portfolio.png'
import Meanwhile from '../components/Meanwhile'

 
const Projects = () => {
  const [project1Open, openProject1] = useState(false)
  const [project2Open, openProject2] = useState(false)
  const [project3Open, openProject3] = useState(false)
  const [project4Open, openProject4] = useState(false)
  const screenWidth = window.innerWidth;
  
    const tab1 = document.getElementById('project1')
    const tab2 = document.getElementById('project2')
    const tab3 = document.getElementById('project3')
    const tab4 = document.getElementById('project4')

  const openFirstProject = () => {
    openProject1(!project1Open)
    openProject2(false)
    openProject3(false)
    openProject4(false)
    
     if (!project1Open) {
     
    
     if (screenWidth <= 780) {
      tab1.style.height = '400vh'
    tab2.style.height = '0px'
    tab3.style.height = '0px'
    tab4.style.height = '0px'
    } else {
       tab1.style.width = 'calc(100% - 240px)'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
   
    
    } else {
       
     if (screenWidth <= 780) {
      tab1.style.height = '50px'
    tab2.style.height = '50px'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
    }
   

  }
  const openSecondProject = () => {

     openProject1(false)
    openProject2(!project2Open)
    openProject3(false)
    openProject4(false)

    if (!project2Open) {
     
    
     if (screenWidth <= 780) {
      tab1.style.height = '0px'
    tab2.style.height = '400vh'
    tab3.style.height = '0px'
    tab4.style.height = '0px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  'calc(100% - 240px)'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
   
    
    } else {
       
     if (screenWidth <= 780) {
      tab1.style.height = '50px'
    tab2.style.height = '50px'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
    }
   
   
    
  }
  const openThirdProject = () => {

       openProject1(false)
    openProject2(false)
    openProject3(!project3Open)
    openProject4(false)
    
     if (!project3Open) {
     
    
     if (screenWidth <= 780) {
      tab1.style.height = '0px'
    tab2.style.height = '0px'
    tab3.style.height = '400vh'
    tab4.style.height = '0px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = 'calc(100% - 240px)'
    tab4.style.width = '80px'
    }
   
    
    } else {
       
     if (screenWidth <= 780) {
      tab1.style.height = '50px'
    tab2.style.height = '50px'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
    }
 
    
  }
  const openForthProject = () => {
       openProject1(false)
    openProject2(false)
    openProject3(false)
    openProject4(!project4Open)
  
   if (!project4Open) {
     
    
     if (screenWidth <= 780) {
      tab1.style.height = '0px'
    tab2.style.height = '0px'
    tab3.style.height = '0px'
    tab4.style.height = '400vh'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = 'calc(100% - 240px)'
    }
   
    
    } else {
       
     if (screenWidth <= 780) {
      tab1.style.height = '50px'
    tab2.style.height = '50px'
    tab3.style.height = '50px'
    tab4.style.height = '50px'
    } else {
       tab1.style.width = '80px'
    tab2.style.width =  '80px'
    tab3.style.width = '80px'
    tab4.style.width = '80px'
    }
    }
 
 
    
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
          <span className='project-title'>03. 1154 Pastaria</span>
          <span className='project-year'>2022</span>
          {project3Open &&
           <Restaurant/>}
        </div>

        <div className='project' id='project4' onClick={openForthProject}>
          <span className='project-title'>04. MEANWHILE</span>
          <span className='project-year'>2022</span>
          {project4Open &&
           <Meanwhile/>}
        </div>
        
         <div className='joker-container'>
        {/* <span className='click-zone'>  </span> */}
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
        <img src={joker} alt="" className='joker'/>
      </div>

      </div>
      

    
    </div>
  )
}

export default Projects