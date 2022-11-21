import React from 'react'
import Sidebar from '../components/dashboardComponents/Sidebar'
import CreateTask from '../components/dashboardComponents/createTask'
import ShowTasks from '../components/dashboardComponents/showTasks'
import '../css/pageCss/dashboard.css'

const Dashboard = () => {
    return(
        <div className='dashboardContainer'>
            <Sidebar />
            <CreateTask />
            <ShowTasks />
        </div>
    )
}

export default Dashboard