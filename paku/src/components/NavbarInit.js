import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import './NavbarInit.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
          window.removeEventListener('resize', showButton)
        );
      }, []);

    window.addEventListener('resize',showButton);

    return (
        <>
          <IconContext.Provider value={{ color: '#fff'}}>
            <nav className='navbar_init'>
              <div className="navbar-container Container">
                <img src={require('../images/logo.jpeg')}
                    alt='logo'/>

                <ul className={click ? 'nav-menu active' : 'nav-menu_init'}>
                    
                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          ¿QUÉ ES?
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          ¿QUÉ ES?
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          COLABORADOES
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          COLABORADOES
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          Tinder Pet
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          Tinder Pet
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          ADÓPTAME
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          ADÓPTAME
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          Tienda Online
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          Tienda Online
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          Más información
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          Más información
                        </Button>
                      </Link>
                    )}

                    {button ? (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'>
                          SIGN UP
                        </Button>
                      </Link>
                    ) : (
                      <Link to='/sign-up' className="btn-link">
                        <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'>
                          SIGN UP
                        </Button>
                      </Link>
                    )}

                </ul>
              </div>
            </nav>
          </IconContext.Provider>
        </>
    );
}

export default Navbar;