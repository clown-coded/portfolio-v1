import React, { useState } from 'react'
import image1 from '../../public/assets/aesthete/aesthete-mockup-1.png'
import image2 from '../../public/assets/aesthete/aesthete-mockup-2.png'
import image3 from '../../public/assets/aesthete/aesthete-mockup-3.png'
import video from '../../public/assets/aesthete/aesthete-4.mp4'

const Aesthete = () => {
const [loading, setLoading] = useState(true)

function loadIn() {
    setLoading(false)
}

setTimeout(loadIn, 2000)

    return (
    <>
      {!loading && <div className='project-contents'>
                <div className='images-container'>

                    <div className='video-container'>
                    <video className='project-video' autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    
                    <img className='project-image' src={image1}></img>
                    <img className='project-image' src={image2}></img>
                    <img className='project-image' src={image3}></img>
              
           </div>
                <div className='project-info-container'>
                    <span className='title'>Aesthete Digital Marketplace</span>
                    
                    <span className='description'>A platform for designers from Aotearoa to sell their designs. </span>
                    <br />
                     <a href='https://github.com/5torey/sic-summative-3' target="_blank" rel="noopener noreferrer"><span className='description'>Github</span> </a>
                    
              
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Aesthete