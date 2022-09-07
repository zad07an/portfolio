import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import Laptop from '../../../../assets/laptop1.jpg'
import './HomeArticle.css'
import './HomeArticleResponsive.css'

export default function HomeArticle({switcher}) {


  return (
    <div className='home-article-container' style={switcher ? {background: '#232323'} : {background: '#fff'}}>
      <div className="home-article-box">
        <motion.div className="home-article-desc-box" 
          initial = {{opacity: 0, x: -230}}
          whileInView = {{opacity: 1, x: 0, transition: {delay: 0.2}}}
          viewport = {{once: false, amount: 0.3}}
          transition = {{staggerChildren: 1.5}}
        >
          <div className="home-article-title-box">
            <h3 className="home-article-title" style={switcher ? {color: '#fff'} : null}>Do you want to see my expeirence?<br /><span className='home-article-highlight-text'>Let's</span> Do It</h3>
          </div>
          <div className="home-article-text-box">
            <p className='home-article-text' style={switcher ? {color: '#fff'} : null}>Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="home-article-button-box">
            <Link to='/experience' className='home-article-button'>See More<BsArrowRight className='home-article-button-icon'/></Link>
          </div>
        </motion.div>
        <motion.div className="home-article-img-box" 
          initial = {{opacity: 0, x: 230}}
          whileInView = {{opacity: 1, x: 0, transition: {delay: 0.2}}}
          viewport = {{once: false, amount: 0.3}}
          transition = {{staggerChildren: 0.5}}
        >
          <img src={Laptop} alt="" className='home-article-img'/>
        </motion.div>
      </div>
    </div>
  )
}
