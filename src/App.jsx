import React from 'react'
import NavPage from './components/navComponents/NavPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <NavPage />
            <Home />
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
