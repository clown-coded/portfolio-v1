import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import Links from './Links'
import Cursor from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'

function App() {

  const screenWidth = window.innerWidth;

   function loadIn() {
    
    const loadingScreen = document.getElementById('loadingScreen')
     loadingScreen.style.animation = 'fadeOut 3s ease'
     
     const homeComponent = document.getElementById('homeComponent')
     const joker = document.getElementById('joker')
   
     homeComponent.style.animation = 'slideOpen 3s ease'
     if (screenWidth < 780) {
        homeComponent.style.width = 'calc(100vw - 90px)'
     } else {
        homeComponent.style.width = 'calc(100vw - 165px)'
     }
    joker.animation = 'fadeIn 3s ease'
     loadingScreen.style.visibility = 'hidden'
     
    // setLoading(false)
    

   }
  
  
  
  setTimeout(loadIn, 2000)

  return (
    <HashRouter>
      <Cursor/>
      <Nav />
      <LoadingScreen/>
      <Links />
      
        
      </HashRouter>
  )
}

export default App
