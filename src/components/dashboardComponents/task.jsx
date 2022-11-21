import '../../css/dashboardCss/task.css'

const baseURL = "http://localhost:5000"

function Task(props) {
    const { task } = props

    return(
        <div className="containerTask" key={task}>
            <div className="infoTask">
                <div className='dataTask'>
                    {task.title} - {task.time}
                </div>
                <div className='actions'>
                    <button>Actualizar</button>
                    <button>Terminar</button>
                </div>
            </div>
        </div>
    )


}

export default Task
