import React from 'react'
import {motion} from 'framer-motion'
import { ExperienceData } from '../../../DATA/EXPERIENCE_DATA/EXPERIENCE_DATA'
import ExperienceBox from './ExperienceBox/ExperienceBox'
import './Experience.css'
import './ExperienceResponsive.css'

export default function Experience({switcher}) {
  return (
    <motion.div className='experience-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    style={switcher ? {background: 'linear-gradient(-45deg, #002634, #003a2c)'} : {background: 'linear-gradient(-45deg, #23a6d5, #23d5ab)'}}>
      <div className="experience-box">
        <div className="experience-title-box">
          <h3 className="experience-title">Experience</h3>
          <p className="experience-text">Here is applications made by me</p>
        </div>
        <div className='experience-content'>
          {
            ExperienceData.map((item) => {
              return <ExperienceBox key={item.id} item={item} switcher={switcher}/>
            })
          }
        </div>

      </div>
    </motion.div>
  )
}
