import React from 'react'

const Contact = () => {
  return (
    <div className='content-component'>

      <div className='contact-container'>
        <span className='ig'><a href="http://www.instagram.com/clown_coded/" target="_blank" rel="noopener noreferrer">01.  instagram</a></span>
        <span className='gh'><a href="https://github.com/clown-coded" target="_blank" rel="noopener noreferrer">02.  github</a></span>
        <span className='em'><a href="mailto:samanthamitchell@gunpoint.co.nz">03.  email</a></span>


      </div>

      <div className='joker-container'>
        <span className='click-zone'></span>
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
    <img src="../src/assets/joker-card-black-portfolio.png" alt="" className='joker'/>
      </div>
    </div>
  )
}

export default Contact