import React from 'react';
import '../../css/loginCss/loginForm.css'

const loginForm = () => {

    

    const logIn = (event) => {

    }
    
    return (
        <div className="formLogin">
            <form action="" onSubmit={logIn}>
                
                <input type="email" placeholder='Email' required/>
                
                <input type="password" placeholder='Password' required/>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default loginForm