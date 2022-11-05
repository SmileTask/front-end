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
                <Tarjeta titulo='Compañerismo' contenido={textoDummy} color={{color:'#9B88E9'}}/>
                <Tarjeta titulo='Ten claras tus metas' contenido={textoDummy} color={{color:'#5794FA '}}/>
                <Tarjeta titulo='Liderazgo de equipo' contenido={textoDummy} color={{color:'#FCA311 '}}/>
            </div>
            <HomeOfrecimientos />
              <div className='Box'>
                  <BoxGrande titulos='Administrar tus tareas personales' contenidos={textoDummy} />
                  <BoxGrande titulos='Crea tu equipo personal' contenidos={textoDummy} />

              </div>
            <Testimonios />
            <div className='cards'>
                <Tarjeta titulo='' contenido={textoDummy} color={{color:'#9B88E9' }} />
                <Tarjeta titulo='' contenido={textoDummy} color={{color:'#5794FA '}}/>
                <Tarjeta titulo='' contenido={textoDummy} color={{color:'#FCA311 '}}/>
            </div>
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
