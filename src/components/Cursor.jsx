import React, { useState, useEffect } from 'react'

const Cursor = () => {
    
    const useMousePosition = () => {
         const [mousePosition, setMousePosition] = useState({ x: null, y: null })
    
    useEffect(() => {
        const updateMousePosition = (event) => {
           setMousePosition({x: event.clientX, y: event.clientY})
        }
        window.addEventListener('mousemove', updateMousePosition);
        
        return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
        
    }, [])
        
        return mousePosition;

    }

    const mousePosition = useMousePosition();
   
   
  return (
      <div className='cursor' style={{ transform: 'translate3d(' + mousePosition.x + 'px, ' + mousePosition.y + 'px, 0)' }}> <img src="src\assets\cursor.png" alt="" /></div>
  )
}

export default Cursor