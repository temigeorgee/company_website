import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link as LinkR } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link as LinkS, animateScroll as scroll } from "react-scroll";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar ]= useState(false);

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
  }, []);

  const ChangeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', ChangeBackground);
  
  const toggleHome = () => {
    scroll.scrollToTop();
};
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={navbar ? 'navbar active': 'navbar'}>
          <div className='navbar-container container'>
            <LinkR to='/' className='navbar-logo'  onClick={toggleHome}>
              <MdFingerprint className='navbar-icon' />
              Tee
            </LinkR>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <LinkS to='home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </LinkS>
              </li>
              <li className='nav-item'>
                <LinkS
                  to='services'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </LinkS>
              </li>
              <li className='nav-item'>
                <LinkS
                  to='pricing'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pricing
                </LinkS>
              </li>
              <li className='nav-item'>
                <LinkS
                  to='contacts'
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </LinkS>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <LinkR to='/register' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </LinkR>
                ) : (
                  <LinkR to='/register' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </LinkR>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;