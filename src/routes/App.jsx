import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import useInicialState from '../hooks/useInitialState';
import '../styles/global.css';

import AppContext from '../context/AppContext';

const App = () => {
  const initialState = useInicialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/React-shop" element={<Home />} />
            <Route path="/React-shop/login" element={<Login />} />
            <Route path="/React-shop/recovery-password" element={<PasswordRecovery />} />
            <Route path="/React-shop/send-email" element={<SendEmail />} />
            <Route path="/React-shop/new-password" element={<NewPassword />} />
            <Route path="/React-shop/account" element={<MyAccount />} />
            <Route path="/React-shop/singup" element={<CreateAccount />} />
            <Route path="/React-shop/checkout" element={<Checkout />} />
            <Route path="/React-shop/orders" element={<Orders />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;