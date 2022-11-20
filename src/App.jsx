import React from 'react'
import NavPage from './components/navComponents/NavPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Tarjeta from './pages/Tarjeta.jsx'
import { Route, Routes } from 'react-router-dom'
import Home2 from './pages/Home2.jsx'
import HomeOfrecimientos from './pages/HomeOfrecimientos.jsx'
import BoxGrande from './pages/BoxGrande.jsx'
import Testimonios from './pages/Testimonios.jsx'
import Footer from './pages/Footer.jsx'

import { FaHandshake } from "react-icons/fa";
import { GiTrophy} from "react-icons/gi";
import { GiAlliedStar} from "react-icons/gi";
import { FaPaintBrush} from "react-icons/fa"
import { BiQr } from "react-icons/bi";





function App() {

  let textoDummy= `Lorem Ipsum is simply dummy text 
  of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's 
  standard dummy text ever since the 
  1500s`

  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <NavPage />
            <Home />
            <Home2 />
            
            <div className='cards'>
                <Tarjeta titulo='Compañerismo' contenido={textoDummy} icono=<FaHandshake style={{fontSize:'50px',padding: '10px', backgroundColor:'#f1effc', borderRadius:'10px'}}/> color={{color:'#9B88E9',bottom: '20px'}}/>
                <Tarjeta titulo='Ten claras tus metas' contenido={textoDummy} icono=<GiTrophy style={{fontSize:'50px',padding: '10px', backgroundColor:'#e8f1fe', borderRadius:'10px'}}/> color={{color:'#5794FA',bottom: '20px'}}/>
                <Tarjeta titulo='Liderazgo de equipo' contenido={textoDummy} icono=<GiAlliedStar style={{fontSize:'50px',padding: '10px', backgroundColor:'#fdf4e8', borderRadius:'10px'}}/> color={{color:'#FCA311',bottom: '20px'}}/>
            </div>
            <HomeOfrecimientos />
              <div className='Box'>
                  <BoxGrande titulos='Administrar tus tareas personales' contenidos={textoDummy} icono=<BiQr style={{color:'#FCA311'}}/>/>
                  <BoxGrande titulos='Crea tu equipo personal' contenidos={textoDummy} icono=<FaPaintBrush style={{color:'#35A1FB'}}/>/>

              </div>
            <Testimonios />
            <div className='cards'>

                <Tarjeta titulo='' contenido={textoDummy} />
                <Tarjeta titulo='' contenido={textoDummy} />
                <Tarjeta titulo='' contenido={textoDummy} />

            </div>
            <Footer/>
          </div>
          

        }/>
        <Route path='/about' element={
          <div>
            <NavPage />
            <About />
          </div>
        }/>
        <Route path='/contact' element={
          <div>
            <NavPage />
            <Contact />
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default App
