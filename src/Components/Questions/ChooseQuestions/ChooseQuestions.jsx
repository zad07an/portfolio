import React from 'react'
import { Link } from 'react-router-dom' 
import {motion} from 'framer-motion'
import './ChooseQuestions.css'
import './ChooseQuestionResponsive.css'

export default function ChooseQuestions({switcher}) {

  const chooseQuestionContainerStyle = switcher ? {background: 'linear-gradient(-45deg, #361157, #015675)'} : null

  const chooseQuestionStyle = switcher ? {background: '#505050'} : null

  return (
    <motion.div className='choose-questions-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    style={chooseQuestionContainerStyle}
    >
      <div className="choose-questions-container-title-box">
        <h3 className="choose-questions-container-title">Questions</h3>
      </div>
      <motion.div className="choose-questions-choose-box"
      initial = {{opacity: 0, y: 200}}
      animate = {{opacity: 1, y: 0, transition: {delay: 0.3}}}
      >
        <Link to='/questions/css' className='css-box' style={chooseQuestionStyle}>CSS</Link>
        <Link to='/questions/html' className='html-box' style={chooseQuestionStyle}>HTML</Link>
      </motion.div>
    </motion.div>
  )
}
