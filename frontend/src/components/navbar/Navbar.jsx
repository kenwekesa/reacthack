import React from 'react'
import "./navbar.scss"

import { useState } from 'react';

import { Link } from 'react-router-dom';

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
            <Link to='/signup' className="signup_btn"><span >Signup</span></Link>

          </div>
        }

      </div>
    </div>
  )
}

export default Navbar