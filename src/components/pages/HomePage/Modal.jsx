import React from 'react';
import './Home.css';

const Modal = ({ open, onClose, imge, name, cat, edad, km}) => {
  if (!open) return null;
  const imgSrc = require('../../../images/' + imge);
  
  return (
    <div className='divTotal'>
      <div className='containerr'>
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={imgSrc} alt='/' />
        <div className='modalRight'>
          <div className='contOverlay'>
            <p2 className='closeBtn' onClick={onClose}>
              X
            </p2>
            <div className='content'>
              <p2>Hola soy</p2>
              <h1>{name}</h1>
              <p2>{cat} que le gusta jugar a la pesca-pesca.</p2>
              <p2>Tengo {edad} meses de edad.</p2>
              <p2>Estoy a {km} km lejos de ti.</p2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Modal;