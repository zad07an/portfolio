import React, { useEffect, useState } from 'react'
import {FaInstagram, FaFacebook, FaGithub, FaTelegram, FaLinkedin, AiOutlineDownload} from 'react-icons/all'
import MainPortfolio from './MainPortfolio/MainPortfolio'
import {motion} from 'framer-motion'
import PortfolioImage from '../../../assets/myImage.jpg'
import './Portfolio.css'
import './PortfolioResponsive.css'


export default function Portfolio({switcher}) {

  const [socMedia, setSocMedia] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSocMedia(window.pageYOffset > 800 ? 'portfolio-social-media-box active' : '')
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setSocMedia(window.pageYOffset > 800 ? 'portfolio-social-media-box active' : '')
      })
    }
  }, [])

  return (
    <motion.div className={switcher ? 'portfolio-container dark' : 'portfolio-container'}
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    >
      <div className="portfolio-content">
        <motion.div className="portfolio-box"
          initial = {{opacity: 0, x: -500}}
          animate = {{opacity: 1, x: 0, transition: {delay: 0.6}}}
          transition = {{staggerChildren: 0.5}}
        >
          <div className="portfolio-welcome-box">
            <div className="portfolio-hello-box">
              <h3 className='portfolio-hi-text'>Hi! I am<span className='portfolio-highlight-text'>React JS Developer</span></h3>
              <h3 className='portfolio-name'>Aram Zadoyan</h3>
              <div className="portfolio-desc">
                <p className="portfolio-desc-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum recusandae molestias quasi, beatae ullam?</p>
              </div>
              <div className="portfolio-download-button-box">
                <button className='portfolio-download-button'>Download CV<AiOutlineDownload className='portfolio-download-icon'/></button>
              </div>
              <div className="portfolio-media-box-container">
                <div className="portfolio-media-follow-me-box">
                  <h3 className="portfolio-media-follow-me-text">Follow Me On Social Medias</h3>
                </div>
                <div className={`portfolio-social-media-box ${socMedia ? 'portfolio-social-media-box active' : ""}`}>
                  <a href='https://www.instagram.com/zad07an_/' target='_blank'>
                    <FaInstagram className={socMedia ? 'portfolio-instagram-icon soc-icons isActive' : 'portfolio-instagram-icon'}/>
                  </a>
                  <a href='https://www.facebook.com/aram.zadoyan' target='_blank'>
                    <FaFacebook className={socMedia ? 'portfolio-facebook-icon soc-icons isActive' : 'portfolio-facebook-icon'}/>
                  </a>
                  <a href='https://github.com/zad07an'  target='_blank'>
                    <FaGithub className={socMedia ? 'portfolio-github-icon soc-icons isActive' : 'portfolio-github-icon'}/>
                  </a>
                  <a href='https://t.me/zad07an' target='_blank'>
                    <FaTelegram className={socMedia ? 'portfolio-telegram-icon soc-icons isActive' : 'portfolio-telegram-icon'}/>
                  </a>
                  <a href='https://www.linkedin.com/in/aram-zadoyan-b3344b247/' target='_blank'>
                    <FaLinkedin className={socMedia ? 'portfolio-linkedin-icon soc-icons isActive' : 'portfolio-linkedin-icon'}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="portfolio-image-box"
          initial = {{opacity: 0, y: 500}}
          animate = {{opacity: 1, y: 0,  transition: {delay: 0.5}}}
          transition = {{staggerChildren: 0.5}}
        >
          <img src={PortfolioImage} alt="" className='portfolio-img' />
        </motion.div>
      </div>
      <MainPortfolio switcher={switcher}/>
    </motion.div>
  )
}
