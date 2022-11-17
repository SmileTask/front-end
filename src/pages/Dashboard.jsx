import React from 'react'
import Sidebar from '../components/dashboardComponents/Sidebar'
import CreateTask from '../components/dashboardComponents/createTask'
import '../css/pageCss/dashboard.css'

const Dashboard = () => {
    return(
        <div className='dashboardContainer'>
            <Sidebar />
            <CreateTask />
        </div>
    )
}

export default Dashboard