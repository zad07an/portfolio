import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {BiErrorCircle} from 'react-icons/bi'
import './Error.css'

export default function Error() {
  return (
    <motion.div className='error-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{minHeight: '100vh', opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    >
      <motion.div className="error-box"
        initial = {{opacity: 0, y: 500}}
        animate = {{opacity: 1, y: 0,  transition: {delay: 0.5}}}
        transition = {{staggerChildren: 0.5}}
      >
        <h3 className='error-404'>Ooop's</h3>
        <BiErrorCircle className='error-icon'/>
        <span className="error-text">Page is not found!</span>
        <Link to='/' className='error-home-button'>Home</Link>
      </motion.div>
    </motion.div>
  )
}
