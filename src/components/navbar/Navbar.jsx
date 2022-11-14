import React from 'react'
import "./navbar.scss"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Navbar() {
  return (
    <div className='navbar'>
      <ul className="nav_menu">
        <li className="menu_item">Home</li>
        <li className="menu_item">Products</li>
        <li className="menu_item">Users</li>
        <li className="menu_item">Orders</li>
        
      </ul>
      <div className="user">
          <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Navbar