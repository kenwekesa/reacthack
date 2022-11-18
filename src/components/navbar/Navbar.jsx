import React from 'react'
import "./navbar.scss"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';



function Navbar(props) {
  return (
    <div className='navbar'>
      <ul className="nav_menu">
        <li className="menu_item">{props.title}</li>



      </ul>
      <div className="user">

        <AccountCircleIcon />
        <ArrowDropDown />

      </div>
    </div>
  )
}

export default Navbar