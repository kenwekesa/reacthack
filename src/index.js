import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Users from './pages/users/Users';
import Products from './pages/products/Products';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './pages/orders/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home name="Dashboard" />} />
          <Route path='orders' element={<Orders name="Orders" />} />
          <Route path='signup' element={<Signup name="Signup" />} />
          <Route path='users' element={<Users name="Users" />} />
          <Route path='products' element={<Products name="Products" />} />

        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
