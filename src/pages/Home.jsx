import { useState } from 'react'
import joker from '../../public/assets/joker-card-black-portfolio.png'

const Home = () => {

  const HomeContent = () => {
    return (
      <div className='content-component' id='homeComponent' style={{
        width: 0}} >

      
     <div className='joker-container'>
        <span className='click-zone'>  </span>
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
    <img src={joker} alt="" className='joker'/>
      </div>
    </div>
    
    )
  }

  

  return (

    <>
    {}
     <HomeContent/>
      
    </>
    
  )
}

export default Home