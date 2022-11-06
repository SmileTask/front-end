import React from 'react'
import '../css/pageCss/home.css'
import foto from '../assets/iconoAndres.png'

const Tarjeta = (props) => {
  return (
    <div className="card card-1">
      <div className="card__icon" style={props.color}>{props.titulo}<i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">{props.contenido}</h2>
      <br></br>
      <div><img className="foto" src={foto} /><span><h2 className="nombre" > Andres Moreno Roa <span className="nombre2"><br></br>Dev Front End</span></h2></span>

    </div>
    </div>

  );
};

export default Tarjeta  