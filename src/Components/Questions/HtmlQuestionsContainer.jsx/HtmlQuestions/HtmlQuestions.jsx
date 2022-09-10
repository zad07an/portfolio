import React from 'react'
import {motion} from 'framer-motion'
import { HtmlQuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA_HTML'
import './HtmlQuestions.css'
import './HtmlQuestionsResponsive.css'

export default function HtmlQuestions({currentHtmlQuestion, onAnswerHtml, htmlScore, switcher}) {

  const HtmlQuestionBoxStyle = switcher ? {background: '#505050'} : null
  const HtmlQuestionFontColor = switcher ? {color: '#fff'} : {color: '#000'}

  return (
    <motion.div className="html-questions-box"
    initial = {{opacity: 0, x: -200}}
    animate = {{opacity: 1, x: 0, transition: {delay: 0.3}}}
    style={HtmlQuestionBoxStyle}
    >
      <span className="html-questions-score">{htmlScore}/{HtmlQuestionsData.length}</span>
      <span className='html-questions' style={HtmlQuestionFontColor}>HTML Questions</span>
      <div className="html-questions-question-box">
        <p className='html-questions-question' style={HtmlQuestionFontColor}>{HtmlQuestionsData[currentHtmlQuestion].question}</p>
      </div>
      <div className='html-questions-answer-container'>
      {HtmlQuestionsData[currentHtmlQuestion].questionOptions.map((item, idx) => {
          return <div key={idx} className='html-questions-answer-box'>
            <div className="html-questions-answer" onClick={() => onAnswerHtml(item.isCorrect)}>{item.answer}</div>
          </div>
        })}
      </div>
    </motion.div>
  )
}
