import React, {useState, useEffect, useRef} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './Layouts.css'

export default function Layouts({themeSwitcher, switcher}) {

  const [sticky, setSticky] = useState('');
  

  const contact = useRef(null)
  const homeTop = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", screenY > 0 ? sticky : null);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [])

  const scrollToHomeTop = (elementRef) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToContact = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 0 ? sticky : null;
    setSticky(stickyClass);
  };

  return (
    <>
      <Header header={sticky} scrollToContact={scrollToContact} homeTop={homeTop} scrollToHomeTop={scrollToHomeTop} contact={contact} switcher={switcher} themeSwitcher={themeSwitcher}/>
      <div className='layouts-container'>
        <Outlet/>
      </div>
      <Footer contact={contact} switcher={switcher}/>
    </>
  )
}
