import '../HomePage/Home.css';
import React, { useState, useEffect } from 'react';

var MatchList = []; 

const Modal = ({ open, onClose, imge, name, cat}) => {  
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  if (!open) return null;
  const imgSrc = require('../../../images/' + imge);
  
  class Match {
    constructor(name, cat) {
      this.nombre = name;
      this.cat = cat;
    }
  }
  
  function crearMatch() {
    var match = new Match(name, cat);
    MatchList.push(match);
  }
  crearMatch();

  return (
    
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={imgSrc} alt='/' />
        <div className='modalRight'>
          <p2 className='closeBtn' onClick={onClose}>
            X
          </p2>
          <div className='contOverlay'>
            <div className='content'>
              <h1>{name}</h1>
              <p2>{cat}</p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;