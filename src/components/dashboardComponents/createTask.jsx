import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import '../../css/dashboardCss/createTask.css'

const api_uri = 'http://localhost:5000'

const createTask = () => {

    const [data, setData] = useState({
        tittle: "",
        time: "",
        description: ""
    })

    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        })
    }

    const sendTask = (event) => {
        event.preventDefault();
        axios.post(api_uri+'/api/task', {...data} 
        ).then(function (response) {
            console.log(response)
            response.data.response ? (
                window.alert(response.data.message),
                location.href='/dashboard'
            ) : (
                window.alert(response.data.message),
                location.href='/dashboard'
            )
        }
        ).catch(function (response) {
            console.log(response)
        })
    }

    return(
        <section className='createTask-container'>
            <div className='title'>
                CREAR TAREA
            </div>
            <div className='form'>
                <form onSubmit={sendTask}>
                    <div className='body'>
                        <input 
                            type="text" 
                            required 
                            placeholder='Titulo'
                            name='title'   
                            onChange={handleInput} 
                        />
                        <input 
                            type="text" 
                            required 
                            placeholder='Cúando'
                            name='time' 
                            onChange={handleInput}    
                        />
                        <input 
                            type="text" 
                            required 
                            placeholder='Descripción'
                            name='description'
                            onChange={handleInput} 
                        />
                    </div>
                    <div className='button'>
                        <button type='submit'>Crear</button> 
                    </div>               
                </form>
            </div>
        </section>
    )
}

export default createTask