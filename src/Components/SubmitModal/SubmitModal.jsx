import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import {motion} from 'framer-motion'
import './SubmitModal.css'
import './SubmitModalResponsive.css'


export default function SubmitModal({switcher}) {

  return (
    <motion.div className='submit-modal-container'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 0.1}}}
    exit = {{ opacity: 0}}
    >
      <motion.div className="submit-modal-box"
        initial = {{opacity: 0, y: -150}}
        animate = {{opacity: 1, y: 0, transition: {delay: 0.4}}}
        transition = {{staggerChildren: 0.5}}
        style = {switcher ? {background: '#505050'} : null}
      >
        <span className='submit-modal-success-icon'><FaRegCheckCircle/></span>
        <span className='submit-modal-success' style={switcher ? {color: '#fff'} : null}>Your message has been successfully sent!</span>
      </motion.div>
    </motion.div>
  )
}
