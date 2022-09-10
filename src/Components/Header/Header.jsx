import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import {motion} from 'framer-motion'
import {RiMoonFoggyLine, RiSunFoggyLine} from 'react-icons/all'
import './Header.css'
import './HeaderResponsive.css'


export default function Header({scrollToContact, contact, homeTop, scrollToHomeTop, themeSwitcher, switcher}) {

  const [click, setClick] = useState(false);
  const [small, setSmall] = useState(false);
  
  const clickHandle = () => setClick(!click);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 0)
      );
    }
  }, []);


  click ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
  
  return (
    <div ref={homeTop} className={`header ${small ? "small" : ""}`} style={click ? {background: '#0C0457'} : null}>
      <div className='nav-bar'>
        <Link to='/' className='logo' onClick={() => scrollToHomeTop(homeTop)}>Zadoyan</Link>
        <div className={click ? 'nav-items active' : 'nav-items'}>
          <ul className='nav-links'>
            <li className='nav-list'>
              <NavLink to='/' className='link'>Home</NavLink>
            </li>
            <li className='nav-list'>
              <NavLink to='/experience' className='link'>Experience</NavLink>
            </li>
            <li className='nav-list'>
              <NavLink to='/portfolio' className='link'>Portfolio</NavLink>
            </li>
            <li className='nav-list'>
              <NavLink to='/testmonials' className='link'>Testmonials</NavLink>
            </li>
            <li className='nav-list'>
              <NavLink to='/questions' className='link'>Questions</NavLink>
            </li>
          </ul>
            <div className="theme-switcher-box">
              <button className='theme-switcher' onClick={themeSwitcher}>{ switcher ? <RiSunFoggyLine className='icon-sun'/> : <RiMoonFoggyLine className='icon-moon'/> }</button>
            </div>
          <button className='nav-bar-button' onClick={() => scrollToContact(contact)}
          >Contact</button>
        </div>
        <div className='hamburger' onClick={clickHandle}>
          <Hamburger color='#fff'/>
        </div>
      </div>
    </div>
  )
}
