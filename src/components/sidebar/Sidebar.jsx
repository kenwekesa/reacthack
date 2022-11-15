import React from 'react'

import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span className='dash_head'>K2W</span>
      <div className='side_menu'>
        <span className="menu_item">Products</span>
        <span className="menu_item">Users</span>
        <span className="menu_item">Orders</span>
      </div>
    </div>
  )
}

export default Sidebar