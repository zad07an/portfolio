import React from 'react'
import { SliderData } from '../../../DATA/SLIDER_DATA/SLIDER_DATA'
import Slider from '../../Slider/Slider'
import {motion} from 'framer-motion'
import './Testmonials.css'
import './TesmonialsResponsive.css'


export default function Testmonials({switcher}) {
  return (
    <motion.div className='testmonials-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    style = {switcher ? {background: 'linear-gradient(-45deg, #771F41, #12556E)'} : {background: 'linear-gradient(-45deg, #e73c7e, #23a6d5)'}}
    >
      <div className="testmonials-title-box">
        <h3 className='testmonials-title'>Testmonials</h3>
        <h3 className='testmonials-info'>Client Reviews</h3>
      </div>
      <div className="testmonials-slide-container">
        <Slider slides={SliderData} switcher={switcher}/>
      </div>
    </motion.div>
  )
}
