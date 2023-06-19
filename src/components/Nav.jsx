import {useEffect, useState}from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation().pathname;

    useEffect(() => {
        console.log(location);
        const projects = document.getElementById('projectsLink')
        const info = document.getElementById('infoLink')
        const contact = document.getElementById('contactLink')
        console.log(contact);
        if (location === '/projects') {
            console.log('in projects')
            projects.classList.add('active')
            info.classList.remove('active')
            contact.classList.remove('active')
        }
        if (location === '/info') {
             projects.classList.remove('active')
            info.classList.add('active')
            contact.classList.remove('active')
        }
        if (location === '/contact') {
              projects.classList.remove('active')
            info.classList.remove('active')
            contact.classList.add('active')
        }
        if (location === '/contact') {
              projects.classList.remove('active')
            info.classList.remove('active')
            contact.classList.add('active')
        }
    }, [location])

    function loadIn() {
        setLoading(false)
    }

    setTimeout(loadIn, 2000)

    return (
      
        <div className='navbar'>
            {!loading && <>
                <Link to={'/'}><div className='logo'>samantha mitchell</div></Link>
          <div className='tag'>Designer & developer</div>
          <ul className='navlinks'>
            <Link to={'/projects'}><li id='projectsLink' className=''>projects</li></Link>
                    <Link to={'/info'}><li id='infoLink'>info</li>
                    </Link>
                    <Link to={'/contact'} ><li id='contactLink'>contact</li></Link>
                    
         
          </ul>
            </>}
          
          
    </div>
  )
}

export default Nav