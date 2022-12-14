import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Form from './components/pages/SignUp/Form';
import Login from './components/pages/SignUp/Login';
import { AuthProvider } from './context/authContext';
import FormSuccess from './components/pages/SignUp/FormSuccess';
import LoginSuccess from './components/pages/SignUp/LoginSuccess';
import { OnlineStore } from './components/pages/OnlineStore/Store';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Adopt } from './components/pages/Adopt/Adopt'

function App(){
    return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> 
            } />          
            <Route path='/sign-up' element={<Form />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/form-success' element={<FormSuccess />} />
            <Route path='/login-success' element={<LoginSuccess />} />
            <Route path='/store' element={<OnlineStore />} />
            <Route path='/adopt' element={<Adopt />} />
          </Routes>
        </Router>
      </AuthProvider>
    );
}

export default App;