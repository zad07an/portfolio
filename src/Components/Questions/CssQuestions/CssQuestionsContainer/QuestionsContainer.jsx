import React from 'react'
import { QuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA'
import {Link} from 'react-router-dom'
import Questions from '../CssQuestionsBox/Questions'
import {motion} from 'framer-motion'
import './QuestionsContainer.css'
import './CssQuestionsContainerResponsive.css'

export default function QuestionsContainer({onAnswer, score, showScore, currentQuestion}) {
  return (
    <motion.div className='questions-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    >
      <div className="questions-container-title-box">
        <h3 className="questions-container-title">Questions</h3>
        <p className='questions-container-info'>CSS Questions – Introduction to CSS</p>
      </div>
      <div className="questions-boxes">
        {
          showScore ?
          <motion.div className="score-box"
          initial = {{opacity: 0, y: 200}}
          animate = {{opacity: 1, y: 0, transition: {delay: 0.2}}}
          >
            <div className="score-text-box">
              <span className='score-text'>{score}/{QuestionsData.length}</span>
            </div>
            <div className="text-box">
              {
                score <= 2 ? <span className="text">Your result is <span style={{color: 'red'}}>POOR</span></span> : score > 2 && score <= 4 ? <span className="text">Your result is <span style={{color: 'goldenrod'}}>FAIR</span></span> : score > 4 && score <= 6 ? <span className="text">Your result is <span className='gold'>GOOD</span></span> : score > 6 && score <= 8 ? <span className="text">Your result is <span style={{color: 'greenyellow'}}>EXCELLENT</span></span> : score > 8 && score <= 10 ? <span className="text">Your result is <span style={{color: 'green'}}>WOW!</span></span> : null
              }
            </div>
            <div>
              <div className="answers-container">
                <div className="answer-box">
              <div className="answers-title-box">
                <h3 className="answers-title">Q&A</h3>
              </div>
                  {
                    QuestionsData.map((item) => {
                      return <div className='answer-row' key={item.id}>
                        <p className="question">{item.question}</p>
                        <div className='answers'>
                          <span className='answer-id'>{item.id}</span>
                          <p className='answer'>{item.correct_answer}</p>
                        </div>
                        <p className='more-info-text'>{item.more_info}</p>
                        </div>
                    })
                  }
                </div>
              </div>
            </div>
          </motion.div>
          :
          <Questions onAnswer={onAnswer} currentQuestion={currentQuestion} score={score}/>
        }
      </div>
    </motion.div>
  )
}
