import React from 'react'
import '../css/pageCss/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="containerHome">
            <div className="home-content">
                <div className="content-info">
                    <h2>Una plataforma comunitaria</h2>
                    <h3>para trabajar en equipo</h3>
                    <div className="info-parrafo">
                        <p>Detras de cada persona existosa está la capacidad de trabajar</p>
                        <p>en equipo para lograr las metas propuestas</p>
                    </div>
                    <div className="access">
                        <span><Link to='/login'>Acceso</Link></span>
                        <span><Link to='/register'>Crear tu equipo</Link></span>
                    </div>
                </div>
            </div>
            <div className="slider">
                <h1>Aqui va es slider del home</h1>
            </div>
        </div>
    )
}

export default Home