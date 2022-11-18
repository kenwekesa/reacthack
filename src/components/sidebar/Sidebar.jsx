import React from 'react'
import { Link } from 'react-router-dom'

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';


import './sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span className='dash_head'>K2W</span>
      <div className='side_menu'>
        <Link to='/' className="menu_item"><span ><HomeIcon />Home</span></Link>
        <Link to='/products' className="menu_item"><span ><SellIcon />Products</span></Link>
        <Link to='/users' className="menu_item"><span><SupervisedUserCircleIcon />Users</span></Link>
        <Link to='/orders' className="menu_item"><span><ShoppingCartIcon />Orders</span></Link>
      </div>
    </div>
  )
}

export default Sidebar