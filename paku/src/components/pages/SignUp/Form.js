import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignUp';
import FormSuccess from './FormSuccess';
import NavLogin from './NavLogin';

const Form = () => {
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
            <FormSignup submitForm={submitForm} />
          </div>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;