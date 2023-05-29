import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import Links from './Links'
import Cursor from './components/Cursor'
import white-joker from '../public/assets/joker-white.png'

function App() {
  const [loading, setLoading] = useState(true)
  const screenWidth = window.innerWidth;
  

  const LoadingScreen = () => {
    return (
      <div className='loading-screen' id='loadingScreen'>
        <img src={white-joker} alt="" className='loading-joker' />
        <h1 className='loading-logo'>samantha mitchell</h1>

    </div>
    )
   
  }

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
