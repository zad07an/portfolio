import React from 'react'
import { QuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA'
import {Link} from 'react-router-dom'
import Questions from '../CssQuestionsBox/Questions'
import {motion} from 'framer-motion'
import './QuestionsContainer.css'
import './CssQuestionsContainerResponsive.css'

export default function QuestionsContainer({onAnswer, score, showScore, currentQuestion, switcher}) {


  const CssQuestionContainerStyle = switcher ? {background: 'linear-gradient(-45deg, #361157, #015675)'} : null
  const CssQuestionResultStyle = switcher ? {background: '#505050'} : null
  const CssQuestionResultFont = switcher ? {color: '#fff'} : {color: '#000'}

  return (
    <motion.div className='questions-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    style={CssQuestionContainerStyle}
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
          style={CssQuestionResultStyle}
          >
            <div className="score-text-box">
              <span className='score-text'>{score}/{QuestionsData.length}</span>
            </div>
            <div className="text-box">
            <span className="text" style={CssQuestionResultFont}>
                Your result is
                {
                  score <= 2
                  ?
                  <span style={{color: 'red'}}> POOR</span>
                  :
                  score > 2 && score <= 4
                  ?
                  <span style={{color: 'goldenrod'}}> FAIR</span>
                  :
                  score > 4 && score <= 6
                  ?
                  <span styele={{color: 'gold'}}> GOOD</span>
                  :
                  score > 6 && score <= 8 
                  ?
                  <span style={{color: 'greenyellow'}}> EXCELLENT</span>
                  :
                  score > 8 && score <= 10
                  ?
                  <span style={{color: 'green'}}> WOW! </span>
                  :
                  null
                }
              </span>
            </div>
            <div>
              <div className="answers-container">
                <div className="answer-box">
              <div className="answers-title-box">
                <h3 className="answers-title" style={CssQuestionResultFont}>Q&A</h3>
              </div>
                  {
                    QuestionsData.map((item) => {
                      return <div className='answer-row' key={item.id}>
                        <p className="question" style={CssQuestionResultFont}>{item.question}</p>
                        <div className='answers'>
                          <span className='answer-id'>{item.id}</span>
                          <p className='answer' style={CssQuestionResultFont}>{item.correct_answer}</p>
                        </div>
                        <p className='more-info-text' style={CssQuestionResultFont}>{item.more_info}</p>
                        </div>
                    })
                  }
                </div>
              </div>
            </div>
          </motion.div>
          :
          <Questions onAnswer={onAnswer} currentQuestion={currentQuestion} score={score} switcher={switcher}/>
        }
      </div>
    </motion.div>
  )
}
