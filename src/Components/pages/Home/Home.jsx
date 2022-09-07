import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import HomeArticle from './HomeArticle/HomeArticle'
import {motion} from 'framer-motion'
import HomeBackground from '../../../assets/wallpaper1.jpg'
import './Home.css'
import './HomeResponsive.css'

export default function Home({switcher}) {

  return (
    <motion.div className="home-container"
    ititial = {{y: 0, opacity: 0}}
    animate = {{minHeight: '100vh', opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    >
      <div className='home-top-container' style={switcher ? {background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${HomeBackground})`, backgroundSize: 'cover'} : null}>
        <div className="home-content">
          <div className="home-title-box">
            <motion.span className='home-dev-text'
              initial = {{opacity: 0, x: 500}}
              animate = {{opacity: 1, x: 0, transition: {delay: 0.2}}}
            >{'<Front-End Developer From Armenia/>'}</motion.span>
            <motion.h1 className='home-title'
              initial = {{opacity: 0, x: -500}}
              animate = {{opacity: 1, x: 0, transition: {delay: 0.4}}}
            >Zadoyan</motion.h1>
            <motion.div className="home-button-box"
              initial = {{opacity: 0, y: 200}}
              animate = {{opacity: 1, y: 0, transition: {delay: 0.6}}}
            >
              <Link to='/portfolio' className={switcher ? 'home-button darkButton' : "home-button"}>Read more<BsArrowRight className='home-button-icon'/></Link>
            </motion.div>
          </div>
        </div>
      </div>
      <HomeArticle switcher={switcher}/>
    </motion.div>
  )
}
