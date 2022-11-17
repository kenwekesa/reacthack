import React from 'react'
import { Link } from 'react-router-dom'

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span className='dash_head'>K2W</span>
      <div className='side_menu'>
        <Link to='/products' className="menu_item"><span >Products</span></Link>
        <Link to='/users' className="menu_item"><span><SupervisedUserCircleIcon />Users</span></Link>
        <Link to='orders' className="menu_item"><span><ShoppingBagIcon />Orders</span></Link>
      </div>
    </div>
  )
}

export default Sidebar