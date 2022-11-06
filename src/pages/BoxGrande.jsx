import React from 'react'
import '../css/pageCss/home.css'
const BoxGrande = (props) => {
  return (
    <div className="cardbg card-1bg">
      <div className="card__iconbg">{props.titulos}<i className="fas fa-bolt"></i></div>
      <p className="card__exitbg"><i className="fas fa-times"></i></p>
      <h2 className="card__titlebg">{props.contenidos}</h2>
    </div>

  );
};

export default BoxGrande