import React from 'react'

//hooks
import { useState,useContext } from 'react'

import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Login from './pages/login/Login';

import userContext from './contexts/UserContext';
import {authContext, AuthContextProvider } from './contexts/authContext';


//hooks
import { useMemo } from 'react';

import { BrowserRouter, Routes, Route, Navigate,useLocation } from 'react-router-dom';
import Orders from './pages/orders/Orders';

function App() {
    const [users, setUsers] = useState([{

        password: "",
        username: "Kennedy",
        email: "",
        city: "",
        phone: "",
        address: ""
    }])

    const provider_value = useMemo(() => ({ users, setUsers }), [users, setUsers])
    const con = useContext(authContext)


    const ProtectedRoute = ({children}) =>
    {
      const location = useLocation()
    
       console.log(con.user)
      if(!con.user)
      {
        return <Navigate to="/login" state={{ from: location.pathname }} />
      }
      return children;
    }

    const location = useLocation()

    const pathName = location.state?.from || '/'

    return (
<AuthContextProvider>
        <userContext.Provider value={provider_value}>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home name="Dashboard" />} />
                    <Route path='orders' element={<Orders name="Orders" />} />
                    <Route path='signup' element={<Signup name="Signup" />} />
                    <Route path='login' element={<Login name="Login" />} />
                    <Route path='users' element={<Users name="Users" />} />
                    <Route path='/login' element={<Login />} state={{ from: location.pathname }}/> 
                    <Route path='products' element={
                        <ProtectedRoute>
                            <Products name="Products" />
                        </ProtectedRoute>
                            } />

                </Route>
            </Routes>
        </userContext.Provider>
        </AuthContextProvider>

    )
}

export default App