import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import Links from './Links'
import Cursor from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'

function App() {

  const screenWidth = window.innerWidth;



  return (
    <HashRouter>
      {screenWidth > 780 && <Cursor/> }
      
      <Nav />
      <LoadingScreen/>
      <Links />
      
        
      </HashRouter>
  )
}

export default App
