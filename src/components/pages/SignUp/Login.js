import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin';
import LoginSuccess from './LoginSuccess';
import NavLogin from './NavLogin';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <NavLogin />
      <div className='background'>
        {!isSubmitted ? (
          <div className='signup'>
            <FormLogin submitForm={submitForm} />
          </div>
        ) : (
          <LoginSuccess />
        )}
      </div>
    </>
  );
};

export default Login;