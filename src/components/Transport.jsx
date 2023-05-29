import React, { useState } from 'react'
import image1 from '../assets/transport/transport-mockup-1.png'
import image2 from '../assets/transport/transport-mockup-2.png'
import video from '../assets/transport/transport-2.mp4'
import video2 from '../assets/transport/transport-4.mp4'

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
                    <span className='title'>Be Your Own Tour Guide</span>
                    <span className='description'>Project Information</span>
                    <span className='description'>A description of aesthete that i jhavent written yet whoops</span>
              
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Transport