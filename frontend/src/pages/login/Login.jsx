import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import { useState, useEffect } from 'react';
import { AuthContextProvider } from '../../contexts/authContext';
import { authContext } from '../../contexts/authContext'

import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

//import OutlinedInput from '@mui/material';


import Users from '../users/Users'


import axios from 'axios'

import useFetch from '../../hooks/useFetch';

import userContext from '../../contexts/UserContext';




import Loadingmodal from '../../components/modal/Loadingmodal'

import './login.scss'
export const MessagemodalContext = React.createContext();




function Login(props) {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const [validate, setValidate] = useState("")


    
    const {user, loading, error, dispatch} = useContext(authContext)
    const [credentials, setCredentials] = useState(
        {username: undefined,
        password: undefined}
    )

    const navigate = useNavigate()



   


    const handleUsernameChange = (e) => {
        setCredentials({ ...credentials, username: e.target.value })
        setUsername(e.target.value)

        //console.log(values)
    }

        
        const handleSubmit =async () =>
    {

      try {
        
        
        
        
        
        const res = await axios.post(`/users/`,user).then(res => {
            //setData(res.data);
         
            
          })
          .catch(err => {
            
          })
      } catch (error) {
        console.log(error)
      }
    }
    
    




    const location = useLocation()
const handleLogin =async (e)=>
{

    const pathName = location.state?.from || '/'

    const user = {"username":username,"password":password}
   e.preventDefault() //This helps avoid reloading the page

    dispatch({type:"LOGIN_START"})
    console.log(dispatch)
    console.log("hollllaaaaaaaaaaaaaaa")

    console.log(pathName)

   try {
    const res = await axios.post('/auth/login', user)
    dispatch({type:"LOGIN_SUCCESS", payload:res.data.details})
    navigate('/')
    
   } catch (error) {
    //dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
   }
   console.log(user)
}


    useEffect(() => {
  
    


    }, [password]);






    return (
        
        <div className="login">
            <Navbar title={props.name} />
            <div className="formContainer">

                <div className="login_form">
                    <div className="form_head">
                        Login
                    </div>
                    <div className="form_body">
                   


                        <div className="form_field">

                            <div className="username_div">
                                <input type='text' placeholder='Username'
                                    className={`input ${validate}`}
                                    onChange={handleUsernameChange} />
                            <div className='form_message'></div>
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




                              
                            </div>
                        </div>
                      

                        <div className="form_field">


</div>


                        <div className="button" >
                            <span className='submit_button' disabled = {loading} onClick={handleLogin}>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )


}

export default Login