import React from 'react'
import '../../css/loginCss/loginheader.css'
import { Link } from 'react-router-dom'

const LoginHeader = () => {
    return(
        <div className="headerLogin">
            <p>HI, hello again :D</p>
            <p>¿No tienes cuenta?<Link to="/register">Create una aqui</Link></p>
        </div>
    )
}

export default LoginHeader