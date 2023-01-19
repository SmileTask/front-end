import axios from "axios"
import { useReducer , useEffect } from "react"
import "../../css/dashboardCss/showTasks.css"

import Task from './task.jsx'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, tasks: action.payload, loading: false }
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const showTasks = () => {
  const [{ loading, error, tasks }, dispatch] = useReducer(reducer, {
    tasks: ["hola"],
    loading: true,
    error: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" })
      try {
        const result = await axios.get("http://localhost:5000/api/task")
        dispatch({ type: "FETCH_SUCCESS", payload: result.data })
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message })
      }
    }
    fetchData()
  }, [])
  return (
    <div className="tasksContainer">
      
        {loading ? (
          console.log(loading)
        ) : error ? (
          console.log(error)
        ) : (
          <div>
            {tasks.map((task) => (
              <div key={task._id}>
                <Task task={task} ></Task>
              </div>
            ))}
          </div>
        )}
      
    </div>
  )
}

export default showTasks
