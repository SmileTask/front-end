import React from "react"
import '../../css/dashboardCss/sidebar.css'
import LogoSmileTask from '../../../public/logoSmileTask.svg'
import HomeIcon from '../../../public/homeIcon.svg'
import EmailIcon from '../../../public/emailIcon.svg'
import ExitIcon from '../../../public/exitIcon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <img src={LogoSmileTask} />
        <p>Dashboard</p>
      </div>
      <div className="sidebarBody">
        <button href="/login">
          <img src={HomeIcon} />
          Inicio

        </button>
        <button>
          <img src={EmailIcon} />
          Contacto
        </button>
      </div>
      <div className="sidebarFooter">
        <button>
          <img src={ExitIcon} />
          Cerrar sesion
        </button>
      </div>
    </div>
  )
}


export default Sidebar
