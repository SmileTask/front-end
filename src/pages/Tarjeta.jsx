import React from 'react'
import '../css/pageCss/home.css'
const Tarjeta = (props) => {
  return (
    <div className="card card-1">
      <div className="card__icon" style={props.color}>{props.titulo}<i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">{props.contenido}</h2>
      <img className="imagenAndres" src="" alt="" />
    </div>

  );
};

export default Tarjeta