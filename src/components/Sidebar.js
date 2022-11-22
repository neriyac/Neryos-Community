import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'


// styles & images
import './Sidebar.css'
import AddIcon from '../assets/activity_icon.svg'
import DashboardIcon from '../assets/dashboard_icon.svg'

export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
            {/* avatar and user here later */}
            {!user && <p>Welcome !<br />Please Sign up to reveal more.<br />If you already signed up - login</p>}
            {user && (<p>Welcome {user.displayName}</p>)}
        </div>
        {user && (<nav className="links">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="dashboard icon" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create">
                        <img src={AddIcon} alt="add project icon" />
                        <span>New Project..</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        )}
      </div>
    </div>
  )
}
