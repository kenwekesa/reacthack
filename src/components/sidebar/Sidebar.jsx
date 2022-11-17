import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span className='dash_head'>K2W</span>
      <div className='side_menu'>
        <Link to='/products'><span className="menu_item">Products</span></Link>
        <Link to='/users' ><span className="menu_item">Users</span></Link>
        <Link to='orders'><span className="menu_item">Orders</span></Link>
      </div>
    </div>
  )
}

export default Sidebar