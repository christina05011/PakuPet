import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='fContent'>
      <form onSubmit={handleSubmit} className='formJS' noValidate>
        <h1>
          ¡Empieza con nosotros hoy! Crea tu cuenta con la siguiente información.
        </h1>
        <div className='inputs'>
          <label className='label'>Usuario</label>
          <input
            className='input'
            type='text'
            name='username'
            placeholder='Ingresa tu nombre de usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='inputs'>
          <label className='label'>Email</label>
          <input
            className='input'
            type='email'
            name='email'
            placeholder='Ingresa tu email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='inputs'>
          <label className='label'>Contraseña</label>
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='inputs'>
          <label className='label'>Confirmar Contraseña</label>
          <input
            className='input'
            type='password'
            name='password2'
            placeholder='Confirma tu contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-Btn' type='submit'>
          Crear cuenta
        </button>
        <span className='input-Login'>
          ¿Ya tienes una cuenta? Ingresa <Link to='/sign-in' className="input-Login" onClick={closeMobileMenu}>
                                            aquí
                                          </Link>
          .
        </span>
      </form>
    </div>
  );
};

export default FormSignup;