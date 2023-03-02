import { createContext, useEffect, useReducer } from "react"

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

    useEffect(()=>
    {
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

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
