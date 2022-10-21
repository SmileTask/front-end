import React from 'react'
import '../css/pageCss/contact.css'

const contact = () => {
    return(
        <div className="containerContact">
            <div className="contact-content">
                <div className="contentContact-info">
                    <h2>Contact Us</h2>
                    <h3>monday-Sunday: 7:00am - 5:00pm</h3>
                    <div className="contact-info">
                        <p>Email: SmileTask@gmail.com</p>
                        <p>Telefono: 3112292169</p>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/camilo-andres-moreno-roa-9981ba169/" target="_black"><i className='bx bxl-linkedin-square'></i></a>
                        <a href="https://www.instagram.com/taurodev/" target="_blanck"><i className='bx bxl-instagram-alt'></i></a>
                        <a href="https://github.com/Camilo1423" target="_blanck"><i className='bx bxl-github' ></i></a>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default contact