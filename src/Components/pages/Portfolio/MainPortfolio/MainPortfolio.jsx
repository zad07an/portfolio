import React from 'react'
import { SkillData } from '../../../../DATA/SKILL_DATA/SKILL_DATA'
import SkillBox from './SkillBox/SkillBox'
import {motion} from 'framer-motion'
import './MainPortfolio.css'
import './MainPortfolioResponsive.css'

export default function MainPortfolio({switcher}) {
  return (
    <motion.div className='main-portfolio-container'
    initial = {{opacity: 0}}
    animate = {{opacity: 1, transition: {delay: 1}}}
    >
      <div className="main-portfolio-box">
        <div className="main-portfolio-about-box">
          <h3 className='main-portfolio-about-title'>About Me</h3>
          <p className="main-portfolio-about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt laboriosam reprehenderit ipsum, libero quo tempora accusantium est repellat dolorum et, animi id atque placeat quibusdam veritatis. Quae, corporis ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt laboriosam reprehenderit ipsum, libero quo tempora accusantium est repellat dolorum et, animi id atque placeat quibusdam veritatis. Quae, corporis ipsa!</p>
        </div>
        <div className="main-portfolio-skill-container">
          {
            SkillData.map((skill) => {
              return <SkillBox key={skill.id} skill={skill} switcher={switcher}/>
            })
          }
        </div>
      </div>
    </motion.div>
  )
}
