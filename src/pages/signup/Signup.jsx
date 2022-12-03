import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import DoneIcon from '@mui/icons-material/Done';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
//import OutlinedInput from '@mui/material';

import OutlinedInput from '@mui/material/OutlinedInput';

import { useState, useEffect } from 'react';

import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { Visibility, VisibilityOff } from '@mui/icons-material';



import './signup.scss'

function Signup(props) {


    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const [containsSpecial, setContainespecial] = useState(false)
    const [containsCaps, setContainsCaps] = useState(false)
    const [atleastEightcharacters, setAtleasteightcharacters] = useState(false)
    const [containsnumber, setContainsnumber] = useState(false)
    const [passwordMatches, setPasswordmatches] = useState(false)

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });




    var special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    useEffect(() => {
        setContainsnumber(/\d/.test(password))
        setContainsCaps(/[A-Z]/.test(password) && /[a-z]/.test(password))
        setContainespecial(special_characters.test(password))

        setAtleasteightcharacters(password.length >= 8)

        console.log(password);
        console.log(containsnumber)

    }, [password]);

    useEffect(() => {

        setPasswordmatches(password != 0 && password == confirmpass)

    }, [confirmpass]);


    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleChange = (event) => {
        setPassword(event.target.value)
    };


    return (
        <div className="signup">
            <Navbar title={props.name} />
            <div className="formContainer">

                <div className="signup_form">
                    <div className="form_head">
                        Sign up
                    </div>
                    <div className="form_body">
                        <div className="form_field">

                            <div className="username_div">
                                <input type='text' placeholder='Username' className='input' />
                            </div>
                        </div>
                        <div className="form_field">

                            <div className="email_div">
                                <input type='text' placeholder='email address e.g ken@gmail.com' className='input' />
                            </div>
                        </div>



                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>


                        <div className="form_field">

                            <div className='pass_div'>
                                <input type='password'
                                    placeholder='Enter password'
                                    className='input'


                                    onKeyUp={e => {


                                        setPassword(e.target.value);



                                    }}

                                />




                                <div className="pass_requirements">
                                    <span style={{ color: atleastEightcharacters ? "green" : "" }}>{atleastEightcharacters && <DoneIcon />} Be at least 8 characters</span>
                                    <span style={{ color: containsCaps ? "green" : "" }}>{containsCaps && <DoneIcon />}Contain at least one capital and one small letter</span>
                                    <span style={{ color: containsnumber ? "green" : "" }}>{containsnumber ? <DoneIcon /> : ""} Must contain at least one number</span>
                                    <span style={{ color: containsSpecial ? "green" : "" }}>{containsSpecial ? <DoneIcon /> : ""} Must contain at least a special character: @#$%^&*!</span>
                                </div>
                            </div>
                        </div>
                        <div className="form_field">

                            <div className='pass_div'>
                                <input type='password'
                                    placeholder='Re-enter your password'
                                    className='input'
                                    onChange={e => { setConfirmpass(e.target.value) }}
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