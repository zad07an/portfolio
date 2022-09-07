import React, { useState } from 'react'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import { SliderData } from '../../DATA/SLIDER_DATA/SLIDER_DATA'
import {motion} from 'framer-motion'
import './Slider.css'
import './SliderResponsive.css'

export default function Slider({slides, switcher}) {

  const [current, setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 );
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length === 0 ) {
    return null;
  }

  return (
    <section className='slider-container'>
      <FaArrowAltCircleLeft className='testmonial-arrow-left' onClick={prevSlide}/>
      {
        SliderData.map((slide, index) => {
          return (
            <>
            <motion.div key={index} className={index === current ? 'slide activate' : 'slide'}
              initial = {{scale: 0.50, filter: blur(10)}}
              whileInView = {{scale: 1}}
              style = {switcher ? {background: '#505050'} : {background: '#fff'}}
              transition = {{staggerDirection: 1}}
              >
              <div className='testmonial-header-box' style={switcher ? {background: '#3D47B6'} : {background: '#5562FE'}}></div>
              <div className='testmonial-profile-pic-box'>
                <div className="testmonial-profile-box">
                  {
                    index === current
                    &&
                    (<img src={slide.img} alt="" className='testmonial-profile-pic'/>)
                  }
                </div>
              </div>
              <div className='testmonial-desc-box'>
                <span className="testmonial-desc-id" style={switcher ? {background: '#1A72BB'} : {background: '#2196f3'}}>#{slide.id}</span>
                <h3 className="testmonial-desc-title">{slide.title}</h3>
                <p className="testmonial-desc-text" style={switcher ? {color: '#fff'} : {color: '#000'}}>{slide.text}</p>
              </div>
            </motion.div>
            </>
          )
        })
      }
      <FaArrowAltCircleRight className='testmonial-arrow-right' onClick={nextSlide}/>
    </section>
  )
}
