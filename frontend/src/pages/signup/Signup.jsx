import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import DoneIcon from '@mui/icons-material/Done';

import { useContext } from 'react'

//import OutlinedInput from '@mui/material';


import Users from '../users/Users'


import { useState, useEffect } from 'react';
import axios from 'axios'

import userContext from '../../contexts/UserContext';




import Loadingmodal from '../../components/modal/Loadingmodal'

import './signup.scss'
export const MessagemodalContext = React.createContext();




function Signup(props) {



    const { users, setUsers } = useContext(userContext)





    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    const [confirmpass, setConfirmpass] = useState("")

    const [containsSpecial, setContainespecial] = useState(false)
    const [containsCaps, setContainsCaps] = useState(false)
    const [atleastEightcharacters, setAtleasteightcharacters] = useState(false)
    const [containsnumber, setContainsnumber] = useState(false)
    const [passwordMatches, setPasswordmatches] = useState(false)

    const [selectedSkill, setSelectedSkill] = useState([])

    const [modalvisibility, setModalVisibility] = useState(false)

    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null)

    const [values, setValues] = useState({
        password: "",
        username: "",
        email: "",
        city: "",
        phone: "",
        address: ""

    });

    const skills = ["Programming","Graphics","Android","Data analysis"]

    const handleUsernameChange = (e) => {
        setValues({ ...values, username: e.target.value })
        setUsername(e.target.value)

        //console.log(values)
    }

    const handleCityChange = (e) => {
        setValues({ ...values, city: e.target.value })
        setCity(e.target.value)


    }

    const handlePhoneChange = (e) => {
        setValues({ ...values, phone: e.target.value })
        setPhone(e.target.value)

    }

    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value })
        setEmail(e.target.value)


    }

    const handleAddressChange = (e) => {
        setValues({ ...values, address: e.target.value })
        setAddress(e.target.value)


    }

  

        
        const handleSubmit =async () =>
    {
      try {
        
        
        
        const user = {"username":username,"email":email,"password":password, "city":city, "skills":selectedSkill,"phone":phone,"address":address}
        
        const res = await axios.post(`/users/`,user).then(res => {
            //setData(res.data);
            setMessage(res.data);
            setType("success")
            setModalVisibility(true)
          })
          .catch(err => {
            setMessage(err.message);
            setType("error")
            setModalVisibility(true)
          })
      } catch (error) {
        console.log(error)
      }
    }



    

    const handleSkillSelect = (skill) => {

    

       setSelectedSkill(()=>
        {return (
          selectedSkill.includes(skill)? selectedSkill.filter(e => e !== skill):[...selectedSkill,skill]
        )
        
        
    }
    )
    console.log(selectedSkill)
}


    useEffect(() => {
        const special_characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        setContainsnumber(/\d/.test(password))
        setContainsCaps(/[A-Z]/.test(password) && /[a-z]/.test(password))
        setContainespecial(special_characters.test(password))

        setAtleasteightcharacters(password.length >= 8)

        setValues({ values, password: password })





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
                    {modalvisibility && <MessagemodalContext.Provider value={{modalvisibility, setModalVisibility}}>
                             <Loadingmodal message = {message} type={type} />
                        </MessagemodalContext.Provider>}


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

                        <div className="form_field">

<div className="address_div">
   {skills.map((skill, index)=> (
    <div>

<input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={skill}
                    value={skill}
                    onChange={() => handleSkillSelect(skill)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{skill}</label>
                  </div>
   ))}

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