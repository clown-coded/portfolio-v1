import React from 'react'
import { Link } from 'react-router-dom'

const Info = () => {
  

  return (

    <div className='content-component'>

      <div className='info-container'>
        <p>I am a creative practitioner focused on expanding art further into digital spaces. Concentrating predominantly on the interactivity and accessibility of tech, I aim to foster engagement with art and aid the arts industry through technology. My focus lies in pushing the boundaries of web design.
</p>

      </div>
      <div className='joker-container'>
        <span className='click-zone'>  </span>
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
    <img src="../src/assets/joker-card-black-portfolio.png" alt="" className='joker'/>
      </div>
      
    </div>
  )
}

export default Info