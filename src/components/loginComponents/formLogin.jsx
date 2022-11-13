import React, { useState } from "react"
import "../../css/loginCss/loginForm.css"
import axios from 'axios'

const api_uri = 'http://localhost:5000'

const loginForm = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        })
        console.log(data);
    }

    const logIn = (event) => {
        event.preventDefault()
        axios.post(api_uri+"/api/user/login", {...data}
        ).then(function(response) {
            console.log(response);
            response.data.response ? location.href='/dashboard' : (
              window.alert('Las credenciales ingresadas no son correctas'),
              location.href='/login'
            )
        }).catch(function(error) {
            console.log(error);
        });
    }

  return (
    <div className="formLogin">
      <form action="" onSubmit={logIn}>
        <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            onChange={handleInput}
            required 
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default loginForm
