import React from 'react'
import '../../css/registercss/formRegsiter.css'
import { Link } from 'react-router-dom'

const registerForm = () => {
    return(
        <div className="content-register">
            <div className='register-header'>
                <p>Empieza gratis</p>
                <p>Crear una cuenta</p>
                <p>¿Ya eres usuario?<Link to='/login'>Ingresa aqui</Link></p>
            </div>
            <form action="">
                <input type="text" placeholder='Nombre'/>
                <input type="text" name="" id="" placeholder='Apellido'/>
                <br />
                <input type="text" placeholder='Profesión' />
                <input type="text" name="" id="" placeholder='Número'/>
                <br />
                <input type="email" placeholder='Email' />
                <br />
                <input type="text" placeholder='Contraseña' />
                
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default registerForm