import React from 'react'
import {motion} from 'framer-motion'
import './ExperienceBox.css'
import './ExperienceBoxResponsive.css'

export default function ExperienceBox({item, switcher}) {
  return (
    <motion.div className='experienceBox-container'
    initial = {{opacity: 0, y: 100}}
    whileInView = {{opacity: 1, y: 0, transition: {delay: 0.2}}}
    viewport = {{once: false, amount: 0.2}}
    transition = {{staggerChildren: 0.5}}
    style={switcher ? {background: '#505050'} : {background: '#fff'}}
    >
      <div className="experienceBox-title-box">
        <h3 className="experienceBox-title">{item.title}</h3>
      </div>
      <div className="experienceBox-text-box">
        <p className="experienceBox-text" style={switcher ? {color: '#fff'} : {color: '#000'}}>{item.text}        {
          item.url !== undefined ? <a href="https://sprightly-daifuku-0298d3.netlify.app" className="experienceBox-link" target='_blank'>Here is the link of game.</a> : null
        }
        </p>
      </div>
      <div className="experienceBox-img-box">
        <img src={item.img} alt="" className='experienceBox-img' />
      </div>
    </motion.div>
  )
}
