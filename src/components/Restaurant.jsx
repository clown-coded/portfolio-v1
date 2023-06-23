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

                <div className="inner-container">
                <span className='title'>1154 Digital Ordering System</span>
                <span className='description'>1154 Pastaria is a pasta restaurant on Cuba st, Wellington. 
                A proposed design for a digitization of the current menu to be used on tablet & mobile for at table ordering.</span>
                <br/>
                <span className='description'>This project was for academic purposes only.</span>
              
                    </div>
                    
                    <br />
                    <div className="links-container">
                    <div className='link'>
                        <span>Stack</span>
                        
                       <span className='stack-info'>Built with HTML, CSS and Javascript </span>
                        </div>

                        <span className='link'><a href='https://github.com/clown-coded/1154-menu' target="_blank" rel="noopener noreferrer">Github ↗</a></span> 
                    </div>
                    </div>
                    


          
      
       </div>}
        </>
    //   
  )
}

export default Aesthete