import React from 'react'
import {motion} from 'framer-motion'
import './SkillBox.css'

export default function SkillBox({skill, switcher}) {

  const skillBoxColor = switcher ? {color: '#fff'} : {color: '#000'}

  return (
    <motion.div className={`${switcher ? 'skillbox-container isDark' : 'skillbox-container'}`}
      initial = {{opacity: 0, x: -200, rotate: -25}}
      whileInView = {{opacity: 1, x: 0, rotate: 0, transition: {delay: 0.2}}}
      viewport = {{once: false, amount: 0.2}}
      transition = {{staggerChildren: 0.5}}
    >
        <div className="skillbox-title-box">
          <h3 className="skillbox-title">{skill.title}</h3>
        </div>
        <div className="skillbox-text-box">
          <p className="skillbox-text" style={skillBoxColor}>{skill.text}</p>
        </div>
        <div className="skillbox-percente-box">
          <span className="skillbox-span" style={skillBoxColor}>My Skill:</span>
          <span className="skillbox-percente" style={skillBoxColor}>{skill.skillPercente}%</span>
        </div>
    </motion.div>
  )
}
