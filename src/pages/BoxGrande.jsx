import React from 'react'
import '../css/pageCss/home.css'
const BoxGrande = (props) => {
  return (
    <div className="cardbg card-1bg">
      <div className="card__iconbg">{props.icono}{props.titulos}</div>
      <h2 className="card__titlebg">{props.contenidos}</h2>
    </div>

  );
};

export default BoxGrande