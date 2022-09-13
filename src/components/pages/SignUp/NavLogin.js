import React from 'react';
import './NavLogin.css';

function NavLogin() {
  return (
    <>
        <nav className='menuLogin _active'> 
            <ul className='menuLogin-item'>
                <div className="brandImgLogin">
                    <img src={require('../../../images/logo.jpeg')}
                    alt='logo'/>
                </div> 
            </ul>
        </nav>
    </>
  );
}

export default NavLogin;