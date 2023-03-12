import { createContext, useEffect, useReducer } from "react"
import Cookies from 'js-cookie'

import axios from "axios"

const INITIAL_STATE ={
    user: null,
    loading: false,
    error: null
    
}

export const authContext = createContext(INITIAL_STATE)

const authReducer = (state, action)=>
{
    switch(action.type){
        case "LOGIN_START":
            return{
                user: JSON.parse(localStorage.getItem("user")) || null,
                loading:true,
                error: null
            }
        case "LOGIN_SUCCESS":

         
            return {
                user:action.payload,
                loading: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

//here children are components which wana reach our data in here
export const AuthContextProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)

   /* useEffect(()=>
    {
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])


*/

useEffect(() => {
    const accessToken = Cookies.get('access_token');

    if (accessToken) {
      fetchUserData(accessToken);
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, []);


    const fetchUserData = async (accessToken) => {
        try {
          const response = await axios.get('/api/authenticate', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
      
          // If the access token is valid, update the state with the user data
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              user: response.data,
              token: accessToken,
            },
          });
        } catch (error) {
          // If the access token is invalid, log out the user
          dispatch({ type: 'LOGOUT' });
        }
      };

      

    return (
        <authContext.Provider 
        value={{
            user:state.user, 
            loading: state.loading, 
            error:state.error,
             dispatch}}>

            {children}
        </authContext.Provider>
    )
}



