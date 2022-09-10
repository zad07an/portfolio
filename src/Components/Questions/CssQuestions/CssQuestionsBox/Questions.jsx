import React from 'react'
import { QuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA'
import {motion} from 'framer-motion'
import './Questions.css'
import './CssQuestionsResponsive.css'

export default function Questions({currentQuestion, onAnswer, score}) {

  return (
    <motion.div className="questions-box"
    initial = {{opacity: 0, x: -200}}
    animate = {{opacity: 1, x: 0, transition: {delay: 0.3}}}
    >
      <span className="questions-score">{score}/{QuestionsData.length}</span>
      <span className='css-questions'>CSS Questions</span>
      <div className="questions-question-box">
        <p className='questions-question'>{QuestionsData[currentQuestion].question}</p>
      </div>
      <div className='questions-answer-container'>
      {QuestionsData[currentQuestion].questionOptions.map((item, idx) => {
          return <div key={idx} className='questions-answer-box'>
            <div className="questions-answer" onClick={() => onAnswer(item.isCorrect)}>{item.answer}</div>
          </div>
        })}
      </div>
    </motion.div>
  )
}
