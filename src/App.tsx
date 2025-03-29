import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Splash';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Splash from './pages/Splash';

const App = () => {
  return (
    <div className=''>

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/sign-up" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-sign-up" element={<CaptainSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
};

export default App;