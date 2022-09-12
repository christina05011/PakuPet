import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [click, setClick] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'menu active' : 'menu'}> 
            <ul className='menu-items' onClick={showSidebar}>
                <Link to='/' className="brand_img" onClick={closeMobileMenu}>
                    <img src={require('../images/logo.jpeg')}
                    alt='logo'/>
                </Link> 

                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                    <Link to={item.path} className="links">
                        {item.title}
                    </Link>
                    </li>
                );
                })}
            </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;