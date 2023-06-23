import React, { useState } from 'react'
import image1 from '../../public/assets/transport/transport-mockup-1.png'
import image2 from '../../public/assets/transport/transport-mockup-2.png'
import video from '../../public/assets/transport/transport-2.mp4'
import video2 from '../../public/assets/transport/transport-4.mp4'

const Transport = () => {
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
                    <source src={video2} type="video/mp4"/>
                        </video>
                    </div>
                    
                    
                    <img className='project-image' src={image1}></img>
                    <div className='video-container'>
                    <video className='project-video' autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <img className='project-image' src={image2}></img>
                    {/* <img className='project-image' src={image3}></img> */}
              
           </div>
                <div className='project-info-container'>
                <div className="inner-container">
                <span className='title'>Be Your Own Tour Guide</span>
                <span className='description'>A car rental collaboration between Tourism NZ and ARTMAP to lower barriers to arts tourism </span>
                <br/>
                <span className='description'>This project was for academic purposes only.</span>
                    </div>
                    
                    <br />
                    <div className="links-container">
                    <div className='link'>
                        <span>Stack</span>
                        
                       <span className='stack-info'>Built with HTML, CSS, Javascript, jQuery </span>
                        </div>

                        <span className='link'><a href='https://github.com/clown-coded/transport-app' target="_blank" rel="noopener noreferrer">Github ↗</a></span> 
                    </div>
                    </div>
                    
                    
         
      
       </div>}
        </>
    //   
  )
}

export default Transport