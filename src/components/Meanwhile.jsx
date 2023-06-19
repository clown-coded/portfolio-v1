import React, { useState } from 'react'
import image1 from '../../public/assets/meanwhile/meanwhile-mockup-1.png'
import image2 from '../../public/assets/meanwhile/meanwhile-mockup-2.png'
import image3 from '../../public/assets/meanwhile/meanwhile-mockup-3.png'
import video from '../../public/assets/meanwhile/meanwhile.mp4'

const Meanwhile = () => {
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
                    <span className='title'>MEANWHILE Artist Run Space</span>
                   
                    <span className='description'>A redesign on the MEANWHILE Artist Run Space website. </span>
                    <br />
                    <span className='description'>Github</span>
                    
              
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Meanwhile