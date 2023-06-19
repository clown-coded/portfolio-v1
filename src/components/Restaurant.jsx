import React, { useState } from 'react'
import image1 from '../../public/assets/1154/1154-mockup-1.png'
import image2 from '../../public/assets/1154/1154-mockup-2.png'
import image3 from '../../public/assets/1154/1154-mockup-3.png'


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

                    
                    
                    
                    <img className='project-image' src={image1}></img>
                    <img className='project-image' src={image2}></img>
                    <img className='project-image' src={image3}></img>
              
           </div>
                <div className='project-info-container'>
                    <span className='title'>1154 Digital Ordering System</span>
                    <span className='description'>Project Information</span>
                    <span className='description'>A design for a tablet & mobile at table ordering system at 1154 Pastaria. Intended to be a digitized version of the current menu.</span>
              
          </div>
      
       </div>}
        </>
    //   
  )
}

export default Aesthete