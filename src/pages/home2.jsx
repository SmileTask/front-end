import React from 'react'
import img from '../assets/agradecimientos.svg'
import '../css/pageCss/home.css'
const Home2 = () =>{
    return (
        <div className="container">
             <h3 className="Agradecimientos">Agradecimientos especiales</h3>
             <img src={img} />
             <h3 className='ConNostros'>Con nosotros aprenderas las <br></br>bases para el trabajo en equipo prospero</h3>
        </div>
    )
}

export default Home2
