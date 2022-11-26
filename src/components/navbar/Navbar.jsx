import React from 'react'
import "./navbar.scss"

import { useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// { ArrowDownward } from '@mui/icons-material';
import { ArrowDropDown } from '@mui/icons-material';



function Navbar(props) {

  var [toggle, setToggle] = useState(false)
  return (
    <div className='navbar'>
      <ul className="nav_menu">
        <li className="menu_item">{props.title}</li>



      </ul>
      <div className="user" onClick={() => { setToggle(!toggle) }}>

        <AccountCircleIcon />
        <ArrowDropDown />
        {toggle &&
          <div className="dropdown_menu">
            <div className="login_btn">Login</div>
            <div className="signup_btn">Signup</div>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar