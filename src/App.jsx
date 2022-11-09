import React from 'react'
import NavPage from './components/navComponents/NavPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Tarjeta from './pages/Tarjeta.jsx'
import { Route, Routes } from 'react-router-dom'
import Home2 from './pages/Home2.jsx'

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
              <div class="cards">
                {Tarjeta('Compañerismo',textoDummy)}
                {Tarjeta('Ten claras tus metas',textoDummy)}
                {Tarjeta('Liderazgo de equipo',textoDummy)}
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
        <Route path='/register' element={
          <div>
            <Register />
          </div>
        }/>
        <Route path='/login' element={
          <div>
            <Login />
          </div>
        }/>
      </Routes>  
    </div>
  )
}

export default App
