import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import DoneIcon from '@mui/icons-material/Done';

import { useContext } from 'react'

//import OutlinedInput from '@mui/material';


import Users from '../users/Users'


import { useState, useEffect } from 'react';

import userContext from '../../contexts/UserContext';





import './signup.scss'

function Signup(props) {



    const users_list = useContext(userContext)



    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const [containsSpecial, setContainespecial] = useState(false)
    const [containsCaps, setContainsCaps] = useState(false)
    const [atleastEightcharacters, setAtleasteightcharacters] = useState(false)
    const [containsnumber, setContainsnumber] = useState(false)
    const [passwordMatches, setPasswordmatches] = useState(false)

    const [values, setValues] = useState({
        password: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        address: ""

    });



    const handleUsernameChange = (e) => {
        setValues({ ...values, username: e.target.value })

        //console.log(values)
    }

    const handleCityChange = (e) => {
        setValues({ ...values, city: e.target.value })

        console.log(values)
    }

    const handlePhoneChange = (e) => {
        setValues({ ...values, phone: e.target.value })

        console.log(values)
    }

    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value })

        console.log(values)
    }

    const handleAddressChange = (e) => {
        setValues({ ...values, address: e.target.value })

        console.log(values)
    }

    const handleSubmit = () => {
        users_list.push(values)
        console.log(users_list)
        return (
            <userContext.Provider value={users_list}>
                <Users />

            </userContext.Provider>
        )

    }


    useEffect(() => {
        const special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        setContainsnumber(/\d/.test(password))
        setContainsCaps(/[A-Z]/.test(password) && /[a-z]/.test(password))
        setContainespecial(special_characters.test(password))

        setAtleasteightcharacters(password.length >= 8)

        setValues({ values, password: password })

        console.log(values)



    }, [password]);

    useEffect(() => {

        setPasswordmatches(password !== 0 && password === confirmpass)

    }, [password, confirmpass]);





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
                                <input type='text' placeholder='Username'
                                    className='input'
                                    onChange={handleUsernameChange} />
                            </div>
                        </div>
                        <div className="form_field">

                            <div className="email_div">
                                <input type='text'
                                    placeholder='email address e.g ken@gmail.com'
                                    className='input'
                                    onChange={handleEmailChange} />
                            </div>
                        </div>

                        <div className="form_field">

                            <div className="city_div">
                                <input type='text'
                                    placeholder='City'
                                    className='input'
                                    onChange={handleCityChange} />
                            </div>
                        </div>

                        <div className="form_field">

                            <div className="phone_div">
                                <input type='text'
                                    placeholder='Phone Number eg 073*******'
                                    className='input'
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>

                        <div className="form_field">

                            <div className="address_div">
                                <input type='text' placeholder='Physical Address' className='input'
                                    onChange={handleAddressChange}
                                />
                            </div>
                        </div>





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
                            <span className='submit_button' onClick={handleSubmit}>Submit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup