import { useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(true)

  

 

  const HomeContent = () => {
    return (
      <div className='content-component' id='homeComponent' style={{
        width: 0}} >

      
     <div className='joker-container'>
        <span className='click-zone'>  </span>
        {/* <Link to={'/secret'} onClick={console.log('clicked')} ></Link> */}
    <img src="../src/assets/joker-card-black-portfolio.png" alt="" className='joker'/>
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