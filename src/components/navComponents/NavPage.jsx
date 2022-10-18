import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/smile.svg'
import '../../css/navCss/NavPage.css'

const NavPage = () => {
    return(
        <div className="navContainer">
            <div className="logoNav">
                <img src={logo} alt="logo-smile-task" />
                <h1>Smile.</h1>
            </div>
            <nav className="linkNav">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="socialNav">
                <a href="https://www.linkedin.com/in/camilo-andres-moreno-roa-9981ba169/" target="_black"><i className='bx bxl-linkedin-square'></i></a>
                <a href="https://www.instagram.com/taurodev/" target="_blanck"><i className='bx bxl-instagram-alt'></i></a>
                <a href="https://github.com/Camilo1423" target="_blanck"><i className='bx bxl-github' ></i></a>
            </div>
        </div>
    )
}

export default NavPage