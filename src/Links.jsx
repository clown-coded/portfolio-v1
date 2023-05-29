import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Secret from "./pages/Secret";


const Links = () => {
  return (
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/projects' element={<Projects />} />
          <Route  path='/info' element={<Info />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/secret' element={<Secret />} />
          
         
   
      
    </Routes>
  )
}

export default Links