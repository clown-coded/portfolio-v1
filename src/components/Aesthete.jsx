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
                    <div className="inner-container">
                    <span className='title'>Aesthete Digital Marketplace</span>
                    
                    <span className='description'>Aesthete is a platform for emerging designers and creatives from across Aotearoa New Zealand to list their designs for purchase. Focusing on goods and garments (painting, art prints, ceramics & pottery, clothing, jewellery, accessories), the platform aims to encourage owning and collecting art as a habit, not a luxury, and to move away from mass consumption. </span>
                    
                    </div>
                    
                    <br />
                    <div className="links-container">
                    <div className='link'>
                        <span>01. Stack</span>
                        
                       <span className='stack-info'>Built with HTML, CSS, Javascript, MongoDB </span>
                        </div>

                    <span className='link'><a href='https://github.com/5torey/sic-summative-3' target="_blank" rel="noopener noreferrer">02. Github   ↗</a></span>
                    </div>
                    
                    
              
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Aesthete