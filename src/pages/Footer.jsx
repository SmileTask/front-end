import React from 'react'
import '../css/pageCss/home.css'
import icono from '../assets/smile.svg'

const Footer = () => {
    return (
<div>
<header>
    </header>
    <main>
    </main>
    <footer className="footer">
    <div className="footer__addr">
    <h1 className="footer__logo"><img className="logoFooter" src={icono} /> Smile</h1> 
        <p>
        ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur<br />
            
        
        </p>
    </div>
    
    <ul className="footer__nav">
        
    <li className="nav__item">
        <h2 className="nav__title">Smile</h2>
        
        <ul className="nav__ul">
            <li>
            <a href="#">Home</a>
            </li>
            
            <li>
            <a href="#">About Us</a>
            </li>
            
            <li>
            <a href="#">Contact</a>
            </li>
        </ul>
        </li>

        <li className="nav__item">
        <h2 className="nav__title">Redes Sociales</h2>
        
        <ul className="nav__ul">
            <li>
            <i className="bx bxl-linkedin-square"> </i><a href="https://www.linkedin.com/in/camilo-andres-moreno-roa-9981ba169/">LinkedIn</a>
            </li>
            
            <li>
            <i className="bx bxl-instagram-alt"></i><a href="https://www.instagram.com/taurodev/">Instagram</a>
            </li>
            
            <li>
            <i className="bx bxl-github"></i><a href="https://github.com/Camilo1423">Github</a>
            </li>
        </ul>
        </li>
        
        <li className="nav__item">
        <h2 className="nav__title">Contacto</h2>
        
        <ul className="nav__ul">
            <li>
            <a href="#">www.taurodev.com</a>
            </li>
            
            <li>
            <a href="#">gerencia@taurodev.com</a>
            </li>
            
            <li>
            <a href="#">+57 322 792 3083</a>
            </li>
        </ul>
        </li>
    </ul>
    <hr className="divisor"/>
    <div className="legal">
    
        <p>&copy; 2022 Tauro Dev. Todos los derechos reservados.</p>
        
        <div className="legal__links">
        Terminos y condiciones | Políticas de privacidad
        </div>
    </div>
    </footer>
    </div>
        

        
        
    );
};

export default Footer