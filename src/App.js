import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Form from './components/pages/SignUp/Form';
import Login from './components/pages/SignUp/Login';
import { AuthProvider } from './context/authContext';
import FormSuccess from './components/pages/SignUp/FormSuccess';

function App(){
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />          
            <Route path='/sign-up' element={<Form />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/form-success' element={<FormSuccess />} />
          </Routes>
        </Router>
      </AuthProvider>
    );
}

export default App;