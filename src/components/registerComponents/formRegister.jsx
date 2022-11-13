import React, { useState } from "react"
import "../../css/registercss/formRegister.css"
import { Link } from "react-router-dom"
import axios from 'axios'

const api_uri = 'http://localhost:5000'

const registerForm = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    username: "",
    numberPhone: "",
    genero: "",
    email: "",
    password: ""
  })


  const inputSubmit = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    axios.post(api_uri+'/api/user/register', {...data} )
    .then(function (response) {
      console.log(response);
      response.data ? (
        window.alert('Ususario creado con exito'),
        location.href='/login' 
      ) : ( 
        window.alert('El usuario no se ha podido crear correctamente'),
        location.href='/register'
      )
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className="content-register">
      <div className="register-header">
        <p>Empieza gratis</p>
        <p>Crear una cuenta</p>
        <p>
          ¿Ya eres usuario?<Link to="/login">Ingresa aqui</Link>
        </p>
      </div>
      <form action="" className="registerForm" onSubmit={sendData}>
        <input
          className="form-control halfInput"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={inputSubmit}
          required
        />
        <input
          className="form-control halfInput"
          type="text"
          name="lastname"
          placeholder="Apellido"
          onChange={inputSubmit}
          required
        />
        <br />
        <input
          className="form-control halfInput"
          type="text"
          name="username"
          placeholder="Username"
          onChange={inputSubmit}
          required
        />
        <input
          className="form-control halfInput"
          type="text"
          name="numberPhone"
          placeholder="Número"
          onChange={inputSubmit}
          required
        />
        <br />
        <input 
          className="form-control fullInput" 
          type="text" 
          name="genero"
          placeholder="Genero(male or female)"
          onChange={inputSubmit}
          required
        />
        {/* <p id="gender">GENERO</p>
        <input
          type="radio"
          id="male"
          name="male"
          value="male"
          onChange={inputSubmit}
        />
        <label for="male">Hombre</label>
        <input
          type="radio"
          id="female"
          name="female"
          value="female"
          onChange={inputSubmit}
        />
        <label for="female">Mujer</label> */}

        <input
          className="form-control fullInput"
          type="email"
          name="email"
          placeholder="Email"
          onChange={inputSubmit}
          required
        />
        <br />
        <input
          className="form-control fullInput"
          type="text"
          name="password"
          placeholder="Contraseña"
          onChange={inputSubmit}
          required
        />
        <br />
        <button type="submit" className="registerButton">
          Registrar
        </button>
      </form>
    </div>
  )
}

export default registerForm
