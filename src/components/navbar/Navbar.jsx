import React from 'react'
import "./navbar.scss"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Navbar() {
  return (
    <div className='navbar'>
      <ul className="nav_menu">
        <li className="menu_item">Dashboard</li>
      
       
        
      </ul>
      <div className="user">
          <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Navbar