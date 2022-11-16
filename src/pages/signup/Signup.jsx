import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import DoneIcon from '@mui/icons-material/Done';
import { useState, useEffect } from 'react';

import './signup.scss'

function Signup() {
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const [containsSpecial, setContainespecial] = useState(false)
    const [containsCaps, setContainsCaps] = useState(false)
    const [atleastEightcharacters, setAtleasteightcharacters] = useState(false)
    const [containsnumber, setContainsnumber] = useState(false)
    const [passwordMatches, setPasswordmatches] = useState(false)

    var special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


    useEffect(() => {
            setContainsnumber(/\d/.test(password))
            setContainsCaps(/[A-Z]/.test(password) && /[a-z]/.test(password))
            setContainespecial(special_characters.test(password))
          
                setAtleasteightcharacters(password.length>=8)
            
            console.log(password);
            console.log(containsnumber)
        
    }, [password]); 

    useEffect(() => {
        
            setPasswordmatches(password!=0 && password==confirmpass)
        
            }, [confirmpass]); 

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
               
                <div className="username_div">
                <input type='text' placeholder='Username' className='input'/>
                </div>
            </div>
            <div className="form_field">
                
                <div className="email_div">
                <input type='text' placeholder='email address e.g ken@gmail.com' className='input'/>
                </div>
            </div>
            <div className="form_field">
                
                <div className='pass_div'>
                    <input type='password' 
                    placeholder='Enter password' 
                    className='input'
                    
                    onKeyUp={e=>{
                        
                        
                        setPassword(e.target.value); 
                        
                    
                        
                        }} 
                        />

                     <div className="pass_requirements">
                         <span style={{ color: atleastEightcharacters ? "green" : "" }}>{atleastEightcharacters && <DoneIcon />} Be at least 8 characters</span>
                        <span style={{ color: containsCaps ? "green" : "" }}>{containsCaps && <DoneIcon />}Contain at least one capital and one small letter</span>
                        <span style={{ color: containsnumber ? "green" : "" }}>{containsnumber? <DoneIcon />:""} Must contain at least one number</span>
                        <span style={{ color: containsSpecial ? "green" : "" }}>{containsSpecial? <DoneIcon />:""} Must contain at least a special character: @#$%^&*!</span>
                     </div>
                    </div>
            </div>
            <div className="form_field">
                
                <div className='pass_div'>
                <input type='password' 
                placeholder='Re-enter your password' 
                className='input'
                onChange={e=>{setConfirmpass(e.target.value)}}
                />
                <div className="pass_requirements">
                        <span style={{ color: passwordMatches ? "green" : "" }}>{passwordMatches && <DoneIcon />}Should match the above password</span>
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