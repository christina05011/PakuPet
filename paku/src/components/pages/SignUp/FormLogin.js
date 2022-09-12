import React from 'react';
import validate from './validateLoginInfo';
import useForm from './useLoginForm';
import './Form.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='fContent'>
      <form onSubmit={handleSubmit} className='formJS' noValidate>
        <div className='H1'>
          Login
        </div>
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
        
        <button className='form-Btn' type='submit'>
          Continuar 
        </button>
      </form>
    </div>
  );
};

export default FormLogin;