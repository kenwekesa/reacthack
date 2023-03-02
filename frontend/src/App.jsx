import React from 'react'

//hooks
import { useState } from 'react'

import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Login from './pages/login/Login';

import userContext from './contexts/UserContext';

//hooks
import { useMemo } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    return (

        <userContext.Provider value={provider_value}>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home name="Dashboard" />} />
                    <Route path='orders' element={<Orders name="Orders" />} />
                    <Route path='signup' element={<Signup name="Signup" />} />
                    <Route path='login' element={<Login name="Login" />} />
                    <Route path='users' element={<Users name="Users" />} />
                    <Route path='products' element={<Products name="Products" />} />

                </Route>
            </Routes>
        </userContext.Provider>

    )
}

export default App