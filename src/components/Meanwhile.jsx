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

                <div className="inner-container">
                <span className='title'><i>MEANWHILE</i> Artist Run Space</span>
                    
                <span className='description'>MEANWHILE Artist Run Space is a gallery and studio space supporting emerging and experimental art practices in Te Whanganui-a-Tara.  The space nurtures, supports and promotes the exceptional work of contemporary Aotearoa and International artists. </span>
                    </div>
                    
                    <br />
                    <div className="links-container">
                    <div className='link'>
                        <span>01. Stack</span>
                        
                       <span className='stack-info'>Built with WordPress and React </span>
                        </div>

                        <span className='link'><a href='https://github.com/clown-coded/mw-website' target="_blank" rel="noopener noreferrer">02. Github ↗</a></span> 
                        <span className='link'><a href='https://meanwhile.vercel.app/' target="_blank" rel="noopener noreferrer">03. Live site ↗</a></span>
          </div>
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Meanwhile