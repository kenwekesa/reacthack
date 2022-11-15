import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

import './signup.scss'

function Signup() {
    const [password, setPassword] = useState("")
    const [containsnumber, setContainsnumber] = useState(false)
  return (
  <div className="signup">
    <Navbar/>
    <div className="formContainer">

    <div className="signup_form">
        <div className="form_head">
            Sign up
        </div>
        <div className="form_body">
            <div className="form_field">
                <span className="label">Username:</span>
                <div className="username_div">
                <input type='text' placeholder='Username' className='input'/>
                </div>
            </div>
            <div className="form_field">
                <span className="label">Email:</span>
                <div className="email_div">
                <input type='text' placeholder='email address e.g ken@gmail.com' className='input'/>
                </div>
            </div>
            <div className="form_field">
                <span className="label">Password:</span>
                <div className='pass_div'>
                    <input type='password' 
                    placeholder='Enter password' 
                    className='input'
                    onChange={e=>{
                        setPassword(e.target.value); 
                        setContainsnumber(/\d/.test(password))
                        }} 
                        />

                     <div className="pass_requirements">
                         <span>{containsnumber? <DoneIcon />: "ha"}{password}{containsnumber} Be at least 8 charactes</span>
                        <span><DoneIcon />Contain at least one capital and one small letters</span>
                        <span><DoneIcon />Must contain at least one number</span>
                        <span><DoneIcon />Must contain at least a special character: @#$%^&*!</span>
                     </div>
                    </div>
            </div>
            <div className="form_field">
                <span className="label">Confirm password:</span>
                <div className='pass_div'>
                <input type='password' placeholder='Re-enter your password' className='input' />
                <div className="pass_requirements">
                        <span><DoneIcon />Should match the above password</span>
                     </div>
                </div>
            </div>
            <div className="button">
                <a href="#" className='submit_button'>Submit</a>
            </div>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Signup