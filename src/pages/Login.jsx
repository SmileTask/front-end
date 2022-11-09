import React from 'react';
import LoginHeader from '../components/loginComponents/headerLogin'
import LoginForm from '../components/loginComponents/formLogin'
import '../css/pageCss/login.css'

const Login = () => {
    return (
        <div className='containerLogin'>
            <div className='content-login'>
                <LoginHeader />
                <LoginForm />
            </div>
        </div>
    )
}

export default Login