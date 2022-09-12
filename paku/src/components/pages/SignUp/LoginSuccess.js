import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const LoginSuccess = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className='success-content'>
      <h1 className='success'>¡Has ingresado correctamente!</h1>
      <img className='imgSuccess' src='../../../images/check.png' alt='success-image' />
      
      <Link to='/datos' onClick={closeMobileMenu}>
        <button className='form-Btn'>
          Continuar
        </button> 
      </Link>
    </div>
  );
};

export default LoginSuccess;